import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";

export async function scanArchivStatus(): Promise<string[][]> {
  const fileList: string[][] = [];

  // Nutzer wählt einmal den Hauptordner
  const rootHandle = await window.showDirectoryPicker();

  for (const subPath of ARCHIV_INSPEKTOR_CONFIG.ordner) {
    try {
      const subDirHandle = await getSubDirectoryHandle(rootHandle, subPath);

      for await (const entry of subDirHandle.values()) {
        if (entry.kind !== "file") continue;

        const file = await entry.getFile();
        const name = file.name;
        const ext = name.split(".").pop()?.toLowerCase() || "";
        const sizeKB = file.size / 1024;

        if (!ARCHIV_INSPEKTOR_CONFIG.dateitypen.includes(ext)) continue;

        const relativePath = `${subPath}/${name}`;
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
      console.warn(`📂 Ordner '${subPath}' nicht gefunden oder Zugriff verweigert:`, err);
    }
  }

  return fileList;
}

// ✅ Hilfsfunktion für verschachtelte Pfade wie "features/devcockpit/ui"
async function getSubDirectoryHandle(
  root: FileSystemDirectoryHandle,
  path: string
): Promise<FileSystemDirectoryHandle> {
  const parts = path.split("/");
  let current = root;

  for (const part of parts) {
    current = await current.getDirectoryHandle(part, { create: false });
  }

  return current;
}
