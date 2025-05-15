// Konfigurationsdatei für ArchivInspectorAgent

export const ARCHIV_INSPEKTOR_CONFIG = {
  ordner: [
    "src/features/",
    "src/components/",
    "src/agenten/",
    "src/context/",
    "src/hooks/",
    "src/styles/",
    "src/utils/",
    "src/assets/",
    "src/constants/"
  ],
  ignorieren: [
    "src/meta/",
    "src/docs/",
    "src/test/",
  ],
  dateitypen: [".ts", ".tsx", ".jsx", ".js", ".css", ".md"],

  // Zukünftige Optionen:
  aktiv: true,
  logExportAktivieren: true,
  ampelfarben: true,
};
