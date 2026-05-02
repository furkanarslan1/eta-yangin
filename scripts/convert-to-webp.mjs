import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "../public");

const DIRS = [
  "products/yangin-sondurme-cihazlari",
  "products/yangin-sondurme-sistemleri",
  "products/yangin-dolaplari-ve-hidrantlari",
  "products/yangin-algilama-ihbar-sistemleri",
  "products/itfaiye-malzemeleri",
  "products/arama-kurtarma-malzemeleri",
  "products/yangin-kapisi-ve-merdivenleri",
  "products/acil-aydinlatma-yonlendirme",
  "products/is-guvenligi",
  "services",
  "reference-2",
];

const SKIP_EXTS = new Set([".webp", ".svg", ".gif"]);

let converted = 0;
let skipped = 0;
let savedBytes = 0;

for (const dir of DIRS) {
  const dirPath = join(PUBLIC, dir);
  let files;
  try {
    files = await readdir(dirPath);
  } catch {
    continue;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (SKIP_EXTS.has(ext)) { skipped++; continue; }
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const srcPath = join(dirPath, file);
    const webpName = basename(file, ext) + ".webp";
    const destPath = join(dirPath, webpName);

    try {
      const src = await import("fs").then(m => m.promises.stat(srcPath));
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
      const dest = await import("fs").then(m => m.promises.stat(destPath));
      savedBytes += src.size - dest.size;
      await unlink(srcPath);
      converted++;
      process.stdout.write(`✓ ${dir}/${webpName}\n`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
}

console.log(`\n✅ ${converted} dosya dönüştürüldü, ${skipped} atlandı`);
console.log(`💾 Kazanç: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);