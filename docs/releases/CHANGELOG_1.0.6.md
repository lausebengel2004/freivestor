# CHANGELOG – Release v1.0.6

## 🧠 AgentenCockpit Core – Agentenverwaltung vollständig integriert

### 🎯 Funktionen
- Tab-Navigation für Agentenstatus, Logs, Tools und Details
- AgentenManifest mit `sichtbar`, `startbar`, `diagnosefähig` als zentrale Steuerstruktur
- Tools integriert: Manifest-Generator, AgentenDesigner, ArchivInspector, Diff-Vergleich
- Agentenübersicht generiert sich automatisch aus dem Manifest
- Rollenumschaltung zwischen Entwickler- und Nutzerkontext
- Vollständiges Layout & Zustandsspeicherung per LocalStorage

### 📦 Dateien
- `DevCockpitPanel.tsx`, `DevCockpitWrapper.tsx`, `AgentenUebersichtPanel.tsx`
- `agentenManifest.ts`, `DevCockpitWrapper.css`
- Tools: `AgentenDesignerPanel.tsx`, `WriteAgentStatusPanel.tsx`, `AgentenManifestGeneratorPanel.tsx`

### ✅ Besonderheiten
- Alle Agenten starten ohne Fehlermeldung
- DevCockpit bereit für Erweiterung um Live-Status und Trigger-Funktionen
- Grundlage für `v1.0.7` (visuelle Statusanzeige, Agentensteuerung)

### 📅 Veröffentlicht: 16.05.2025
