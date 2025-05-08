// Zusatz für Spezialfall: Nur ein Gläubiger → durchgehend Rate + Bonus

export function calculateEinzelplan(glaeubiger, fixedBooster, fixedMonatsrate) {
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
      feierText: rest <= 0 ? `🎉 Du hast deine Schulden bei ${glaeubiger.name} komplett bezahlt.` : null,
      abschlussText: rest <= 0 ? `🚀 Du hast alle deine Schulden getilgt. Du bist jetzt schuldenfrei.` : null,
    };

    plan.push(eintrag);
    monat++;

    if (rest <= 0) break;
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
