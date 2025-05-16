# CHANGELOG – Release v1.0.7-dev

## 🛠️ Ziel dieses Entwicklungszyklus
Das DevCockpit erhält eine **aktive Agentenstatus-Anzeige (v2)** mit folgenden Erweiterungen:

### 🎯 Geplante Funktionen
- Live-Anzeige, ob ein Agent aktiv ist (🟢 / 🔴)
- Letzte Ausführung je Agent (Datum, Ergebnis)
- Manuelles Starten via Button (wenn `startbar: true`)
- Trennung nach Agenten-Typ (Meta, System, User)
- Diagnose-Filter und ein-/ausblendbare Gruppen
- CodeRefactor: `AgentenStatusPanel.tsx` → neue Struktur mit Komponenten

---

### 🧩 Vorbereitung aus `v1.0.6`
- `agentenManifest.ts` liefert bereits: `name`, `type`, `sichtbar`, `diagnosefähig`, `startbar`
- CSS für Tab-Navigation und Agentenübersicht ist abgeschlossen
- Basisstruktur `DevCockpitPanel.tsx` modular nutzbar

---

## 📁 Beteiligte Dateien (geplant)
- `AgentenStatusPanel.tsx`
- `AgentenLebensanzeige.tsx` (neu)
- `AgentenAktionButtons.tsx` (neu)
- `DevCockpitWrapper.css` (Update)

---

## 🔁 Verlauf
> Dieser Eintrag wird fortlaufend ergänzt bis zur Fertigstellung von `v1.0.7`

📅 Start: 16.05.2025  
