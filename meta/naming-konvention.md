# 📦 FreiVestor – Naming-Konvention für Release-ZIPs

Diese Datei beschreibt die Namenskonvention für alle ZIP-Dateien, die du im Rahmen der Projektpflege verwendest.  
Sie hilft, den Status jeder Datei eindeutig zu erkennen und Versionen sauber zu verwalten.

---

## 🧩 Allgemeiner Aufbau

    freivestor_release_<version>_<status>.zip

Beispiel:
    freivestor_release_1.0.5_dev.zip

---

## 🏷️ Verfügbare Status-Kennzeichnungen

| Status  | Bedeutung                                                  | Verwendung                               |
|---------|-------------------------------------------------------------|-------------------------------------------|
| dev     | Entwicklungsstand (du arbeitest aktiv daran)                | Zwischenstand, frühzeitig hochladen       |
| pre     | Pre-Release (funktional, aber noch nicht offiziell)         | Alles fertig, aber noch nicht released    |
| release | (optional) Offizielles Release, wenn alle Dateien final sind| Wird automatisch durch mich erzeugt       |
| alpha   | Sehr frühe Testversion                                      | Optional: Experimente, Prototypen         |
| beta    | Funktional, aber noch mit bekannten Schwächen               | Optional: fortgeschrittener Teststand     |
| rc      | Release Candidate                                           | Optional: letzter Testlauf vor Release    |

---

## 📁 Ablageort

Diese Datei gehört in:

    /src/meta/naming-konvention.md

---

## 💡 Hinweis

Wenn du mir eine ZIP mit einem dieser Kürzel hochlädst, erkenne ich den Stand automatisch  
und weiß, wie ich damit umgehen soll (z. B. Dokumentation erzeugen, Release vorbereiten etc.).