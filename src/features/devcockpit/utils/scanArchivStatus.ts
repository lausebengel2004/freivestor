import { ARCHIV_INSPEKTOR_CONFIG } from "../config/archiv-inspector.config";

export async function scanArchivStatus(): Promise<string[][]> {
  const fileList: string[][] = [];

  for (const ordner of ARCHIV_INSPEKTOR_CONFIG.ordner) {
    const dirHandle = await window.showDirectoryPicker({ startIn: "documents" });
    for await (const entry of dirHandle.values()) {
      if (entry.kind === "file") {
        const file = await entry.getFile();
        const name = file.name;
        const path = `${ordner}/${name}`;
        const ext = name.split(".").pop()?.toLowerCase() || "";
        const sizeKB = file.size / 1024;
        const typ = ext;
        const größe = `${sizeKB.toFixed(1)} KB`;

        // Skip ungewünschte Dateitypen
        if (!ARCHIV_INSPEKTOR_CONFIG.dateitypen.includes(ext)) continue;

        // Bewertung
        let status = "aktiv";
        let empfehlung = "behalten";

        if (file.size === 0) {
          status = "leer";
          empfehlung = "archivieren";
        } else if (sizeKB < 0.3) {
          status = "winzig";
          empfehlung = "prüfen";
        }

        fileList.push([path, typ, größe, status, empfehlung]);
      }
    }
  }

  return fileList;
}
