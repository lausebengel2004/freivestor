# 📁 Projektstruktur FreiVestor (Stand: 2025-05-06)

## Hauptverzeichnis: `src/`

### 📂 assets/
> Bilder, Icons, Logos

---

### 📂 components/
**Globale UI- und Layout-Komponenten**

- `ui/`
  - `MonatsCard.jsx`
  - `SplashScreen.jsx`
  - `MilestoneList.jsx`
  - `MilestoneTimeline.jsx`

- `layout/`
  - `PageLayout.jsx`
  - `ToolLayout.jsx`

---

### 📂 constants/
> Zentrale Konstanten und Datenquellen

- `milestones.js`

---

### 📂 context/
> Kontextanbieter (z. B. Darkmode, Auth etc.)

---
> Alle modularen Tools & Funktionsbereiche
### 📂 features/


- `schuldenfrei/`
  - `SchuldenForm.jsx`
  - `SchuldenfreiTool.jsx`
  - `TilgungsPlanAnzeige.jsx`
  - `calculateRepaymentPlanUltra.js`

- `portfolio/`
  - `PortfolioTool.jsx`

- `einkommensverteiler/`
  - (optional) `EinkommenTool.jsx`

- `optionshandel/`
  - `OptionsPage.jsx`
  - `components/`
    - `OptionsForm.jsx`
    - `StrategieBuilder.jsx`
    - `OptionsChart.jsx`
    - `OptionsAnalysePanel.jsx`

- `meilensteine/`
  - `MeilensteinePage.jsx`

---

### 📂 styles/
> Globale und modulare CSS-Dateien

- `global.css`
- `theme.css`
- `sidebar.css`
- `MilestoneTimeline.css`

---

### 📂 utils/
> Hilfsfunktionen und Werkzeuge

---

### Wurzeldateien

- `main.jsx`
- `App.jsx`