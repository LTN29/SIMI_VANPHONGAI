package vn.simi.vanphongai;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

/**
 * Văn Phòng AI trên Android: mở trang điện thoại của SIMI Gateway (/m) – Sảnh 3D, Chat AI, Tin nhắn với đồng nghiệp.
 * Trang gọi window.VPAndroid.setOrientation(...) để Sảnh xoay ngang được, các tab khác giữ màn dọc.
 */
public class MainActivity extends Activity {
    private static final int PICK_FILES = 41;
    private WebView web;
    private FrameLayout root;
    private ValueCallback<Uri[]> pending;
    private String home;
    private String host;
    private boolean showingError;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        home = BuildConfig.GATEWAY_URL + "/m";
        host = Uri.parse(BuildConfig.GATEWAY_URL).getHost();

        root = new FrameLayout(this);
        root.setBackgroundColor(Color.WHITE);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#F4F6FB"));
        root.addView(web, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        setContentView(root);
        fitSystemBars();

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setUserAgentString(s.getUserAgentString() + " VanPhongAI-Android/" + BuildConfig.VERSION_NAME);
        CookieManager.getInstance().setAcceptCookie(true);
        web.addJavascriptInterface(new Bridge(), "VPAndroid");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (isOurs(u)) return false;
                if (!req.isForMainFrame()) return false;
                openOutside(u); // link ngoài (YouTube, web…) → trình duyệt / app tương ứng
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                if (req.isForMainFrame()) showOffline();
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                if (url != null && url.startsWith("http")) showingError = false;
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> cb, FileChooserParams params) {
                if (pending != null) pending.onReceiveValue(null);
                pending = cb;
                Intent pick = new Intent(Intent.ACTION_GET_CONTENT);
                pick.addCategory(Intent.CATEGORY_OPENABLE);
                String[] types = params.getAcceptTypes();
                pick.setType(types != null && types.length > 0 && types[0] != null && !types[0].isEmpty() ? types[0] : "*/*");
                if (params.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE) pick.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
                try {
                    startActivityForResult(Intent.createChooser(pick, "Chọn ảnh"), PICK_FILES);
                } catch (ActivityNotFoundException e) {
                    pending = null;
                    return false;
                }
                return true;
            }

