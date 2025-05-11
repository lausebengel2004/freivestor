
import fs from 'fs';
import path from 'path';

export class ImportCheckerAgent {
  constructor(rootDir, aliasMap) {
    this.rootDir = rootDir;
    this.aliasMap = aliasMap;
    this.issues = [];
  }

  run() {
    this.scanDirectory(this.rootDir);
    return this.issues;
  }

  scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        this.scanDirectory(fullPath);
      } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
        this.checkFile(fullPath);
      }
    }
  }

  checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const importRegex = /import\s+[^'"]+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      const aliasKey = Object.keys(this.aliasMap).find(alias => importPath.startsWith(alias));
      if (aliasKey) {
        const relativePath = importPath.replace(aliasKey, this.aliasMap[aliasKey]);
        const resolved = path.resolve(this.rootDir, relativePath);
        if (!fs.existsSync(resolved) && !fs.existsSync(resolved + '.js') && !fs.existsSync(resolved + '.jsx')) {
          this.issues.push({
            file: filePath,
            importPath,
            resolved,
            message: `Importfehler: ${importPath} konnte nicht gefunden werden.`
          });
        }
      }
    }
  }
}
