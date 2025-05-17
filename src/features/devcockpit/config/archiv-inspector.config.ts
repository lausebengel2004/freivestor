// Konfigurationsdatei für ArchivInspectorAgent

export const ARCHIV_INSPEKTOR_CONFIG = {
  baseDir: "src", // ✅ ab hier wird intern gescannt

  ordner: [
    "features/",
    "components/",
    "agenten/",
    "context/",
    "hooks/",
    "styles/",
    "utils/",
    "assets/",
    "constants/"
  ],

  ignorieren: [
    "meta/",
    "docs/",
    "test/"
  ],

  dateitypen: [".ts", ".tsx", ".jsx", ".js", ".css", ".md"],

  // Zukünftige Optionen:
  aktiv: true,
  logExportAktivieren: true,
  ampelfarben: true
};
