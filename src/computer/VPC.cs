// Điều khiển chuột, bàn phím, chụp màn hình trên Windows (biên dịch lúc chạy bằng PowerShell Add-Type, không cần cài gì thêm).
// Giao thức: mỗi dòng 1 lệnh, các phần cách nhau bằng tab; trả về 1 dòng "OK …" hoặc "ERR …".
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;

public static class VPC {
  [DllImport("user32.dll")] static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] static extern bool SetCursorPos(int x, int y);
  [DllImport("user32.dll")] static extern bool GetCursorPos(out POINT p);
  [DllImport("user32.dll", SetLastError = true)] static extern uint SendInput(uint n, INPUT[] inputs, int size);
  [DllImport("user32.dll")] static extern int GetSystemMetrics(int i);
  [DllImport("user32.dll")] static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll", CharSet = CharSet.Unicode)] static extern int GetWindowText(IntPtr h, StringBuilder s, int n);

  delegate bool EnumWindowsProc(IntPtr h, IntPtr param);
  [DllImport("user32.dll")] static extern bool EnumWindows(EnumWindowsProc callback, IntPtr param);
  [DllImport("user32.dll")] static extern bool IsWindowVisible(IntPtr h);
  [DllImport("user32.dll")] static extern bool IsWindow(IntPtr h);
  [DllImport("user32.dll")] static extern bool IsIconic(IntPtr h);
  [DllImport("user32.dll")] static extern bool ShowWindow(IntPtr h, int command);
  [DllImport("user32.dll")] static extern bool SetForegroundWindow(IntPtr h);

  static string Windows() {
    var result = new StringBuilder();
    EnumWindows(delegate(IntPtr h, IntPtr param) {
      if (!IsWindowVisible(h)) return true;
      var title = new StringBuilder(1024); GetWindowText(h, title, title.Capacity);
      if (title.Length == 0) return true;
      if (result.Length > 0) result.Append("\n");
      result.Append(h.ToInt64()).Append("\t").Append(title.ToString().Replace("\t", " ").Replace("\r", " ").Replace("\n", " "));
      return true;
    }, IntPtr.Zero);
    return Convert.ToBase64String(Encoding.UTF8.GetBytes(result.ToString()));
  }

  static void Focus(string id) {
    var h = new IntPtr(long.Parse(id));
    if (!IsWindow(h) || !IsWindowVisible(h)) throw new Exception("Window no longer available; list windows again");
    if (IsIconic(h)) ShowWindow(h, 9);
    SetForegroundWindow(h); Thread.Sleep(200);
    if (GetForegroundWindow() != h) throw new Exception("Windows blocked focus; ask the user to select this window");
  }

  [StructLayout(LayoutKind.Sequential)] struct POINT { public int X; public int Y; }
  [StructLayout(LayoutKind.Sequential)] struct INPUT { public uint type; public InputUnion U; }
  [StructLayout(LayoutKind.Explicit)] struct InputUnion { [FieldOffset(0)] public MOUSEINPUT mi; [FieldOffset(0)] public KEYBDINPUT ki; }
  [StructLayout(LayoutKind.Sequential)] struct MOUSEINPUT { public int dx; public int dy; public uint mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }
  [StructLayout(LayoutKind.Sequential)] struct KEYBDINPUT { public ushort wVk; public ushort wScan; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }

  const uint INPUT_MOUSE = 0, INPUT_KEYBOARD = 1;
  const uint KEYUP = 0x0002, UNICODE = 0x0004, EXTENDED = 0x0001;
  const uint WHEEL = 0x0800, HWHEEL = 0x1000;

  public static void Init() { try { SetProcessDPIAware(); } catch { } }

  static void Send(params INPUT[] inputs) {
    if (SendInput((uint)inputs.Length, inputs, Marshal.SizeOf(typeof(INPUT))) != inputs.Length)
      throw new Exception("Windows chặn thao tác (có thể cửa sổ đang chạy quyền Administrator)");
  }
  static INPUT Mouse(uint flags, uint data) { var i = new INPUT(); i.type = INPUT_MOUSE; i.U.mi.dwFlags = flags; i.U.mi.mouseData = data; return i; }
  static INPUT Key(ushort vk, ushort scan, uint flags) { var i = new INPUT(); i.type = INPUT_KEYBOARD; i.U.ki.wVk = vk; i.U.ki.wScan = scan; i.U.ki.dwFlags = flags; return i; }

  static int W { get { return GetSystemMetrics(0); } }
  static int H { get { return GetSystemMetrics(1); } }

  static string Shot(int maxW, int maxH) {
    int w = W, h = H;
    using (var bmp = new Bitmap(w, h, PixelFormat.Format24bppRgb)) {
      using (var g = Graphics.FromImage(bmp)) g.CopyFromScreen(0, 0, 0, 0, new Size(w, h));
      // vẽ con trỏ chuột để AI biết chuột đang ở đâu
      POINT p; if (GetCursorPos(out p)) using (var g = Graphics.FromImage(bmp)) {
        g.SmoothingMode = SmoothingMode.AntiAlias;
        var pts = new PointF[] { new PointF(p.X, p.Y), new PointF(p.X, p.Y + 18), new PointF(p.X + 5, p.Y + 13), new PointF(p.X + 12, p.Y + 13) };
        g.FillPolygon(Brushes.White, pts); g.DrawPolygon(Pens.Black, pts);
      }
      double s = Math.Min(1.0, Math.Min((double)maxW / w, (double)maxH / h));
      int tw = Math.Max(1, (int)Math.Round(w * s)), th = Math.Max(1, (int)Math.Round(h * s));
      using (var outBmp = new Bitmap(tw, th, PixelFormat.Format24bppRgb)) {
        using (var g = Graphics.FromImage(outBmp)) { g.InterpolationMode = InterpolationMode.HighQualityBicubic; g.DrawImage(bmp, 0, 0, tw, th); }
        using (var ms = new MemoryStream()) {
          // JPEG thay PNG: ảnh nhỏ hơn ~5 lần → gửi lên mô hình nhanh hơn ở mỗi bước điều khiển máy
          var jpeg = Array.Find(ImageCodecInfo.GetImageEncoders(), c => c.FormatID == ImageFormat.Jpeg.Guid);
          var ep = new EncoderParameters(1); ep.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 80L);
          outBmp.Save(ms, jpeg, ep);
          return "OK " + tw + " " + th + " " + w + " " + h + " " + Convert.ToBase64String(ms.ToArray());
        }
      }
    }
  }

  static uint Down(string b) { return b == "right" ? 0x0008u : b == "middle" ? 0x0020u : 0x0002u; }
  static uint Up(string b) { return b == "right" ? 0x0010u : b == "middle" ? 0x0040u : 0x0004u; }

  static void Click(int x, int y, string b, int n) {
    SetCursorPos(x, y); Thread.Sleep(60);
    for (int i = 0; i < n; i++) { Send(Mouse(Down(b), 0), Mouse(Up(b), 0)); Thread.Sleep(70); }
  }

  static void Drag(int x1, int y1, int x2, int y2) {
    SetCursorPos(x1, y1); Thread.Sleep(80);
    Send(Mouse(0x0002, 0)); Thread.Sleep(80);
    for (int i = 1; i <= 20; i++) { SetCursorPos(x1 + (x2 - x1) * i / 20, y1 + (y2 - y1) * i / 20); Thread.Sleep(15); }
    Thread.Sleep(80); Send(Mouse(0x0004, 0));
  }

  static void Scroll(int x, int y, int dy, int dx) {
    if (x >= 0 && y >= 0) { SetCursorPos(x, y); Thread.Sleep(50); }
    if (dy != 0) Send(Mouse(WHEEL, unchecked((uint)(-dy * 120))));
    if (dx != 0) Send(Mouse(HWHEEL, unchecked((uint)(dx * 120))));
  }

  static void Type(string text) {
    foreach (char c in text) {
      if (c == '\r') continue;
      if (c == '\n') { Send(Key(0x0D, 0, 0), Key(0x0D, 0, KEYUP)); }
      else if (c == '\t') { Send(Key(0x09, 0, 0), Key(0x09, 0, KEYUP)); }
      else Send(Key(0, c, UNICODE), Key(0, c, UNICODE | KEYUP));
      Thread.Sleep(8);
    }
  }

  static ushort Vk(string k) {
    switch (k) {
      case "ctrl": case "control": return 0x11;
      case "shift": return 0x10;
      case "alt": case "option": return 0x12;
      case "win": case "windows": case "cmd": case "command": case "meta": case "super": return 0x5B;
      case "enter": case "return": return 0x0D;
      case "tab": return 0x09;
      case "esc": case "escape": return 0x1B;
      case "backspace": return 0x08;
      case "delete": case "del": return 0x2E;
      case "insert": return 0x2D;
      case "space": return 0x20;
      case "up": return 0x26; case "down": return 0x28; case "left": return 0x25; case "right": return 0x27;
      case "home": return 0x24; case "end": return 0x23;
      case "pageup": case "pgup": return 0x21; case "pagedown": case "pgdn": return 0x22;
      case "printscreen": return 0x2C;
      case "capslock": return 0x14;
    }
    if (k.Length > 1 && k[0] == 'f') { int n; if (int.TryParse(k.Substring(1), out n) && n >= 1 && n <= 24) return (ushort)(0x6F + n); }
    if (k.Length == 1) {
      char c = char.ToUpperInvariant(k[0]);
      if ((c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) return (ushort)c;
      switch (c) { case '-': return 0xBD; case '=': return 0xBB; case ',': return 0xBC; case '.': return 0xBE; case '/': return 0xBF; case ';': return 0xBA; case '\'': return 0xDE; case '[': return 0xDB; case ']': return 0xDD; case '\\': return 0xDC; case '`': return 0xC0; }
    }
    throw new Exception("Không biết phím: " + k);
  }
  static bool Ext(ushort vk) { return (vk >= 0x21 && vk <= 0x28) || vk == 0x2D || vk == 0x2E || vk == 0x5B; }

  static void Keys(string combo) {
    var parts = combo.ToLowerInvariant().Replace(" ", "").Split('+');
    var vks = new ushort[parts.Length];
    for (int i = 0; i < parts.Length; i++) vks[i] = Vk(parts[i]);
    for (int i = 0; i < vks.Length; i++) { Send(Key(vks[i], 0, Ext(vks[i]) ? EXTENDED : 0)); Thread.Sleep(25); }
    for (int i = vks.Length - 1; i >= 0; i--) { Send(Key(vks[i], 0, KEYUP | (Ext(vks[i]) ? EXTENDED : 0))); Thread.Sleep(20); }
  }

  static string Active() {
    var sb = new StringBuilder(512); GetWindowText(GetForegroundWindow(), sb, 512); return sb.ToString();
  }

  public static string Run(string line) {
    try {
      var a = line.Split('\t');
      switch (a[0]) {
        case "size": return "OK " + W + " " + H;
        case "shot": return Shot(int.Parse(a[1]), int.Parse(a[2]));
        case "move": SetCursorPos(int.Parse(a[1]), int.Parse(a[2])); return "OK";
        case "click": Click(int.Parse(a[1]), int.Parse(a[2]), a[3], int.Parse(a[4])); return "OK";
        case "drag": Drag(int.Parse(a[1]), int.Parse(a[2]), int.Parse(a[3]), int.Parse(a[4])); return "OK";
        case "scroll": Scroll(int.Parse(a[1]), int.Parse(a[2]), int.Parse(a[3]), int.Parse(a[4])); return "OK";
        case "type": Type(Encoding.UTF8.GetString(Convert.FromBase64String(a[1]))); return "OK";
        case "keys": Keys(a[1]); return "OK";
        case "windows": return "OK " + Windows();
        case "focus": Focus(a[1]); return "OK";
        case "active": return "OK " + Active();
        case "open": {
          var psi = new System.Diagnostics.ProcessStartInfo(Encoding.UTF8.GetString(Convert.FromBase64String(a[1])));
          psi.UseShellExecute = true; System.Diagnostics.Process.Start(psi); return "OK";
        }
        default: return "ERR lệnh lạ: " + a[0];
      }
    } catch (Exception e) { return "ERR " + e.Message.Replace("\r", " ").Replace("\n", " "); }
  }
}
