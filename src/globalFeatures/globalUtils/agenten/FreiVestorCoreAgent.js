import { agentLogger } from "./agent-logger";
import snapshot from "./agent-snapshot.json";

export class FreiVestorCoreAgent {
  constructor(mode = "observe") {
    this.mode = mode;
  }

  checkFileChange(filename, fileContent) {
    if (snapshot.dateien.includes(filename)) {
      agentLogger("FreiVestorCoreAgent", `Datei ${filename} gehört zum Snapshot – keine Analyse.`);
      return;
    }

    if (filename.includes("vite.config") && !fileContent.includes("@components")) {
      agentLogger("FreiVestorCoreAgent", "Alias '@components' fehlt. Bitte prüfen.");
    }

    if (filename.includes("App.jsx") && !fileContent.includes("Route")) {
      agentLogger("FreiVestorCoreAgent", "Möglicherweise fehlt ein Routeneintrag in App.jsx.");
    }
  }
}
