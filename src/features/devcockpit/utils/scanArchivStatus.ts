import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";

export async function scanArchivStatus(): Promise<string[][]> {
  const fileList: string[][] = [];

  // 📂 Nutzer wählt Projekt-Hauptordner (z. B. freivestor_clean_boot)
  const rootHandle = await window.showDirectoryPicker();

  // 📦 Basisverzeichnis aus der Config holen
  const baseDir = ARCHIV_INSPEKTOR_CONFIG.baseDir || "src";
  let baseDirHandle: FileSystemDirectoryHandle;

  try {
    baseDirHandle = await rootHandle.getDirectoryHandle(baseDir, { create: false });
  } catch (err) {
    alert(`❌ Der Ordner '${baseDir}' wurde im Projekt nicht gefunden. Bitte den richtigen Basisordner auswählen.`);
    return [];
  }

  for (const subPath of ARCHIV_INSPEKTOR_CONFIG.ordner) {
    try {
      const subDirHandle = await getSubDirectoryHandle(baseDirHandle, subPath);

      for await (const entry of subDirHandle.values()) {
        if (entry.kind !== "file") continue;

        const file = await entry.getFile();
        const name = file.name;
        const ext = name.split(".").pop()?.toLowerCase() || "";
        const sizeKB = file.size / 1024;

        // 🔍 Dateitypen nur mit Punkt prüfen
        if (!ARCHIV_INSPEKTOR_CONFIG.dateitypen.includes("." + ext)) continue;

        const relativePath = `${baseDir}/${subPath}${subPath.endsWith("/") ? "" : "/"}${name}`;
        const typ = ext;
        const größe = `${sizeKB.toFixed(1)} KB`;

        let status = "aktiv";
        let empfehlung = "behalten";

        if (file.size === 0) {
          status = "leer";
          empfehlung = "archivieren";
        } else if (sizeKB < 0.3) {
          status = "winzig";
          empfehlung = "prüfen";
        }

        fileList.push([relativePath, typ, größe, status, empfehlung]);
      }
    } catch (err) {
      console.warn(`📁 Subpfad '${subPath}' nicht gefunden unter '${baseDir}':`, err);
    }
  }

  if (fileList.length === 0) {
    alert("⚠️ Es wurden keine Dateien gefunden. Bitte stelle sicher, dass dein Projekt einen gültigen Basisordner enthält und korrekt gewählt wurde.");
  }

  return fileList;
}

// 🔧 Hilfsfunktion für rekursive Ordnernavigation
async function getSubDirectoryHandle(
  root: FileSystemDirectoryHandle,
  path: string
): Promise<FileSystemDirectoryHandle> {
  const parts = path.split("/").filter(Boolean);
  let current = root;

  for (const part of parts) {
    current = await current.getDirectoryHandle(part, { create: false });
  }

  return current;
}
