declare global {
  interface Electron {
    signOut: () => Promise<void>;
    openAuthWindow: () => Promise<void>;
    getSessionHash: () => Promise<string | null>;
    onSignIn: (cb: () => void) => () => Electron.IpcRenderer;
    onSignOut: (cb: () => void) => () => Electron.IpcRenderer;
  }

  interface Window {
    electron: Electron;
  }
}
