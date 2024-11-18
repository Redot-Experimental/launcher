import { app } from "electron";
import path from "node:path";

export const isStaging = import.meta.env.MAIN_VITE_API_URL.includes("staging");

export const databaseDirectory = path.join(
  app.getPath("appData"),
  "redotlauncher"
);
export const databasePath = path.join(
  databaseDirectory,
  isStaging ? "redotlauncher_test.db" : "redotlauncher.db"
);

export const logsPath = path.join(
  app.getPath("appData"),
  "redotlauncher",
  "logs"
);

export const seedsPath = app.isPackaged
  ? path.join(process.resourcesPath, "seeds")
  : path.join(__dirname, "..", "..", "seeds");

export const backupsPath = path.join(app.getPath("userData"), "Backups");

export const appVersion = app.getVersion() + (isStaging ? "-staging" : "");
