import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  // Auth
  signOut: () => ipcRenderer.invoke("signOut"),
  openAuthWindow: () => ipcRenderer.invoke("openAuthWindow"),
  getSessionHash: () => ipcRenderer.invoke("getSessionHash"),
  onSignIn: (cb: () => void) => {
    const listener = (_event: Electron.IpcRendererEvent) => cb();
    ipcRenderer.on("on-signin", listener);
    return () => ipcRenderer.removeListener("on-signin", listener);
  },
  onSignOut: (cb: () => void) => {
    const listener = (_event: Electron.IpcRendererEvent) => cb();
    ipcRenderer.on("on-signout", listener);
    return () => ipcRenderer.removeListener("on-signout", listener);
  },
});
