!macro customUnInstall
  ${ifNot} ${isUpdated}
    RMDir /r "$APPDATA\${APP_PACKAGE_NAME}"
    RMDir /r "$APPDATA\redotlauncher"
    RMDir /r "$LOCALAPPDATA\redotlauncher-updater"
  ${endIf}
!macroend
