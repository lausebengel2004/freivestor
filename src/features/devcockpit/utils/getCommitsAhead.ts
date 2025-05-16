import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

/**
 * Gibt zurück, wie viele lokale Commits ahead of origin/main sind.
 */
export const getCommitsAhead = async (): Promise<number> => {
  try {
    const { stdout } = await execAsync("git rev-list --count HEAD ^origin/main");
    const count = parseInt(stdout.trim(), 10);
    return isNaN(count) ? 0 : count;
  } catch (error) {
    console.error("❌ Git-Zugriff fehlgeschlagen:", error);
    return -1; // -1 = Fehler
  }
};
