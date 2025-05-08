# 🧠 FreiVestor: Meta-Systemübersicht

## 📁 Verzeichnis: `/meta/`

Dieser Ordner dient als zentraler Kontrollbereich für:
- Style-Monitoring
- Datenpflege
- Struktur-Tracking
- Automatisierte Projekt-Checks
- Chat-Dokumentation & Steuerung

---

## 📦 Übersicht der aktiven Meta-Systeme

| Datei                      | Zweck |
|---------------------------|-------|
| `meta-readme.md`          | Einstiegspunkt für das Meta-System |
| `style-register.json`     | Liste aller CSS-Dateien + Verwendungszweck |
| `style-monitor_setup.md`  | Regeln zur Style-Prüfung + Automatikverhalten |
| `style-system.md`         | Dokumentation zu Farben, Typo, Spacing |
| `data-doku.md`            | Erklärung und Pflegeplan für Test-/Echt-Daten |
| `data-register.json`      | Übersicht aller JSON-Datenquellen |
| `freivestor_chat_log_*.md`| Chat-Verlauf mit technischen Entscheidungen |
| `theme.css`, `colors.js`  | Referenzwerte für Designsystem |

---

## 🧩 Automatisierte Prüfungen

| System           | Beschreibung |
|------------------|--------------|
| **StyleMonitor** | Erkennt neue Klassen oder CSS-Dateien ohne Registereintrag |
| **ThemeSync**    | Vergleicht `theme.css` mit `colors.js` |
| **DataChecker**  | Meldet fehlende oder veraltete Testdaten |
| **ChatLogger**   | Erstellt `freivestor_chat_log_*.md` pro Session |
| **AliasChecker** | Prüft Alias-Importe in `vite.config.js` auf Konsistenz |
| **MetaReminder** | Erinnerungen bei fehlenden Meta-Dokumentationen |

---

## 🔁 Pflegehinweise

- Halte `style-register.json` & `data-register.json` aktuell
- Lege pro Modul mindestens eine `*_doku.md`-Datei an
- Nutze `meta-readme.md` als Einstiegspunkt für neue Entwickler

---

_Stand: 07.05.2025 – gepflegt & überwacht durch FreiVestor Meta-Systeme_