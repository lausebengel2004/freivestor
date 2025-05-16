// src/agenten/dev/runSpeicherBruecke.ts
import { registerSpeicherJob, startSpeicherBruecke } from "./core/AgentenSpeicherService";

registerSpeicherJob(
  "agenten::manifest::pending",
  "src/agenten/dev/agentenManifest.generated.ts",
  "🛠 Manifest gespeichert"
);

registerSpeicherJob(
  "agenten::diagnose::md",
  "export/diagnose.md",
  "📄 Diagnose Markdown gespeichert"
);

// Weitere Speicherjobs können hier ergänzt werden

startSpeicherBruecke();
