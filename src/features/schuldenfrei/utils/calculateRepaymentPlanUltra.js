// ==============================
// Berechnungsmodul: Rückzahlungsplan mit Bonus & Feierlogik (inkl. Einzelplan)
// Ultra-Version für FreiVestor Schuldenfrei-Tool
// ==============================

import { getFeierText, getAbschlussText } from '@features/schuldenfrei/utils/abschlussTexte';

// Spezialfall: Nur ein Gläubiger
function calculateEinzelplan(glaeubiger, fixedBooster, fixedMonatsrate) {
  const MONATLICHES_MUSS_GUTHABEN = fixedMonatsrate + fixedBooster;
  const plan = [];
  let rest = glaeubiger.schuld;
  let monat = 1;

  while (rest > 0) {
    const zahlung = Math.min(MONATLICHES_MUSS_GUTHABEN, rest);
    rest = +(rest - zahlung).toFixed(2);

    const eintrag = {
      monat,
      zahlungen: [
        {
          name: glaeubiger.name,
          betrag: zahlung,
          bonus: +(zahlung - glaeubiger.rate).toFixed(2),
          letzterMonat: rest <= 0,
        },
      ],
      bonusEmpfaenger: glaeubiger.name,
      feierText: rest <= 0 ? getFeierText(glaeubiger.name, { useEmoji: true }) : null,
      abschlussText: rest <= 0 ? getAbschlussText({ useEmoji: true }) : null,
    };

    plan.push(eintrag);
    monat++;
  }

  return {
    plan,
    original: {
      gläubigerListe: [glaeubiger],
      fixedBooster,
      fixedMonatsrate,
      startgesamtschuld: glaeubiger.schuld,
    },
  };
}

export default function calculateRepaymentPlanUltra(glaeubigerListe, fixedBooster, fixedMonatsrate) {
  if (glaeubigerListe.length === 1) {
    return calculateEinzelplan(glaeubigerListe[0], fixedBooster, fixedMonatsrate);
  }

  const MONATLICHES_MUSS_GUTHABEN = fixedMonatsrate + fixedBooster;
  const STARTGESAMT = glaeubigerListe.reduce((sum, g) => sum + g.schuld, 0);

  let kumulativGetilgt = 0;
  const plan = [];
  const restschulden = glaeubigerListe.map(g => g.schuld);
  const raten = glaeubigerListe.map(g => g.rate);
  const namen = glaeubigerListe.map(g => g.name);

  let kontostand = MONATLICHES_MUSS_GUTHABEN;
  let letzterFeierbetrag = 0;
  let abgeschlossen = false;

  const erledigt = new Set();
  const feierMonate = new Map();

  for (let monat = 1; monat < 120; monat++) {
    if (abgeschlossen) break;

    const eintrag = {
      monat,
      zahlungen: [],
      feierText: null,
      abschlussText: null,
    };

    if (feierMonate.has(monat)) {
      const feierIndex = feierMonate.get(monat);
      const name = namen[feierIndex];
      eintrag.feierText = getFeierText(name, { useEmoji: true });
    }

    kontostand += MONATLICHES_MUSS_GUTHABEN;

    const aktive = glaeubigerListe
      .map((g, i) => ({
        index: i,
        name: g.name,
        prio: restschulden[i] > 0 ? restschulden[i] / g.rate : Infinity,
        rate: g.rate,
        rest: restschulden[i]
      }))
      .filter(g => g.rest > 0)
      .sort((a, b) => a.prio - b.prio);

    const bonusEmpfaengerIndex = aktive.length > 0 ? aktive[0].index : null;

    for (const g of aktive) {
      if (kontostand <= 0) break;

      const istBonusEmpfaenger = g.index === bonusEmpfaengerIndex;

      const maxZahlung = Math.min(
        g.rate + (istBonusEmpfaenger ? fixedBooster : 0),
        kontostand,
        restschulden[g.index]
      );

      const bonus = istBonusEmpfaenger ? Math.max(0, maxZahlung - g.rate) : 0;

      kontostand -= maxZahlung;
      restschulden[g.index] -= maxZahlung;

      const warLetzteZahlung = restschulden[g.index] <= 0 && !erledigt.has(g.index);
      if (warLetzteZahlung) {
        erledigt.add(g.index);
        const ersparnis = (g.rate + (istBonusEmpfaenger ? fixedBooster : 0)) - maxZahlung;
        letzterFeierbetrag = (g.rate + (istBonusEmpfaenger ? fixedBooster : 0)) + ersparnis;
        feierMonate.set(monat + 1, g.index);
      }

      eintrag.zahlungen.push({
        name: g.name,
        betrag: parseFloat(maxZahlung.toFixed(2)),
        bonus: parseFloat(bonus.toFixed(2)),
        letzterMonat: warLetzteZahlung,
      });
    }

    const gesamtRest = restschulden.reduce((s, r) => s + r, 0);
    if (gesamtRest <= 0 && !abgeschlossen) {
      abgeschlossen = true;
      eintrag.istAbschluss = true;
      eintrag.abschlussText = getAbschlussText({ useEmoji: true });
    }

    plan.push(eintrag);
  }

  return {
    plan,
    original: {
      gläubigerListe,
      fixedBooster,
      fixedMonatsrate,
      startgesamtschuld: STARTGESAMT,
    },
  };
}
