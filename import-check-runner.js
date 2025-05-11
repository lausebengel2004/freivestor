
import { ImportCheckerAgent } from './src/globalFeatures/globalUtils/agenten/ImportCheckerAgent.js';
import fs from 'fs';
import path from 'path';

const rootDir = './src';
const aliasMap = {
  '@components': 'components',
  '@features': 'features',
  '@agenten': 'agenten',
  '@meta': 'meta',
  '@devCockpit': 'globalFeatures/globalComponents/devCockpit',
  '@coreAgenten': 'globalFeatures/globalUtils/agenten',
  '@schuldenfreiComponents': 'features/schuldenfrei/schuldenfreiComponents',
  '@schuldenfreiUtils': 'features/schuldenfrei/schuldenfreiUtils'
};

const agent = new ImportCheckerAgent(rootDir, aliasMap);
const result = agent.run();

const logPath = path.resolve('./meta/import-check-log.md');
const logStream = fs.createWriteStream(logPath, { flags: 'a' });

logStream.write(`\n\n## Import Check Report (${new Date().toLocaleString()})\n`);

if (result.length === 0) {
  logStream.write(`\n✅ Keine Importfehler gefunden.\n`);
} else {
  result.forEach(issue => {
    logStream.write(`\n❌ Datei: ${issue.file}`);
    logStream.write(`\nImportpfad: ${issue.importPath}`);
    logStream.write(`\nFehler: ${issue.message}\n`);
  });
}

logStream.end();
console.log(`✔️ Import-Check abgeschlossen. Ergebnisse in: ${logPath}`);
