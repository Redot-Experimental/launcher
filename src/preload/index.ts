import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled in the BrowseWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', {
    // TODO
  })
} catch (e) {
  console.error(e)
}
