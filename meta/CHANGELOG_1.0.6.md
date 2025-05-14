# 📄 CHANGELOG – Release v1.0.6-dev

📅 Start: 10.05.2025  
🔧 Status: In Entwicklung  
🏷 GitHub-Tag: `v1.0.6-dev`  
☑️ Pre-Release: **Ja**

---

## 🚀 Geplante Inhalte für v1.0.6-dev

### 💸 Schuldenfrei-Tool
- [ ] Finale Integration der MussGuthaben-Boosterlogik
- [ ] Bereinigte Monatslogik für Feierbeträge
- [ ] Konsistente Darstellung mit Restwertverarbeitung
- [ ] Übergabe an Einkommensverteilung vorbereiten

### 📊 Einkommensverteilung (Startphase)
- [ ] Erste Strukturkomponenten anlegen (`einkommensComponents`, `einkommensUtils`)
- [ ] Datenerfassung und Monatslogik entwerfen

### 🧾 Steuern-Modul
- Steuerdaten für Deutschland, Österreich, Schweiz hinzugefügt
- Neue Ordnerstruktur: steuernDaten/, steuernUtils/, steuernComponents/
- Interaktive UI-Komponenten: SteuerLandSelect.jsx, SteuerLandInfoBox.jsx
- Alias-Einträge in vite.config.ts vorbereitet

### 📈 Optionsmodul (Vorbereitung)
- [ ] Grundstruktur & Aliasse aktivieren
- [ ] Strategien vorbereiten (Covered Call, Iron Condor)
- [ ] Basisdatenmodell definieren

---

## 🧱 Technische & strukturelle Änderungen
- [ ] Weitere Konsolidierung der globalFeatures-Komponenten
- [ ] Style-System vorbereiten (`style-system.md`, Farbvarianten)
- [ ] Archivierung alter Testdaten & Strukturfragmente

### 🔁 Verfeinerung (Build r1)
- Letzte Reste des routerDefinition-Problems beseitigt
- SnapshotAgent vollständig entkoppelt von Routing
- Logging geprüft & vollständig aktiviert
- DevCockpit startet Agenten vollständig ohne Fehlermeldung


---

## 📌 Hinweise
- Dieses Release ist als **Pre-Release** markiert.
- Es dient zur aktiven Weiterentwicklung auf Basis des Meta-Standes v1.0.5.
