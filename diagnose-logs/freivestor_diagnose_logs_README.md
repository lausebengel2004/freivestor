# 📁 diagnose-logs/

Dieses Verzeichnis enthält exportierte Diagnose-, Snapshot- und Migrationsberichte aus dem FreiVestor-System.

Jede Datei wird automatisch durch Agenten erstellt und enthält den Zustand des Systems zu einem bestimmten Zeitpunkt.

## 📦 Dateitypen

| Datei                   | Beschreibung |
|------------------------|--------------|
| `system-log.md`        | Laufender Gesamtüberblick aller Snapshots (Markdown-Log) |
| `diagnose_YYYY-MM-DD.md` | Einzelner Diagnosebericht (Status von Agenten, LocalStorage etc.) |
| `snapshot_YYYY-MM-DD.md` | Einzelner Snapshot des Systems (Routen, Keys, Status) |
| `migration_YYYY-MM-DD.md` | Einmaliger Bericht über durchgeführte LocalStorage-Migrationen |

## 📌 Hinweise

- Diese Dateien sind GitHub-kompatibel gerendert.
- Der Export erfolgt über die DevCockpit-Komponenten.
- Snapshots können zur Fehlersuche und Versionsdokumentation verwendet werden.

👉 Bei Änderungen bitte diese Dateien versionieren und mit Commit-Kommentaren wie `docs: snapshot hinzugefügt` versehen.
