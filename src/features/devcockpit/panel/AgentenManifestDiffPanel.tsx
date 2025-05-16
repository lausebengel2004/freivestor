// src/features/devcockpit/panel/AgentenManifestInteractiveDiffPanel.tsx
import React, { useEffect, useState } from "react";
import { AgentenEintrag } from "@agenten/dev/agentenManifest";
import { scanActiveAgents } from "@agenten/dev/utils/generateAgentenManifestUI";
import { agentenManifest as existingManifest } from "@agenten/dev/agentenManifest";

type DiffSets = {
  added: AgentenEintrag[];
  removed: AgentenEintrag[];
  changed: { oldEntry: AgentenEintrag; newEntry: AgentenEintrag }[];
};

export const AgentenManifestInteractiveDiffPanel: React.FC = () => {
  const [diff, setDiff] = useState<DiffSets>({ added: [], removed: [], changed: [] });
  const [selAdded, setSelAdded] = useState<Set<string>>(new Set());
  const [selRemoved, setSelRemoved] = useState<Set<string>>(new Set());
  const [selChanged, setSelChanged] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      const scanned = await scanActiveAgents();
      const existing = existingManifest;
      const mapExisting = new Map(existing.map(a => [a.id, a]));
      const mapScanned = new Map(scanned.map(a => [a.id, a]));
  
      const added = scanned.filter(a => !mapExisting.has(a.id));
      const removed = existing.filter(a => !mapScanned.has(a.id));
      const changed: DiffSets["changed"] = [];
      scanned.forEach(newA => {
        const oldA = mapExisting.get(newA.id);
        if (oldA) {
          const diffFlag =
            oldA.sichtbar !== newA.sichtbar ||
            oldA.autostart !== newA.autostart ||
            oldA.rollen.join(",") !== newA.rollen.join(",") ||
            oldA.typ !== newA.typ;
          if (diffFlag) changed.push({ oldEntry: oldA, newEntry: newA });
        }
      });

      setDiff({ added, removed, changed });
      setSelAdded(new Set(added.map(a => a.id)));
      setSelRemoved(new Set());        // standard: nichts entfernen
      setSelChanged(new Set(changed.map(c => c.newEntry.id)));
    })();
  }, []);

  const toggle = (set: Set<string>, id: string, on: boolean, setter: React.Dispatch<Set<string>>) => {
    const copy = new Set(set);
    on ? copy.add(id) : copy.delete(id);
    setter(copy);
  };

  const handleApply = () => {
    // 1. Start mit existierendem Manifest
    let manifest = [...existingManifest];

    // 2. Entfernte Agenten filtern
    manifest = manifest.filter(a => !selRemoved.has(a.id));

    // 3. Geänderte Agenten übernehmen
    manifest = manifest.map(a => {
      if (selChanged.has(a.id)) {
        const diffItem = diff.changed.find(c => c.newEntry.id === a.id);
        return diffItem ? diffItem.newEntry : a;
      }
      return a;
    });

    // 4. Neue Agenten hinzufügen
    const toAdd = diff.added.filter(a => selAdded.has(a.id));
    manifest = [...manifest, ...toAdd];

    // 5. Export-String bauen
    const exportText = `// Auto-generiert am ${new Date().toISOString()}
import { AgentenEintrag } from "@agenten/dev/agentenManifest";

export const agenten: AgentenEintrag[] = ${JSON.stringify(manifest, null, 2)};
`;

    // 6. An Speicherbrücke übergeben
    localStorage.setItem("agenten::manifest::pending", exportText);
    alert("🛠 Ausgewählte Änderungen übernommen und an SpeicherBrücke gesendet.");
  };

  return (
    <div style={{ padding: 16, background: "#fff", border: "1px solid #ccc", borderRadius: 4, marginTop: 16 }}>
      <h4>🔧 Manifest Diff & Apply</h4>

      {/* Neue */}
      {diff.added.length > 0 && (
        <section>
          <strong style={{ color: "green" }}>🆕 Neue Agenten:</strong>
          {diff.added.map(a => (
            <div key={a.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selAdded.has(a.id)}
                  onChange={e => toggle(selAdded, a.id, e.target.checked, setSelAdded)}
                />{" "}
                {a.id} ({a.typ})
              </label>
            </div>
          ))}
        </section>
      )}

      {/* Entfernen */}
      {diff.removed.length > 0 && (
        <section style={{ marginTop: 12 }}>
          <strong style={{ color: "red" }}>🗑️ Entfernte Agenten:</strong>
          {diff.removed.map(a => (
            <div key={a.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selRemoved.has(a.id)}
                  onChange={e => toggle(selRemoved, a.id, e.target.checked, setSelRemoved)}
                />{" "}
                {a.id} ({a.typ})
              </label>
            </div>
          ))}
        </section>
      )}

      {/* Geändert */}
      {diff.changed.length > 0 && (
        <section style={{ marginTop: 12 }}>
          <strong style={{ color: "orange" }}>✏️ Geänderte Agenten:</strong>
          {diff.changed.map(({ oldEntry, newEntry }) => (
            <div key={newEntry.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selChanged.has(newEntry.id)}
                  onChange={e => toggle(selChanged, newEntry.id, e.target.checked, setSelChanged)}
                />{" "}
                {newEntry.id} ({newEntry.typ})
              </label>
            </div>
          ))}
        </section>
      )}

      {/* Apply */}
      <button
        onClick={handleApply}
        style={{
          marginTop: 16,
          padding: "8px 16px",
          background: "#0066cc",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        ✅ Änderungen anwenden
      </button>
    </div>
  );
};

export default AgentenManifestInteractiveDiffPanel;
