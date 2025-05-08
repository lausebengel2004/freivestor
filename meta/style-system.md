# 🎨 FreiVestor Style-System
## Zentrale Struktur für Farben, Typografie, Abstände & Komponenten

---

## 📁 Ablageort: `src/styles/`

### Enthaltene Dateien

| Datei              | Inhalt / Zweck |
|--------------------|----------------|
| `theme.css`        | Globale Farbdefinitionen als `--var()` für den gesamten Aufbau |
| `colors.js`        | JS-Zugriff auf CSS-Variablen via `var(--xyz)` |
| `typography.css`   | Schriftgrößen, Gewichte, Utility-Klassen für Headings & Text |
| `spacing.css`      | Abstände: `--space-*` + `.mt-*`, `.gap-*` usw. |
| `fahrplan.css`     | Schuldenfrei-spezifische Monatskarten und Layouts |
| `global.css`       | Globales Layout (Body, Container, Reset etc.) |
| `sidebar.css`      | Styles für die linke Navigationsleiste |
| `PageLayout.css`   | Gestaltung des App-Hauptlayouts |
| `SplashScreen.css` | SplashScreen-Design mit Logo/Spruch |
| `MilestoneTimeline.css` | Timeline-Darstellung der Meilensteine |
| `monats-card.css`  | Einzelkarte für Monatsanzeige (Layout/Design) |
| `button-toggle.css`| Wiederverwendbare Button-Gruppen (z. B. Tool/Mode-Schalter) |

---

## 🧠 Strukturkonzept

### Farben (theme.css)
```css
:root {
  --primary: #3f51b5;
  --secondary: #ff4081;
  ...
}
```

### Farben (colors.js)
```js
export const colors = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  ...
};
```

### Typografie (typography.css)
- Font-Sizes: `--font-size-sm`, `--font-size-md`, …
- Headings: `.heading-xl`, `.heading-md`, …
- Utilities: `.text-muted`, `.text-center`, `.text-bold`

### Abstände (spacing.css)
- Spacing-Variablen: `--space-xs` bis `--space-xl`
- Utilities: `.mt-md`, `.pt-lg`, `.gap-row-sm` usw.

---

## 🔁 Style-Monitoring

- Zentrale Pflege über: `style-register.json`
- Überwachung durch ChatGPT aktiv:
  - Neue Klassen ohne Stylesheet → Erinnerung
  - Neue Dateien ohne Eintrag im Register → Erinnerung
  - Farb-Sync zwischen `theme.css` & `colors.js` → geprüft

---

## 📍Empfohlene Imports (z. B. in App.jsx)
```js
import "@styles/theme.css";
import "@styles/colors.js";
import "@styles/typography.css";
import "@styles/spacing.css";
import "@styles/global.css";
```

---

_Stand: 07.05.2025 – gepflegt durch StyleMonitor_