            @Override
            public void onPermissionRequest(PermissionRequest request) {
                request.deny(); // trang không cần camera / micro
            }
        });

        web.setDownloadListener((url, ua, cd, mime, len) -> openOutside(Uri.parse(url)));

        if (state != null) web.restoreState(state);
        else web.loadUrl(startUrl(getIntent()));
    }

    // ---- hiển thị dưới thanh trạng thái / thanh điều hướng (Android 15 vẽ tràn viền) ----
    private void fitSystemBars() {
        if (Build.VERSION.SDK_INT >= 30) {
            root.setOnApplyWindowInsetsListener((v, insets) -> {
                android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                v.setPadding(bars.left, bars.top, bars.right, bars.bottom);
                return WindowInsets.CONSUMED;
            });
        } else {
            root.setFitsSystemWindows(true);
        }
        applyImmersive(getResources().getConfiguration().orientation == Configuration.ORIENTATION_LANDSCAPE);
    }

    // màn ngang (Sảnh): ẩn thanh trạng thái / điều hướng cho rộng chỗ, vuốt từ mép để hiện lại
    private void applyImmersive(boolean on) {
        if (Build.VERSION.SDK_INT >= 30) {
            WindowInsetsController c = getWindow().getInsetsController();
            if (c == null) return;
            if (on) {
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
                c.hide(WindowInsets.Type.systemBars());
            } else {
                c.show(WindowInsets.Type.systemBars());
            }
            c.setSystemBarsAppearance(WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS, WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS);
        } else {
            View d = getWindow().getDecorView();
            int f = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            if (on) f |= View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
            d.setSystemUiVisibility(f);
        }
    }

    @Override
    public void onConfigurationChanged(Configuration c) {
        super.onConfigurationChanged(c);
        applyImmersive(c.orientation == Configuration.ORIENTATION_LANDSCAPE);
    }

    private boolean isOurs(Uri u) {
        return u != null && "https".equals(u.getScheme()) && host != null && host.equalsIgnoreCase(u.getHost());
    }

    private String startUrl(Intent intent) {
        Uri u = intent != null ? intent.getData() : null;
        return isOurs(u) && u.getPath() != null && u.getPath().startsWith("/m") ? u.toString() : home;
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Uri u = intent.getData();
        if (isOurs(u)) web.loadUrl(u.toString()); // quét mã QR mới khi app đang mở → đăng nhập luôn
    }

    private void openOutside(Uri u) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, u).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
        } catch (ActivityNotFoundException ignored) {
            // không có app mở được link này
        }
    }

    private void showOffline() {
        showingError = true;
        String html = "<!doctype html><html lang=vi><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'>"
                + "<style>body{margin:0;height:100vh;display:grid;place-items:center;background:#f4f6fb;font:16px/1.5 system-ui,Roboto,sans-serif;color:#141824;text-align:center}"
                + "div{padding:24px}b{display:block;font-size:20px;margin:10px 0 4px}p{color:#5b6476;margin:0 0 18px}"
                + "button{background:#2563eb;color:#fff;border:0;border-radius:999px;padding:12px 26px;font-size:16px;font-weight:600}</style>"
                + "<div><div style='font-size:46px'>📡</div><b>Chưa kết nối được</b><p>Kiểm tra Wi-Fi / 4G rồi thử lại nhé.</p>"
                + "<button onclick='VPAndroid.reload()'>Thử lại</button></div></html>";
        web.loadDataWithBaseURL(null, html, "text/html", "utf-8", null);
    }

    @Override
    public void onBackPressed() {
        if (showingError) { finish(); return; }
        // để trang tự đóng bảng / quay về Sảnh trước; trang không xử lý thì lùi trang hoặc đưa app xuống nền
        web.evaluateJavascript("(window.vpmBack && window.vpmBack()) ? 'y' : 'n'", (r) -> {
            if (r != null && r.contains("y")) return;
            if (web.canGoBack()) web.goBack();
            else moveTaskToBack(true);
        });
    }

    @Override
    protected void onActivityResult(int code, int result, Intent data) {
        super.onActivityResult(code, result, data);
        if (code != PICK_FILES || pending == null) return;
        Uri[] out = null;
        if (result == RESULT_OK && data != null) {
            ClipData clip = data.getClipData();
            if (clip != null) {
                out = new Uri[clip.getItemCount()];
                for (int i = 0; i < clip.getItemCount(); i++) out[i] = clip.getItemAt(i).getUri();
            } else if (data.getData() != null) {
                out = new Uri[]{data.getData()};
            }
        }
        pending.onReceiveValue(out);
        pending = null;
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.onPause();
        CookieManager.getInstance().flush();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            root.removeView(web);
            web.destroy();
        }
        super.onDestroy();
    }

    /** Cầu nối cho trang /m (chỉ trang của Gateway mới mở được trong app). */
    private class Bridge {
        @JavascriptInterface
        public void setOrientation(String mode) {
            runOnUiThread(() -> {
                int o;
                if ("landscape".equals(mode)) o = ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE; // bấm 🔄 Xoay ngang
                else if ("sensor".equals(mode)) o = ActivityInfo.SCREEN_ORIENTATION_FULL_USER;      // Sảnh: xoay theo máy (theo cài đặt tự xoay)
                else o = ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT;                              // Chat AI / Tin nhắn: dọc
                if (getRequestedOrientation() != o) setRequestedOrientation(o);
            });
        }

        @JavascriptInterface
        public void copy(String text) {
            ClipboardManager cm = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
            if (cm != null) cm.setPrimaryClip(ClipData.newPlainText("Văn Phòng AI", text));
        }

        @JavascriptInterface
        public String version() {
            return BuildConfig.VERSION_NAME;
        }

        @JavascriptInterface
        public void reload() {
            runOnUiThread(() -> { showingError = false; web.loadUrl(home); });
        }
    }
}
