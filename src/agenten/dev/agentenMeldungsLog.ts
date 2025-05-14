type Meldung = {
  agent: string;
  zeitpunkt: string;
  text: string;
};

const meldungen: Meldung[] = [];

export function logAgentenMeldung(agent: string, text: string) {
  meldungen.push({
    agent,
    zeitpunkt: new Date().toLocaleString(),
    text
  });
}

export function getAgentenMeldungen(): Meldung[] {
  return [...meldungen];
}
