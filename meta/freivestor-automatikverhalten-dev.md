# 🤖 FreiVestor Automatikverhalten – Entwicklerdokumentation

## 🎯 Ziel
Diese Datei dokumentiert das automatische Verhalten von ChatGPT innerhalb des Projekts FreiVestor, sobald ein neuer Chat gestartet wird oder ein Modul aktiviert wird – z. B. Schuldenfrei-Tool, Einkommensverteiler, Portfolio etc.

---

## 🔁 1. Kontextaufbau (aus `freivestor-modulsetup.json`)

Beim Start eines neuen Chats prüft ChatGPT automatisch:
- Welches Modul aktiv ist (`modul`)
- Welche Phase zugeordnet ist (`phase`)
- Welcher Arbeitskontext gesetzt ist (`kontext`)
- Welches Ziel du angegeben hast (`ziel`)
- Ob die Automatisierung aktiv ist (`automatisierungAktiv`)

**Beispielauswertung:**
```json
{
  "modul": "Schuldenfrei-Tool",
  "phase": "Phase 1",
  "kontext": "Berechnung / Tilgungslogik / MussGuthaben",
  "ziel": "Berechnung validieren, vollständige Monatslogik abschließen",
  "releaseStand": "1.0.3",
  "automatisierungAktiv": true
}
```

---

## 🧠 2. Automatische Rollenwahl (aus `freivestor-rollenkatalog_voll.json`)

Anhand des Kontexts wird automatisch erkannt:
- welche Rolle relevant ist (z. B. `Coder + Finanzstratege`)
- durch welche Schlüsselwörter dies ausgelöst wird

**Beispielauslöser:**  
`Tilgungslogik`, `Priorisierung`, `Schuldenplan` → aktiviert: `Coder + Finanzstratege`

---

## 📂 3. Dateibasierte Kontextprüfung

Es werden automatisch Dateien aus der `projektstruktur.md` berücksichtigt, z. B.:
- existierende Komponenten im Modulpfad (z. B. `TilgungsPlanAnzeige.jsx`)
- bisherige Dokumentationen im `CHANGELOG.md`
- Roadmap-Status aus `freivestor-roadmap-2025.md`

---

## 🔄 4. Reaktionssystem

**Automatische Aktionen bei Veränderung:**
- Vorschlag zur Aktualisierung von `projektstruktur.md`, `roadmap`, `freivestor-status.json`, `CHANGELOG.md`
- Ergänzung oder Erzeugung eines neuen Releases (z. B. 1.0.4)
- Aktualisierung des `freivestor-projektpflege-dashboard_*.md`

---

## 🧷 5. Keine Eingaben notwendig

Thomas muss **nicht**:
- `#rolle:` angeben
- den Modulnamen oder Kontext nennen
- eine Datei manuell referenzieren

Die gesamte Ableitung erfolgt automatisiert aus:
- `freivestor-modulsetup.json`
- Schlüsselbegriffen im Prompt
- Rollenbeschreibung aus dem Rollenkatalog
- aktiven Dateien im Projektstatus

---

## ✅ Ziel für Thomas

Du kannst dich vollständig auf den Inhalt und die Umsetzung konzentrieren.
Ich übernehme:
- den richtigen Denkmodus
- die Dokumentations- und Strukturpflege
- und die Vorschläge zur Projektentwicklung

> 💬 *Sag einfach, woran du arbeitest – ich reagiere automatisch korrekt.*

---

**Letzter Stand:** Release 1.0.3 – 02.05.2025
