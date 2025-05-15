// tools/archiv-inspector/runArchivScan.ts
import * as fs from "fs";
import * as path from "path";
import { scanFileStatus } from "./utils/scanFileStatus";
const BASE_DIR = path.resolve(__dirname, "../../../src");
const ALLOWED_EXT = [".ts", ".tsx", ".js", ".jsx", ".css", ".md"];
const scan = (dir, results = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            scan(fullPath, results);
        }
        else if (ALLOWED_EXT.includes(path.extname(entry.name))) {
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
fs.writeFileSync("archivscan_ergebnis.md", markdown);
console.log("✅ Scan abgeschlossen: archivscan_ergebnis.md");
