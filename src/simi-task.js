// Windows: tác vụ "SIMI Auto Update" (bộ cài SIMI đặt, 6 tiếng / lần) cũ chạy thẳng node.exe → Windows bật cửa sổ đen
// vài giây, người dùng tưởng có gì lạ. App đổi tác vụ sang chạy ẩn (wscript.exe không có cửa sổ; máy không còn VBScript
// thì conhost --headless). Script này giống hệt HIDDEN_TASK_PS1 trong scripts/auto-update.mjs của Gateway – sửa thì sửa cả hai.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const PS1 = "$ErrorActionPreference = 'Stop'\n$name = 'SIMI Auto Update'\n$t = Get-ScheduledTask -TaskName $name -ErrorAction SilentlyContinue\nif (-not $t) { 'none'; exit 0 }\n$a = @($t.Actions)[0]\nif ($a.Execute -match '(?i)(wscript|conhost)(\\.exe)?\"?$') { 'hidden'; exit 0 }\n$cmd = '\"' + $a.Execute.Trim('\"') + '\" ' + [string]$a.Arguments\n$codexHome = if ([string]$a.Arguments -match '--codex-home\\s+\"([^\"]+)\"') { $Matches[1] } else { Join-Path $env:USERPROFILE '.codex' }\nif (Test-Path -LiteralPath (Join-Path $env:WINDIR 'System32\\vbscript.dll')) {\n  $vbs = Join-Path $codexHome 'auto-update-hidden.vbs'\n  $body = \"' SIMI Auto Update - chay an, khong bat cua so\" + \"`r`n\" + 'CreateObject(\"WScript.Shell\").Run \"' + $cmd.Replace('\"', '\"\"') + '\", 0, True' + \"`r`n\"\n  [IO.File]::WriteAllText($vbs, $body, [Text.Encoding]::Unicode)\n  $new = New-ScheduledTaskAction -Execute (Join-Path $env:WINDIR 'System32\\wscript.exe') -Argument ('//B //Nologo \"' + $vbs + '\"')\n} else {\n  $new = New-ScheduledTaskAction -Execute (Join-Path $env:WINDIR 'System32\\conhost.exe') -Argument ('--headless ' + $cmd)\n}\nSet-ScheduledTask -TaskName $name -Action $new | Out-Null\n'migrated'\n";

// → 'hidden' (đã ẩn sẵn) | 'migrated' (vừa đổi) | 'none' (máy không có tác vụ) | lỗi
function hideSimiTask() {
  if (process.platform !== 'win32') return Promise.resolve('skip');
  const file = path.join(os.tmpdir(), `vpai-hide-task-${process.pid}.ps1`);
  fs.writeFileSync(file, '\uFEFF' + PS1, 'utf8');
  return new Promise((resolve) => {
    let out = '';
    const c = spawn('powershell.exe', ['-NoLogo', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', file], { windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
    const timer = setTimeout(() => { try { c.kill(); } catch { /* đã thoát */ } }, 60000);
    c.stdout.on('data', (d) => { out += d; });
    const done = (r) => { clearTimeout(timer); try { fs.unlinkSync(file); } catch { /* đã xoá */ } resolve(r); };
    c.on('error', (e) => done('error: ' + e.message));
    c.on('close', (code) => done(out.trim().split(/\r?\n/).pop() || `exit ${code}`));
  });
}

module.exports = { hideSimiTask, PS1 };
