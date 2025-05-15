export function storeSystemLogAsMarkdown(logs) {
    const markdown = "# 📘 System-Log;
    " + logs.map((e) => `- ${e}`).join(";
    ");;
    localStorage.setItem("system-log.md", markdown);
}
