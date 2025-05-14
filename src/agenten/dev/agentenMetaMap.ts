export type AgentenMeta = {
  id: string;
  name: string;
  typ: "system" | "cockpit" | "release" | "meta";
  kontext: "node" | "browser" | "beides";
  sichtbar: boolean;
  diagnosefähig?: boolean;
};

export const agentenMetaMap: AgentenMeta[] = [
  {
    id: "agenten-dashboard-agent",
    name: "📋 AgentenDashboardAgent",
    typ: "release",
    kontext: "node",
    sichtbar: false,
  },
  {
    id: "agenten-index-updater",
    name: "🧩 AgentenIndexUpdater",
    typ: "release",
    kontext: "node",
    sichtbar: false,
  },
  {
    id: "struktur-agent",
    name: "🧱 StrukturAgent",
    typ: "meta",
    kontext: "browser",
    sichtbar: true,
  },
  {
    id: "agenten-designer",
    name: "🎨 AgentenDesignerAgent",
    typ: "cockpit",
    kontext: "browser",
    sichtbar: true,
  },
  {
    id: "commit-monitor",
    name: "📝 CommitMonitorAgent",
    typ: "system",
    kontext: "beides",
    sichtbar: true,
    diagnosefähig: true,
  },
  {
    id: "release-tag-agent",
    name: "🏷️ ReleaseTagAgent",
    typ: "release",
    kontext: "node",
    sichtbar: false,
  }
];
