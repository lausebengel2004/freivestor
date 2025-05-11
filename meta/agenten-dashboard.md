# 🧠 FreiVestor Agenten-Dashboard

**Release-Stand:** v1.0.6-dev  
**Strukturkonform seit:** 11.05.2025  
**Zentrale Steuerübersicht für alle integrierten Agenten**

---

## ✅ Aktive Agenten

| Agent | Pfad | Aufgabe | Trigger | Status |
|-------|------|---------|---------|--------|
| `SchuldenfreiAgent` | `src/features/schuldenfrei/schuldenfreiUtils/SchuldenfreiAgent.js` | Erkennt fehlerhafte Props in MonatsCard, interpretiert Nutzerideen (z. B. „Feiermonat“) | manuell via DevCockpit | ✅ aktiv |
| `FreiVestorCoreAgent` | `src/globalFeatures/globalUtils/agenten/FreiVestorCoreAgent.js` | Prüft zentrale Dateien (`App.tsx`, `vite.config.ts`) auf Struktur-, Routing- und Aliasfehler | DevCockpit + Snapshotprüfung | ✅ aktiv |
| `agent-logger` | `src/globalFeatures/globalUtils/agenten/agent-logger.js` | Gibt strukturierte Konsolenlogs für Agentenaktionen aus | automatisch bei Agentennutzung | ✅ eingebunden |
| `agent-snapshot.json` | `src/globalFeatures/globalUtils/agenten/agent-snapshot.json` | Merkt sich Projektstand zum Vergleich bei Dateiänderungen | intern verwendet | ✅ eingebunden |

---

## 🛠 DevCockpit-Komponenten

| Komponente | Pfad | Beschreibung |
|------------|------|--------------|
| `DevCockpit.jsx` | `src/globalFeatures/globalComponents/devCockpit/DevCockpit.jsx` | Zentrale UI zur Agentensteuerung |
| `AgentenKonsole.jsx` | `src/globalFeatures/globalComponents/devCockpit/AgentenKonsole.jsx` | Eingabe-UI zur Ideenanalyse |
| `AgentenDiagnose.jsx` | `src/globalFeatures/globalComponents/devCockpit/AgentenDiagnose.jsx` | Überblick über bekannte Fehler, Snapshotstatus, Aliasprüfung |

---

## 🔗 Verknüpfungen zur Projektstruktur

- Alle Agentenpfade entsprechen der `projektstruktur.md`
- Aliase sind in `vite.config.ts` korrekt eingebunden (`@coreAgenten`, `@devCockpit`)
- Automatikverhalten aktiv laut `freivestor-automatikverhalten-dev.md`

---

## 📅 Letzte Prüfung: 11.05.2025 – durch GPT-Agentenstrukturabgleich