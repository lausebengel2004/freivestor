import { getFeierText, getAbschlussText } from '@features/schuldenfrei/utils/abschlussTexte';
export default function calculateRepaymentPlanUltra(gläubigerListe, fixedMonatsrate) {
    const plan = [];
    const restschulden = gläubigerListe.map(g => g.schuld ?? 0);
    const namen = gläubigerListe.map(g => g.name ?? 'Unbekannt');
    const raten = gläubigerListe.map(g => g.rate ?? 0);
    const zustand = gläubigerListe.map(() => ({
        aktiv: true,
        getilgt: false,
        feierbereit: false,
        gefeiert: false,
    }));
    const fixedBooster = parseFloat((fixedMonatsrate * 0.10).toFixed(2));
    const monatlichesBudget = fixedMonatsrate + fixedBooster;
    let kontostand = 0;
    let abgeschlossen = false;
    let letzteTilgungErreicht = false;
    let letzterFeiermonat = 0;
    let letzterRest = 0;
    const feierMonate = new Map();
    const bonusPauseMonate = new Set();
    for (let monat = 1; monat <= 240; monat++) {
        if (abgeschlossen)
            break;
        kontostand += monatlichesBudget;
        const bonusAktiv = !bonusPauseMonate.has(monat);
        const eintrag = {
            monat,
            typ: 'zahlung',
            zahlungen: [],
            feierText: null,
            feierBetrag: null,
            abschlussText: null,
            letzteZahlung: false,
            überschuss: 0,
            bonusEmpfaenger: null,
            bonusSumme: 0,
        };
        // 💥 Prüfung auf Feiermonat
        const feierIndex = feierMonate.get(monat);
        const istFeiermonat = feierIndex !== undefined;
        if (istFeiermonat) {
            eintrag.typ = 'feier';
            eintrag.feierText = getFeierText(namen[feierIndex], { useEmoji: true });
            const aktuelleRate = raten[feierIndex] ?? 0;
            const feierBonus = fixedBooster;
            const feierBetrag = parseFloat((letzterRest + monatlichesBudget - aktuelleRate - feierBonus).toFixed(2)) + aktuelleRate + feierBonus;
            eintrag.feierBetrag = parseFloat(feierBetrag.toFixed(2));
            zustand[feierIndex].gefeiert = true;
            zustand[feierIndex].feierbereit = false;
            bonusPauseMonate.add(monat);
            bonusPauseMonate.add(monat + 1);
            feierMonate.delete(monat);
        }
        // 💸 Zahlungen (immer durchführen – auch im Feiermonat)
        const aktive = gläubigerListe
            .map((g, i) => ({
            index: i,
            name: g.name,
            rate: raten[i],
            rest: restschulden[i],
            prio: restschulden[i] > 0 ? restschulden[i] / raten[i] : Infinity,
            aktiv: zustand[i].aktiv && !zustand[i].getilgt,
        }))
            .filter(g => g.aktiv)
            .sort((a, b) => a.prio - b.prio);
        const bonusEmpfaengerIndex = bonusAktiv ? aktive[0]?.index ?? null : null;
        for (const g of aktive) {
            if (kontostand <= 0)
                break;
            const istBonusEmpfaenger = g.index === bonusEmpfaengerIndex;
            const maxZahlung = g.rate + (istBonusEmpfaenger ? fixedBooster : 0);
            const zahlung = Math.min(g.rest, maxZahlung, kontostand);
            restschulden[g.index] -= zahlung;
            kontostand -= zahlung;
            eintrag.zahlungen.push({
                name: g.name,
                betrag: parseFloat(zahlung.toFixed(2)),
                bonus: istBonusEmpfaenger
                    ? parseFloat(Math.min(fixedBooster, Math.max(0, zahlung - g.rate)).toFixed(2))
                    : 0,
                letzterMonat: restschulden[g.index] <= 0,
            });
            if (restschulden[g.index] <= 0 && !zustand[g.index].getilgt) {
                zustand[g.index].getilgt = true;
                zustand[g.index].feierbereit = true;
                zustand[g.index].aktiv = false;
                feierMonate.set(monat + 1, g.index);
                letzterFeiermonat = Math.max(letzterFeiermonat, monat + 1);
            }
        }
        // 💰 Rest für Folge-Feiermonat
        letzterRest = kontostand;
        eintrag.überschuss = parseFloat(kontostand.toFixed(2));
        // 💡 Bonusauswertung für Anzeige
        const bonusZahlungen = eintrag.zahlungen.filter(z => z.bonus > 0);
        eintrag.bonusEmpfaenger = bonusZahlungen[0]?.name ?? null;
        eintrag.bonusSumme = parseFloat(bonusZahlungen.reduce((sum, z) => sum + z.bonus, 0).toFixed(2));
        // 🏁 Abschlusslogik
        if (!letzteTilgungErreicht && restschulden.every(r => r <= 0)) {
            letzteTilgungErreicht = true;
        }
        if (letzteTilgungErreicht && monat > letzterFeiermonat) {
            abgeschlossen = true;
            eintrag.typ = 'abschluss';
            eintrag.abschlussText = getAbschlussText({ useEmoji: true });
            eintrag.letzteZahlung = true;
        }
        plan.push(eintrag);
    }
    return {
        version: 'v1.0.5-feiermonat-mit-zahlung',
        date: new Date().toISOString().split('T')[0],
        description: 'Feiermonat enthält zusätzlich normale Zahlungen. Kein Exklusivmonat mehr.',
        booster: fixedBooster,
        plan,
    };
}
