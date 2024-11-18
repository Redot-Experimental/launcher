import { app, protocol, BrowserWindow, net } from "electron";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import path from "node:path";
import url from "node:url";
import { WindowManager } from "./services/window-manager";

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) app.quit();

app.commandLine.appendSwitch("--no-sandbox");

const PROTOCOL = "redotlauncher";

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient(PROTOCOL, process.execPath, [
      path.resolve(process.argv[1]),
    ]);
  }
} else {
  app.setAsDefaultProtocolClient(PROTOCOL);
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId("org.redotengine.launcher");

  protocol.handle("local", (request) => {
    const filePath = request.url.slice("local:".length);
    return net.fetch(url.pathToFileURL(decodeURI(filePath)).toString());
  });

  await import("./main");

  if (!process.argv.includes("--hidden")) {
    WindowManager.createMainWindow();
  }
});

app.on("browser-window-created", (_, window) => {
  optimizer.watchWindowShortcuts(window);
});

const handleDeepLinkPath = (uri?: string) => {
  if (!uri) return;

  try {
    const url = new URL(uri);

    if (url.host === "install-source") {
      WindowManager.redirect(`settings${url.search}`);
    }
  } catch (error) {
    console.error("Error handling deep link", uri, error);
  }
};

app.on("second-instance", (_event, commandLine) => {
  if (WindowManager.mainWindow) {
    if (WindowManager.mainWindow.isMinimized())
      WindowManager.mainWindow.restore();

    WindowManager.mainWindow.focus();
  } else {
    WindowManager.createMainWindow();
  }

  handleDeepLinkPath(commandLine.pop());
});

app.on("open-url", (_event, url) => {
  handleDeepLinkPath(url);
});

app.on("window-all-closed", () => {
  WindowManager.mainWindow = null;
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    WindowManager.createMainWindow();
  }
});
