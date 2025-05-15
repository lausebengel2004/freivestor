const meldungen = [];
export function logAgentenMeldung(agent, text) {
    meldungen.push({
        agent,
        zeitpunkt: new Date().toLocaleString(),
        text
    });
}
export function getAgentenMeldungen() {
    return [...meldungen];
}
