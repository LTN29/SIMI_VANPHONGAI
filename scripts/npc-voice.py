#!/usr/bin/env python3
"""Tạo giọng đọc cho các bước hướng dẫn của Trợ lý SIMI – gói chung trong 1 file src/renderer/npc-voice.js.

Khoá = FNV-1a 32 bit của câu chữ (UTF-8, đã bỏ khoảng trắng hai đầu) + "-" + số byte – giống voiceKey() trong npc.js,
nên sửa câu nào thì câu đó cần tạo lại file. Câu chưa có file thì app đọc bằng giọng tiếng Việt của máy (nếu có).

Cần: Python 3.10+, ffmpeg, `pip install vieneu` (chạy CPU, không cần GPU; lần đầu tải mô hình ~1 GB từ Hugging Face).

  python scripts/npc-voice.py                 # tạo file còn thiếu từ src/renderer/npc-guides.js
  python scripts/npc-voice.py --json g.json   # hoặc từ danh sách hướng dẫn xuất ra (IT sửa trong tab Quản trị)
  python scripts/npc-voice.py --prune         # bỏ giọng của câu không còn dùng
"""
import argparse, base64, json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "renderer", "npc-voice.js")
HEAD = "/* Giọng đọc các bước hướng dẫn của Trợ lý SIMI – tạo bằng scripts/npc-voice.py, không sửa tay. clips: khoá → Opus (Ogg) base64 */\nwindow.VPNpcVoice = "
VOICE = "Đoan Trang"  # giọng nữ miền Bắc, tự nhiên (VieNeu-TTS v3 Turbo)


def voice_key(text: str) -> str:
    b = text.strip().encode("utf-8")
    h = 0x811C9DC5
    for x in b:
        h ^= x
        h = (h * 0x01000193) & 0xFFFFFFFF
    return f"{h:08x}-{len(b)}"


EMOJI = re.compile("[\U0001F000-\U0001FAFF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200D★›‹↗■]")


def speech_text(t: str) -> str:
    """Câu cho giọng đọc: đọc ký hiệu thành chữ, bỏ emoji, phiên âm vài từ để đọc đúng."""
    rep = [
        (r"↩\s*Bỏ", "nút Bỏ"), (r"\s*\(biểu tượng ↗\)", " (có dấu mũi tên)"), (r"\s*\(■\)", ""), (r"\+\s*Thêm", "nút Thêm"),
        (r"bấm 🖼️", "bấm nút ảnh"), (r"nút ＋", "nút dấu cộng"), (r"＋\s*", ""), (r"Bấm – ", "Bấm nút trừ "), (r"⋯", "dấu ba chấm"),
        (r"↩", "nút trả lời"), (r"x\.y\.z", "mới"), (r"(\d)\s*[–-]\s*(\d)", r"\1 đến \2"), (r"\s>\s", " lớn hơn "), (r"\s&\s", " và "),
        (r"(phím|Gõ|gõ) /(?=[\s.,]|$)", r"\1 dấu gạch chéo"), (r"@(?=\w)", "a còng "), (r"@", "a còng"),
        (r"\s/\s", " hoặc "), (r"\bSIMI\b", "Xi Mi"), (r"\bW A S D\b", "W, A, S, D"), (r"Ctrl\s*\+\s*", "Control "), (r"Shift\s*\+\s*", "Shift "),
        (r"\s*→\s*", ", rồi "), (r"\s*[–—]\s*", ", "), (r"…|\.\.\.", ""), (r"\s*\+\s*", " cộng "),
    ]
    for a, b in rep:
        t = re.sub(a, b, t)
    t = EMOJI.sub(" ", t)
    t = re.sub(r"[\"“”]", "", t)
    t = re.sub(r"\s+([,.):])", r"\1", t)
    t = re.sub(r"\(\s+", "(", t)
    return re.sub(r"\s+", " ", t).strip(" ,")


def guides_from_js():
    js = os.path.join(ROOT, "src", "renderer", "npc-guides.js")
    code = "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window.VPNpcGuides.GUIDES))"
    return json.loads(subprocess.run(["node", "-e", code, js], check=True, capture_output=True, text=True, encoding="utf-8").stdout)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", help="file JSON danh sách hướng dẫn ([{title, steps:[{text}]}] hoặc {guides:[…]})")
    ap.add_argument("--voice", default=VOICE)
    ap.add_argument("--prune", action="store_true")
    ap.add_argument("--dry", action="store_true", help="chỉ in câu sẽ đọc")
    a = ap.parse_args()
    guides = guides_from_js()
    if a.json:
        with open(a.json, encoding="utf-8") as f:
            j = json.load(f)
        guides = j.get("guides", j) if isinstance(j, dict) else j
    texts = {}
    for g in guides:
        for st in g.get("steps", []):
            t = str(st.get("text", "")).strip()
            if t:
                texts[voice_key(t)] = t
    pack = {"voice": a.voice, "clips": {}}
    if os.path.exists(OUT):
        raw = open(OUT, encoding="utf-8").read()
        pack = json.loads(raw[raw.index("window.VPNpcVoice = ") + len("window.VPNpcVoice = "):].rstrip().rstrip(";"))
    clips = pack.setdefault("clips", {})
    todo = [(k, t) for k, t in texts.items() if k not in clips]
    print(f"{len(texts)} câu, cần tạo {len(todo)}")
    if a.dry:
        for k, t in todo:
            print(k, "|", speech_text(t))
        return
    if todo:
        from vieneu import Vieneu
        tts = Vieneu()
        for i, (k, t) in enumerate(todo, 1):
            s = speech_text(t)
            audio = tts.infer(s, voice=a.voice, temperature=0.8)
            with tempfile.TemporaryDirectory() as d:
                wav, ogg = os.path.join(d, "a.wav"), os.path.join(d, "a.ogg")
                tts.save(audio, wav)
                # cắt khoảng lặng đầu / cuối, chuẩn âm lượng, Opus 32 kbps mono (nhẹ, Electron phát được)
                subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-af",
                                "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,"
                                "loudnorm=I=-17:TP=-1.5:LRA=9,apad=pad_dur=0.15",
                                "-ac", "1", "-ar", "48000", "-c:a", "libopus", "-b:a", "32k", ogg], check=True)
                clips[k] = base64.b64encode(open(ogg, "rb").read()).decode("ascii")
            print(f"[{i}/{len(todo)}] {k}  {s[:70]}")
    if a.prune:
        for k in [k for k in clips if k not in texts]:
            del clips[k]
            print("bỏ", k)
    pack["clips"] = dict(sorted(clips.items()))
    tmp = OUT + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        f.write(HEAD + json.dumps(pack, ensure_ascii=False, separators=(",", ":")) + ";\n")
    os.replace(tmp, OUT)
    print("đã ghi", OUT, round(os.path.getsize(OUT) / 1048576, 2), "MB,", len(pack["clips"]), "câu")


if __name__ == "__main__":
    sys.exit(main())
