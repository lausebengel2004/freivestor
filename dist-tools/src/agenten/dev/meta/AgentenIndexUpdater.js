import fg from "fast-glob";
import path from "path";
import { pathToFileURL } from "url"; // ✅ wichtig für `import(...)`
export const AgentenIndexUpdater = {
    id: "agenten-index-updater",
    name: "🧩 AgentenIndexUpdater",
    autostart: false,
    visibleInCockpit: false,
    run: async () => {
        const agentFiles = await fg("src/agenten/dev/**/*.ts", { absolute: true });
        const agents = [];
        for (const file of agentFiles) {
            const module = await import(pathToFileURL(file).href); // ✅ sauber für Windows & tsx
            for (const key in module) {
                const agent = module[key];
                if (typeof agent === "object" &&
                    agent?.id?.includes("agent") &&
                    typeof agent.run === "function") {
                    const relPath = path.relative("src", file).replace(/\\/g, "/").replace(/\.ts$/, "");
                    agents.push({
                        name: key,
                        importPath: `@/${relPath}`,
                    });
                }
            }
        }
        const importLines = agents
            .map(a => `import { ${a.name} } from "${a.importPath}";`)
            .join("\n");
        const manifestContent = `// 🔁 Generiert durch AgentenIndexUpdater – Stand: ${new Date().toISOString().split("T")[0]}\n\n` +
            importLines +
            `\n\nexport const agentenManifest = [\n  ${agents.map(a => a.name).join(",\n  ")}\n];\n`;
        return {
            status: `✅ ${agents.length} Agenten gefunden`,
            datei: manifestContent,
        };
    },
    export: async () => {
        const result = await AgentenIndexUpdater.run();
        const blob = new Blob([result.datei], { type: "text/javascript" });
        return URL.createObjectURL(blob);
    }
};
