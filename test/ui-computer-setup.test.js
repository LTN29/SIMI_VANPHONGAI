// Exercise the source UI with a mocked installer: never installs a real plugin.
const { launch, check, finish, run } = require('./helpers');
run(async () => {
  const { app, win, errors } = await launch({ prefix: 'computer-setup', config: { lobbyEnabled: false, autoUpdate: false } });
  try {
    await app.evaluate(({ ipcMain }) => {
      ipcMain.removeHandler('chat:tools');
      ipcMain.handle('chat:tools', () => ({ plugins: [], mcp: [], computerUse: null, engine: {}, browser: {} }));
      ipcMain.removeHandler('chat:setupComputerUse');
      ipcMain.handle('chat:setupComputerUse', async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return { ok: false, status: 'runtimeMissing', message: 'Đã chạy bước cài plugin, nhưng runtime chưa sẵn sàng.' };
      });
    });
    await win.waitForSelector('.welcome', { timeout: 20000 });
    await win.click('#modalClose');
    await win.click('.viewtabs button[data-v="chat"]');
    await win.click('#chTools');
    const install = win.getByRole('button', { name: 'Cài bổ sung Computer Use', exact: true });
    await install.waitFor();
    check(await install.isVisible(), 'nút cài bổ sung hiện cả khi chưa có plugin');
    await install.click();
    await win.waitForFunction(() => document.querySelector('.tools-pop [role="status"]')?.textContent.includes('runtime chưa sẵn sàng'));
    check(await install.isEnabled(), 'nút được bật lại khi thiếu runtime');
    check(await win.getByRole('button', { name: 'Hướng dẫn cài OpenAI', exact: true }).isVisible(), 'có nút mở hướng dẫn chính thức');
    check(!(await win.locator('.tools-pop [role="status"]').innerText()).includes('hoạt động'), 'không báo thành công khi thiếu runtime');
  } finally { await finish(app, errors); }
});
