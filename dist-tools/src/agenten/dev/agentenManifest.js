// src/agenten/dev/agentenManifest.ts
export const agentenManifest = [
    {
        name: "StrukturAgent",
        typ: "meta", // nur für Entwickler sichtbar
        sichtbar: true,
        autostart: true,
        diagnosefähig: true,
    },
    {
        name: "DiagnoseAgent",
        typ: "meta",
        sichtbar: true,
        autostart: true,
        diagnosefähig: true,
    },
    {
        name: "CommitMonitorAgent",
        typ: "system", // ebenfalls nur für Entwickler
        sichtbar: false,
        autostart: true,
        diagnosefähig: true,
    },
    {
        name: "SnapshotAgent",
        typ: "meta",
        sichtbar: true,
        autostart: false,
        diagnosefähig: false,
    },
    {
        name: "FeedbackAgent",
        typ: "user", // wird in Nutzersicht angezeigt
        sichtbar: true,
        autostart: false,
        diagnosefähig: false,
    },
    {
        name: "PlanAssistent",
        typ: "user",
        sichtbar: true,
        autostart: false,
        diagnosefähig: false,
    },
    {
        name: "ArchivInspectorAgent",
        typ: "meta",
        sichtbar: true,
        autostart: false,
        diagnosefähig: true,
    },
];
