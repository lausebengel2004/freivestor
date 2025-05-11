export function getSteuerDatenByLand(land) {
  switch (land.toLowerCase()) {
    case 'deutschland':
      return import('../steuernDaten/steuerDatenDeutschland.js').then(m => m.steuerDeutschland);
    case 'österreich':
    case 'oesterreich':
      return import('../steuernDaten/steuerDatenOesterreich.js').then(m => m.steuerOesterreich);
    case 'schweiz':
      return import('../steuernDaten/steuerDatenSchweiz.js').then(m => m.steuerSchweiz);
    default:
      throw new Error('Unbekanntes Steuerland: ' + land);
  }
}
