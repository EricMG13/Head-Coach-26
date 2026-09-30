// Renders every screen in screens/ to design/<name>.png.
// Screens are 852 x 393 points (iPhone 15 Pro class, landscape) at 3x: 2556 x 1179 pixels.
// A screen may declare <meta name="canvas" content="W H SCALE"> for a different canvas, and
// <meta name="full" content="1"> to also render its whole scroll content as <name>-full.png.
import { chromium } from "playwright";
import { readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join, basename } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const screensDir = join(here, "screens");
const outDir = join(here, "..");
const only = process.argv.slice(2);

const browser = await chromium.launch();
for (const file of readdirSync(screensDir).filter((f) => f.endsWith(".html")).sort()) {
  const name = basename(file, ".html");
  if (only.length && !only.some((o) => name.startsWith(o))) continue;
  const url = pathToFileURL(join(screensDir, file)).href;
  const probe = await browser.newPage();
  await probe.goto(url);
  const meta = await probe.evaluate(() => ({
    canvas: document.querySelector('meta[name="canvas"]')?.content,
    full: document.querySelector('meta[name="full"]')?.content === "1",
  }));
  await probe.close();
  const [w, h, scale] = meta.canvas ? meta.canvas.split(" ").map(Number) : [852, 393, 3];

  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(url);
  if (errors.length) { console.error(`FAILED ${name}: ${errors.join("; ")}`); process.exitCode = 1; await page.close(); continue; }
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(outDir, `${name}.png`), omitBackground: true });
  console.log(`rendered ${name}.png (${w * scale} x ${h * scale})`);
  await page.close();

  if (meta.full) {
    const full = await browser.newPage({ viewport: { width: 900, height: 1200 }, deviceScaleFactor: 2 });
    await full.goto(url + "?full=1");
    await full.evaluate(() => document.fonts.ready);
    const el = await full.$("#full");
    await el.screenshot({ path: join(outDir, `${name}-full.png`) });
    console.log(`rendered ${name}-full.png`);
    await full.close();
  }
}
await browser.close();
