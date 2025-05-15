// tools/archiv-inspector/utils/scanFileStatus.ts
export const scanFileStatus = (content) => {
    const trimmed = content.trim();
    if (trimmed === "")
        return { status: "leer", empfehlung: "löschen" };
    if (trimmed.startsWith("//") && trimmed.split("\n").length < 3)
        return { status: "kommentar", empfehlung: "archivieren" };
    if (!trimmed.includes("export") && !trimmed.includes("return"))
        return { status: "kein Export", empfehlung: "prüfen" };
    return { status: "aktiv", empfehlung: "behalten" };
};
