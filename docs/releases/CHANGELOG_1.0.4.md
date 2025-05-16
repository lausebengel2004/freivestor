# 🧾 CHANGELOG – FreiVestor Release 1.0.4 (06.05.2025)

## 🚀 Neue Features & Erweiterungen

- 🧩 Optionsmodul vollständig eingebunden:
  - Route `/tools/options` mit Sidebar-Layout
  - ToolLayout.jsx eingeführt
  - Komponentenstruktur modular (OptionsForm, StrategieBuilder etc.)

- 📊 Meilensteinseite implementiert:
  - `MeilensteinePage.jsx` unter `/meilensteine`
  - Meilenstein-Datenquelle `milestones.js` zentral eingebunden
  - UI-Komponenten `MilestoneList.jsx` und `MilestoneTimeline.jsx`
  - Zeitliche Phasen-Darstellung mit CSS-Statusfarben

## 🛠 Strukturelle Optimierungen

- ✅ Projektstruktur aktualisiert (projektstruktur_2025-05-06.md)
- ✅ Vollständige Umstellung auf Alias-Importe (`@components`, `@features`, `@styles` etc.)
- ✅ App.jsx komplett modularisiert
- ✅ SplashScreen-Logik für Einstieg gefixt
- ✅ Sidebar.css und MilestoneTimeline.css neu eingeführt
- ✅ Navigation & Routing vollständig überarbeitet und bereinigt

## ⚙ Automatisierungen erweitert

- Automatische Prüfung der Struktur und Alias-Regeln aktiviert
- Steuerdatei `freivestor-chatsteuerung-komplett.txt` aktualisiert
- Kontextüberwachung bei Datei-Uploads optimiert

## 📂 Release-Metadaten

- Release-Version: `1.0.4`
- Release-Datum: `06.05.2025`
- Basis: Version 1.0.3 (02.05.2025)