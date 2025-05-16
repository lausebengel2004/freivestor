export const CommitTrackingAgent = {
  setPushZeitpunkt: () => {
    const now = new Date().toISOString();
    localStorage.setItem("letzterPush", now);
    return now;
  },

  getPushZeitpunkt: (): string | null => {
    return localStorage.getItem("letzterPush");
  },

  getZeitSeitPush: (): string => {
    const last = localStorage.getItem("letzterPush");
    if (!last) return "Nie";

    const lastDate = new Date(last);
    const now = new Date();
    const diffMin = Math.floor((now.getTime() - lastDate.getTime()) / 60000);

    if (diffMin < 1) return "weniger als 1 Minute";
    if (diffMin === 1) return "1 Minute";
    return `${diffMin} Minuten`;
  },

  /**
   * Prüft, ob nach dem letzten Push Änderungen im system-log.md gespeichert wurden.
   */
  wurdeSeitherGeändert: (): boolean => {
    const letzterPush = localStorage.getItem("letzterPush");
    const systemLog = localStorage.getItem("system-log.md");

    if (!letzterPush || !systemLog) return false;

    const match = systemLog.match(/## Stand:\s*(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)/);
    if (!match) return false;

    const standDate = new Date(match[1]);
    const pushDate = new Date(letzterPush);

    return standDate.getTime() > pushDate.getTime();
  }
};
