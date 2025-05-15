// @agenten/dev/release/prepareDashboardCommit.ts
import { updateAgentenDashboard } from "../agentenDashboardWriter";
import simpleGit from "simple-git";
const git = simpleGit();
async function commitDashboard() {
    updateAgentenDashboard();
    const filePath = "src/meta/agenten-dashboard.md";
    const commitMessage = "chore: 📋 Dashboard aktualisiert (AutoSync)";
    try {
        await git.add(["src/meta/agenten-dashboard.md"]);
        await git.commit(commitMessage);
        console.log("✅ Commit erfolgreich:", commitMessage);
    }
    catch (err) {
        console.error("❌ Commit fehlgeschlagen:", err);
    }
}
commitDashboard();
