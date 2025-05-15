# 🗂️ Archivierte Komponenten – DevCockpit
> Stand: 2025-05-15  
> Zweck: Dokumentation von Komponenten, die nicht mehr aktiv verwendet werden, aber ursprünglich zur Systemplanung oder Prototypen gehörten.

---

## 🔒 Archivierte Dateien

| Datei                        | Beschreibung / Zweck                                   | Anmerkung                                  |
|-----------------------------|--------------------------------------------------------|---------------------------------------------|
| `MigrationButton.tsx`       | Ursprünglich gedacht zum Start einer Datenmigration    | Nur Kommentar, nie implementiert            |
| `MigrationDownloadButton.tsx` | Platzhalter für Migrationsdaten-Export                 | Nie eingebunden                             |
| `SystemLogDownloadButton.tsx` | `.md`-Export des SystemLogs (manuell)                  | Funktion wird heute durch Agenten abgedeckt |

---

## 📌 Hinweise

- Alle Komponenten in diesem Ordner sind aktuell **nicht im Live-UI integriert**.
- Sie können jederzeit **reaktiviert, angepasst oder endgültig entfernt** werden.
- Ursprung war die **erste Phase des DevCockpit-Aufbaus**, in der Funktionen manuell getestet und geplant wurden.

---

## 🧠 Strukturregel

> Nur aktive, sichtbare oder eingebundene UI/Logik-Komponenten gehören in `panel/` oder `ui/`.  
> Alles andere bitte hier ablegen, um FreiVestor klar und wartbar zu halten.
