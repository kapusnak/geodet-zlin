import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "..", "public", "images");

const sources = ["leica-hero", "leica-road", "leica-tripod"];
const widths = [960, 1920];

for (const name of sources) {
  const input = path.join(imagesDir, `${name}.jpg`);
  for (const width of widths) {
    const suffix = width === 1920 ? "" : `-${width}`;
    const output = path.join(imagesDir, `${name}${suffix}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output);
    console.log(`Wrote ${path.basename(output)}`);
  }
}
