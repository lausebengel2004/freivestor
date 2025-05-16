// src/agenten/dev/agentenManifest.ts

export const agentenManifest = [
  {
    id: "struktur",
    name: "StrukturAgent",
    typ: "meta",
    sichtbar: true,
    autostart: true,
    diagnosefähig: true,
    rollen: ["developer"]
  },
  {
    id: "diagnose",
    name: "DiagnoseAgent",
    typ: "meta",
    sichtbar: true,
    autostart: true,
    diagnosefähig: true,
    rollen: ["developer"]
  },
  {
    id: "commit",
    name: "CommitMonitorAgent",
    typ: "system",
    sichtbar: true,
    autostart: true,
    diagnosefähig: true,
    rollen: ["developer"]
  },
  {
    id: "snapshot",
    name: "SnapshotAgent",
    typ: "meta",
    sichtbar: true,
    autostart: true,
    diagnosefähig: false,
    rollen: ["developer"]
  },
  {
    id: "feedback",
    name: "FeedbackAgent",
    typ: "tool",
    sichtbar: true,
    autostart: false,
    diagnosefähig: false,
    rollen: ["user"]
  },
  {
    id: "plan",
    name: "PlanAssistent",
    typ: "tool",
    sichtbar: true,
    autostart: false,
    diagnosefähig: false,
    rollen: ["user"]
  },
  {
    id: "inspector",
    name: "ArchivInspectorAgent",
    typ: "meta",
    sichtbar: true,
    autostart: false,
    diagnosefähig: true,
    rollen: ["developer"]
  }
];
