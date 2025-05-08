# FreiVestor – Modulstruktur (Planung & Aufbau)

Dieses Dokument dient der gezielten Vorbereitung und Dokumentation neuer FreiVestor-Module. Jedes Modul wird vor der Implementierung logisch gegliedert, um eine klare, wartbare Architektur zu sichern.

---

## 1. 🧮 einkommensverteiler/

### Zweck:
Ermöglicht die prozentuale Verteilung von Einkommen auf Budgettöpfe (z. B. Fixkosten, Rücklagen, Investitionen). Optional: Verknüpfung mit SchuldenfreiTool und PortfolioTool.

### Geplante Komponenten:
- `EinkommensForm.jsx`: Eingabe von Einkommen & Verteilregeln
- `VerteilungsLogik.js`: Berechnung der Anteile
- `VerteilungsPlan.jsx`: Visualisierung (z. B. Balken, Torten, Listen)
- `EinkommensverteilungPage.jsx`: Einstiegspunkt mit Routing

### Besonderheiten:
- Lokale Speicherung mit Option für Export
- Optionale Monatslogik mit Datumsauswahl
- Spätere Erweiterung: Empfehlungen basierend auf Zielprofil

---

## 2. 🧠 optionshandel/

### Zweck:
Strukturierte Erfassung, Analyse und Visualisierung von Optionsstrategien. Ideal für Einsteiger & Fortgeschrittene.

### Geplante Komponenten:
- `OptionsForm.jsx`: Eingabe Maske für Calls, Puts, Spreads etc.
- `StrategieBuilder.jsx`: Auswahl und Bau komplexer Strategien
- `OptionsChart.jsx`: Gewinn-/Verlust-Visualisierung
- `OptionsAnalysePanel.jsx`: Greeks, Risiko, Kennzahlen
- `OptionsPage.jsx`: Einstiegspunkt mit Routing

### Besonderheiten:
- Basisdaten wie Underlying, Strike, Verfall, Prämie
- Automatische Kennzahlen-Berechnung
- Steuerrelevante Felder (z. B. Prämienertrag)
- Später: Kursdatenanbindung und PDF-Export

---

## 3. ❓ hilfe/

### Zweck:
Zentrale Hilfe- und Supportstruktur für Nutzerfragen, Tool-Erklärungen, Glossar & Kontaktoptionen.

### Geplante Komponenten:
- `Hilfethemen.jsx`: Thematische Gliederung (FAQ, Tool-Erklärung)
- `Glossar.jsx`: Finanzbegriffe verständlich erklärt
- `SupportKontakt.jsx`: Formular & Mail-Link
- `HilfePage.jsx`: Einstiegspunkt mit Routing

### Besonderheiten:
- Onboarding-Erklärungen je Modul
- Kontextabhängige Hilfe (z. B. Tooltip-Verknüpfung)
- Erweiterbar durch dynamisches FAQ-System

---

## 4. 📤 export/

### Zweck:
Zentrale Export-Schnittstelle für PDF-Berichte, CSV-Daten und andere Ausgabedateien – modulübergreifend nutzbar.

### Geplante Komponenten:
- `ExportZentrale.jsx`: Dashboard mit Exportoptionen
- `PDFExportEngine.js`: Generierung von mehrseitigen PDFs
- `CSVExportHelper.js`: Formatierung für Excel & Tabellen
- `ExportPage.jsx`: Einstiegspunkt mit Routing

### Besonderheiten:
- Branding, Footer & Personalisierung (z. B. Name, Zeitraum)
- Modulverknüpfung (z. B. Schuldenfrei, Optionshandel)
- Später: Export-Vorlagen & Automatisierung (z. B. Monatsbericht)

---

## Strukturprinzipien

- Jeder Modulordner liegt unter `src/features/`
- Einstiegspunkt: `*Page.jsx` mit Routing
- Komponenten liegen unter `components/` innerhalb des Moduls
- Logik in `utils/` oder direkt im Modulordner
- CSS zentral oder modulbasiert unter `styles/`
- Alias-Importstruktur (`@features/...`, `@utils/...`) verbindlich
