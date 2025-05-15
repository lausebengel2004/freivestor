// tools/archiv-inspector/runArchivScan.ts
import * as fs from "fs";
import * as path from "path";
import { scanFileStatus } from "./utils/scanFileStatus";

const BASE_DIR = path.resolve(__dirname, "../../src");
const ALLOWED_EXT = [".ts", ".tsx", ".js", ".jsx", ".css", ".md"];

const scan = (dir: string, results: string[][] = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scan(fullPath, results);
    } else if (ALLOWED_EXT.includes(path.extname(entry.name))) {
      const { size } = fs.statSync(fullPath);
      const content = fs.readFileSync(fullPath, "utf-8");
      const { status, empfehlung } = scanFileStatus(content);

      results.push([
        fullPath.replace(BASE_DIR + "/", "src/"),
        path.extname(entry.name).slice(1),
        `${(size / 1024).toFixed(1)} KB`,
        status,
        empfehlung,
      ]);
    }
  }

  return results;
};

const rows = scan(BASE_DIR);

const markdown = [
  `# 🧹 ArchivScan – Ergebnis (Node)\n`,
  `| Datei | Typ | Größe | Status | Empfehlung |`,
  `|-------|-----|--------|--------|-------------|`,
  ...rows.map((r) => `| ${r.join(" | ")} |`)
].join("\n");

// 🔽 Zielverzeichnis
const outputDir = path.resolve(__dirname, "../../src/meta/archivberichte");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 📅 Dynamischer Dateiname
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
const filename = `archivscan_${today}.md`;

const outputPath = path.join(outputDir, filename);
fs.writeFileSync(outputPath, markdown);

console.log(`✅ Scan abgeschlossen: ${outputPath}`);
