# 🧠 StyleMonitor – Automatische Stil-Erinnerung für FreiVestor

## 📌 Zweck
Der StyleMonitor dient der strukturierten Verwaltung und Überwachung aller Stylesheets in `src/styles/`.

---

## 📁 Basisdatei: `style-register.json`

Diese Datei enthält alle aktiven Stylesheets mit Kurzbeschreibung und soll gepflegt werden bei:

- neuen CSS-Dateien
- Änderung von Zuständigkeiten (z. B. von `global` zu `komponentenbasiert`)
- Umstrukturierungen oder Refactorings

---

## 🔁 Automatische Erinnerungen durch ChatGPT

Wenn eine der folgenden Bedingungen zutrifft, erfolgt ein Hinweis:

| Auslöser                                                                 | Erinnerung                                    |
|--------------------------------------------------------------------------|-----------------------------------------------|
| Neue CSS-Datei hochgeladen                                              | „Noch nicht im Style-Register dokumentiert?“ |
| Neue Klasse im JSX-Code ohne zugehörige CSS-Datei                       | „Möchtest du dafür ein Stylesheet anlegen?“  |
| Bestehendes Stylesheet wird umbenannt oder gelöscht                     | „Soll der Eintrag in `style-register.json` angepasst werden?“ |
| Neue Komponente mit `.css`-Import, aber Datei existiert nicht          | „CSS-Datei fehlt – soll sie erstellt werden?“|

---

## 🎨 `theme.css` + `colors.js` Synchronprüfung

Alle in `theme.css` definierten CSS-Variablen (`--xyz`) sollen 1:1 gespiegelt sein in `@constants/colors.js`.

> Wenn Abweichungen erkannt werden (z. B. `--text-muted` in theme.css, aber kein `colors.textMuted`), erfolgt ein Hinweis:

```
⚠️ Farbvariable `--text-muted` ist nicht in colors.js gespiegelt. Möchtest du sie synchronisieren?
```

---

## 📍 Ablageort (empfohlen)
Lege die Datei hier ab:
```
/meta/style-monitor_setup.md
```

So kann ich sie jederzeit referenzieren und automatisch aktiv halten.

---

_Stand: 07.05.2025 – aktiviert für FreiVestor Projektstruktur_