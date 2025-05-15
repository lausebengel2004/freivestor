// @agenten/dev/release/ReleaseTagAgent.ts
import simpleGit from "simple-git";
import fs from "fs";
import path from "path";
const git = simpleGit();
const pkgPath = path.resolve(__dirname, "../../../package.json");
function bumpPatchVersion(version) {
    const [major, minor, patch] = version.split(".").map(Number);
    return `${major}.${minor}.${patch + 1}`;
}
export async function runReleaseTag() {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    const oldVersion = pkg.version;
    const newVersion = bumpPatchVersion(oldVersion);
    pkg.version = newVersion;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf-8");
    const tagName = `v${newVersion}`;
    const commitMsg = `release: 🔖 FreiVestor ${tagName}`;
    try {
        await git.add("package.json");
        await git.commit(commitMsg);
        await git.addTag(tagName);
        console.log(`✅ Neue Version: ${newVersion}`);
        console.log(`🏷️ Git-Tag gesetzt: ${tagName}`);
    }
    catch (err) {
        console.error("❌ Fehler beim Setzen des Release-Tags:", err);
    }
}
runReleaseTag();
