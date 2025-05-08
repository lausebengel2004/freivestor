# ✅ FreiVestor Schuldenfrei-Tool – PDF-Export Dokumentation (Release 1.0.5)

## 📦 Modul: `features/schuldenfrei/export/`

### Enthaltene Dateien

| Datei                      | Zweck                                                             |
|---------------------------|--------------------------------------------------------------------|
| `exportToPdf.js`          | Hauptfunktion zur PDF-Erzeugung mit jsPDF, Monatsplan + Footer    |
| `freivestorIcon.js`       | FV-Icon als Base64 für PDF-Footer                                 |
| `freivestorLogoBase64.js` | Großes Logo als Base64 für Deckblatt                              |
| `pdfExportUtils.js`       | Hilfsfunktionen: Datum, Seitenzahlen, Zentrierung                 |

---

## 📄 Unterstützte Funktionen

- ✅ Deckblatt mit zentriertem Logo, Titel, Nutzername, Datum
- ✅ Monatsplan mit automatischem Seitenumbruch
- ✅ Footer mit kleinem FV-Icon + Leitsatz
- ✅ Automatische Seitenzahlen: „Seite X von Y“
- ✅ Modularer Aufbau, zukunftssicher für Steuer- und Optionsmodule

---

## 🔧 Integration

### Im Hauptexport:
```js
import { FREIVESTOR_ICON_BASE64 } from './freivestorIcon';
import { FREIVESTOR_LOGO_BASE64 } from './freivestorLogoBase64';
import { addSeitenzahlenUeberAlleSeiten } from './pdfExportUtils';

...

addFooter(doc);
addSeitenzahlenUeberAlleSeiten(doc);
doc.save("Schuldenfrei-Fahrplan.pdf");
```

---

## 📍 Status: **Abgeschlossen für Release 1.0.5**

Weitere Ausbaustufen (z. B. dynamische Benutzerdaten, PDF-Branding mit Vektor-Tools) sind vorgemerkt.

© FreiVestor 2025
