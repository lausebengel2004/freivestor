import { agentLogger } from "@coreAgenten/agent-logger";

export class SchuldenfreiAgent {
  constructor() {}

  interpretIdea(idee) {
    if (idee.toLowerCase().includes("feiermonat")) {
      agentLogger("SchuldenfreiAgent", "Wunsch nach FeierCard erkannt. Props: text, betrag, monat.");
      return {
        komponente: "FeierCard.jsx",
        props: ["text", "betrag", "monat"],
      };
    }
    agentLogger("SchuldenfreiAgent", "Idee konnte nicht interpretiert werden.");
    return null;
  }

  analyzeFile(filename, content) {
    if (filename.includes("MonatsCard") && !content.includes("feierBetrag")) {
      agentLogger("SchuldenfreiAgent", "MonatsCard verwendet keine Prop 'feierBetrag'.");
    }
  }
}
