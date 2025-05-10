# 📁 FreiVestor Projektstruktur
**Strukturstand: Release v1.0.5 – Stand: 10.05.2025**

---

## 🌍 Globale Struktur

- src/globalFeatures/globalComponents/
- src/globalFeatures/globalUtils/
- src/globalAssets/

## 💸 Schuldenfrei-Tool

- src/features/schuldenfrei/schuldenfreiComponents/
- src/features/schuldenfrei/schuldenfreiUtils/
- src/features/schuldenfrei/schuldenfreiDaten/
- src/features/schuldenfrei/schuldenfreiVisuals/
- src/features/schuldenfrei/schuldenfreiSteuern/
- src/features/schuldenfrei/schuldenfreiExport/

## 📊 Einkommensverteiler-Tool

- src/features/einkommensverteiler/einkommensComponents/
- src/features/einkommensverteiler/einkommensUtils/
- src/features/einkommensverteiler/einkommensDaten/
- src/features/einkommensverteiler/einkommensVisuals/
- src/features/einkommensverteiler/einkommensVerbindung/
- src/features/einkommensverteiler/einkommensExport/

## 📈 Optionshandel-Modul

- src/features/optionshandel/optionsComponents/
- src/features/optionshandel/optionsUtils/
- src/features/optionshandel/optionsDaten/
- src/features/optionshandel/optionsStrategien/
- src/features/optionshandel/optionsVisuals/
- src/features/optionshandel/optionsSteuern/
- src/features/optionshandel/optionsExport/

## 🧱 Erweiterbare Projektbereiche

- src/theme/
- src/api/
- src/setupConfig/
- src/docs/

---

## 🔗 Alias-Übersicht (vite.config.ts)

| Alias                        | Zielpfad                                                  |
|-----------------------------|------------------------------------------------------------|
| @globalFeaturesComponents   | ./src/globalFeatures/globalComponents                     |
| @globalFeaturesUtils        | ./src/globalFeatures/globalUtils                          |
| @globalAssets               | ./src/globalAssets                                        |
| @schuldenfreiComponents     | ./src/features/schuldenfrei/schuldenfreiComponents        |
| @schuldenfreiUtils          | ./src/features/schuldenfrei/schuldenfreiUtils             |
| @schuldenfreiDaten          | ./src/features/schuldenfrei/schuldenfreiDaten             |
| @schuldenfreiVisuals        | ./src/features/schuldenfrei/schuldenfreiVisuals           |
| @schuldenfreiSteuern        | ./src/features/schuldenfrei/schuldenfreiSteuern           |
| @schuldenfreiExport         | ./src/features/schuldenfrei/schuldenfreiExport            |
| @einkommensComponents       | ./src/features/einkommensverteiler/einkommensComponents   |
| @einkommensUtils            | ./src/features/einkommensverteiler/einkommensUtils        |
| @einkommensDaten            | ./src/features/einkommensverteiler/einkommensDaten        |
| @einkommensVisuals          | ./src/features/einkommensverteiler/einkommensVisuals      |
| @einkommensVerbindung       | ./src/features/einkommensverteiler/einkommensVerbindung   |
| @einkommensExport           | ./src/features/einkommensverteiler/einkommensExport       |
| @optionsComponents          | ./src/features/optionshandel/optionsComponents            |
| @optionsUtils               | ./src/features/optionshandel/optionsUtils                 |
| @optionsDaten               | ./src/features/optionshandel/optionsDaten                 |
| @optionsStrategien          | ./src/features/optionshandel/optionsStrategien            |
| @optionsVisuals             | ./src/features/optionshandel/optionsVisuals               |
| @optionsSteuern             | ./src/features/optionshandel/optionsSteuern               |
| @optionsExport              | ./src/features/optionshandel/optionsExport                |
| @theme                      | ./src/theme                                               |
| @api                        | ./src/api                                                 |
| @setupConfig                | ./src/setupConfig                                         |
| @docs                       | ./src/docs                                                |

---

## 📌 Namenskonventionen

- Alle Aliasse folgen dem Schema `@<bereich><typ>` (z. B. `@optionsUtils`)
- Keine generischen Mehrfachverwendungen wie `@components` ohne Präfix
- Globales ist unter `@globalFeatures*` bzw. `@globalAssets` zusammengefasst
- Jeder Toolbereich hat seine eigene Komponenten- und Utils-Struktur

*Letzter Abgleich: 10.05.2025 – automatisch erzeugt*
