import { appVersion } from "@main/constants";
import { ipcMain } from "electron";

import "./auth/open-auth-window";

ipcMain.handle("ping", () => "pong");
ipcMain.handle("getVersion", () => appVersion);
