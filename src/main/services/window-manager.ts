import { BrowserWindow, app } from "electron";
import { is } from "@electron-toolkit/utils";
import path from "node:path";
import icon from "@resources/icon.png?asset";

export class WindowManager {
  public static mainWindow: Electron.BrowserWindow | null = null;

  private static loadMainWindowURL(hash = "") {
    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
      this.mainWindow?.loadURL(
        `${process.env["ELECTRON_RENDERER_URL"]}#/${hash}`
      );
    } else {
      this.mainWindow?.loadFile(
        path.join(__dirname, "../renderer/index.html"),
        {
          hash,
        }
      );
    }
  }

  public static createMainWindow() {
    if (this.mainWindow) return;

    this.mainWindow = new BrowserWindow({
      width: 1200,
      height: 720,
      minWidth: 1024,
      minHeight: 540,
      backgroundColor: "#000000",
      titleBarStyle: process.platform === "linux" ? "default" : "hidden",
      ...(process.platform === "linux" ? { icon } : {}),
      trafficLightPosition: { x: 16, y: 16 },
      titleBarOverlay: {
        symbolColor: "#DADBE1",
        color: "#262626",
        height: 34,
      },
      webPreferences: {
        preload: path.join(__dirname, "../preload/index.mjs"),
        sandbox: false,
      },
      show: false,
    });

    this.loadMainWindowURL();
    this.mainWindow.removeMenu();

    this.mainWindow.on("ready-to-show", () => {
      if (!app.isPackaged) WindowManager.mainWindow?.webContents.openDevTools();
      WindowManager.mainWindow?.show();
    });

    this.mainWindow.on("close", async () => {
      WindowManager.mainWindow?.setProgressBar(-1);
      WindowManager.mainWindow = null;
    });
  }

  public static openAuthWindow() {
    if (this.mainWindow) {
      const authWindow = new BrowserWindow({
        width: 600,
        height: 640,
        backgroundColor: "#000000",
        parent: this.mainWindow,
        modal: true,
        show: false,
        maximizable: false,
        resizable: false,
        minimizable: false,
        webPreferences: {
          sandbox: false,
          nodeIntegrationInSubFrames: true,
        },
      });

      authWindow.removeMenu();

      if (!app.isPackaged) authWindow.webContents.openDevTools();

      authWindow.loadURL(`${import.meta.env.MAIN_VITE_AUTH_URL}`);

      authWindow.once("ready-to-show", () => {
        authWindow.show();
      });

      authWindow.webContents.on("will-navigate", (_event, url) => {
        if (url.startsWith("redotlauncher://session")) {
          authWindow.close();
        }
      });
    }
  }

  public static redirect(hash: string) {
    if (!this.mainWindow) this.createMainWindow();
    this.loadMainWindowURL(hash);

    if (this.mainWindow?.isMinimized()) this.mainWindow.restore();
    this.mainWindow?.focus();
  }
}
