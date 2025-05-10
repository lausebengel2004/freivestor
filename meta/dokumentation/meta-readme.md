# 🧠 FreiVestor: Meta-Ordner Übersicht

Der `/meta/`-Ordner dient als zentrales Kontrollzentrum für strukturierte Projektpflege, technische Überwachung, Designsysteme und automatische Erinnerungsfunktionen.

---

## 📁 Empfohlene Dateien im `/meta/` Verzeichnis

| Datei                            | Zweck / Inhalt |
|----------------------------------|----------------|
| `style-register.json`            | Dokumentation aller Stylesheets in `src/styles/` inkl. Zweck |
| `style-monitor_setup.md`         | Regeln & Trigger für automatische Style-Erinnerungen |
| `style-system.md`                | Dokumentation des gesamten CSS-/Color-/Typo-/Spacing-Systems |
| `freivestor_chat_log_*.md`       | Automatisierte Chat-Protokolle mit Änderungslogik |
| `meta-readme.md`                 | Diese Datei – Übersicht über Meta-Struktur und Regeln |
| `colors.js` / `theme.css`        | Referenz-Definitionen für Farb- & Designsystem (auch als Duplikat hier möglich) |
| `data-doku.md` *(optional)*      | Dokumentation über die Testdaten, Dummy-Strukturen, Imports |
| `feature-tracker.json` *(optional)* | Erfasst aktiv genutzte vs. ungenutzte Komponenten je Tool |

---

## 🧩 Automatisierte Systeme, die diesen Ordner nutzen

- 🔁 **StyleMonitor**: Erkennt fehlende Style-Einträge
- 🎨 **ThemeSync**: Prüft, ob `theme.css` mit `colors.js` übereinstimmt
- 📚 **Dokumonitor**: Erinnerungen bei nicht gepflegten README/Meta-Files
- 🧾 **ChatLogger**: Legt automatisierte Protokolle je Session an (`freivestor_chat_log_*.md`)
- 📊 **DatenstatusCheck** *(optional)*: Zentrale Prüfung, ob alle Testdaten von Dummy auf dynamisch umgestellt wurden

---

## 🔧 Pflegehinweise

- Neue Stylesheets ➤ direkt in `style-register.json` ergänzen
- Neue Meta-Komponenten ➤ mit kurzer Doku hier aufnehmen
- Chatverläufe mit Ergebnischarakter ➤ als `freivestor_chat_log_*.md` speichern

---

_Stand: 07.05.2025 – gepflegt durch Automatiksysteme in FreiVestor_