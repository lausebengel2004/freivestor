// scripts/checkNodeImportsInReact.ts
import fs from "fs";
import path from "path";
import fg from "fast-glob";

const verboteneModule = [
  "fs",
  "path",
  "os",
  "child_process",
  "@agenten/dev/system/SpeicherAgent",
];

const reactPfad = path.resolve("src/features");

async function findeVerboteneImports() {
  const files = await fg(["**/*.tsx", "**/*.ts"], {
    cwd: reactPfad,
    absolute: true,
  });

  const fehlerhafteDateien: { file: string; zeile: string }[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      verboteneModule.forEach((mod) => {
        if (line.includes(`import`) && line.includes(mod)) {
          fehlerhafteDateien.push({
            file,
            zeile: `Zeile ${index + 1}: ${line.trim()}`,
          });
        }
      });
    });
  }

  if (fehlerhafteDateien.length === 0) {
    console.log("✅ Keine problematischen Node-Imports im React-Code gefunden.");
  } else {
    console.warn("❌ Verbotene Imports im React-Bereich gefunden:\n");
    fehlerhafteDateien.forEach(({ file, zeile }) => {
      console.log(`📄 ${file}`);
      console.log(`   → ${zeile}\n`);
    });
  }
}

findeVerboteneImports();
