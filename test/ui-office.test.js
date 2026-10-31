// Test giao diện văn phòng (chế độ Giả lập): chào mừng, tương tác nhân vật, mèo, trang trí, giao việc, giao diện tối, cửa sổ hẹp.
const { launch, resize, check, finish, run } = require('./helpers');

const clickPlate = async (win, text) => {
  const b = await win.locator('.plate3d').filter({ hasText: text }).boundingBox();
  await win.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
  await win.waitForSelector('.interact', { timeout: 5000 });
};

run(async () => {
  const { app, win, errors, shot } = await launch({ prefix: 'office' });
  await win.waitForSelector('.welcome', { timeout: 20000 });
  check(await win.locator('.wbrands .bl').count() === 3, 'màn hình chào có 3 logo thương hiệu');
  await shot('01-welcome');
  await win.click('.sheet footer .linkbtn');
  await win.evaluate(() => window.__office.applyDaylight && window.__office.applyDaylight(11));
  await win.waitForTimeout(1500); await shot('02-main');
  check(await win.locator('.topbar .brands .bl').count() === 3, 'thanh trên có logo UNIQ, Crénot, SIMI');

  await clickPlate(win, 'Trưởng phòng');
  check(await win.locator('.interact .ichat').count() === 1, 'thẻ tương tác có nút Chat riêng');
  await shot('03-interact');
  await win.click('.interact .igrid button >> nth=3', { force: true }); // Nhảy
  await win.waitForTimeout(1200); await shot('04-dance');
  await clickPlate(win, 'Nghiên cứu');
  await win.click('.interact .igrid button >> nth=2', { force: true }); // Khen
  await clickPlate(win, 'Viết văn bản');
  await win.click('.interact .igrid button >> nth=1', { force: true }); // Cà phê
  await win.waitForTimeout(3000); await shot('05-coffee');

  const cat = await win.evaluate(() => {
    const o = window.__office; const s = o.project(o.cat.headWorld(new (o.tmpV.constructor)())); const r = o.canvas.getBoundingClientRect();
    return { x: r.left + s.x, y: r.top + s.y + 6 };
  });
  await win.mouse.click(cat.x, cat.y);
  await win.waitForTimeout(600); await shot('06-cat');

  await win.click('#btnDecor'); await win.waitForSelector('.decor');
  check(!(await win.locator('.decor').innerText()).toLowerCase().includes('hồng'), 'trang trí không còn màu hồng');
  await win.click('.decor .drow >> nth=2 >> .sw >> nth=1');
  await win.click('.sheet footer .btn.primary');

  await win.click('.achip >> nth=2');
  await win.fill('#cardText', 'Viết lời chào khách hàng mới');
  await win.click('#btnGo');
  await win.waitForSelector('#listDone .card', { timeout: 60000 });
  check(true, 'giao việc chế độ Giả lập chạy xong');
  await shot('07-done');

  await win.click('#btnTheme'); await win.waitForTimeout(800); await shot('08-dark');
  await win.click('#btnTheme');
  await resize(app, [1120, 760]); await win.waitForTimeout(800); await shot('09-narrow');
  await finish(app, errors);
});
