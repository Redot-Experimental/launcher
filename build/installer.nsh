!macro customUnInstall
  ${ifNot} ${isUpdated}
    RMDir /r "$APPDATA\${APP_PACKAGE_NAME}"
    RMDir /r "$APPDATA\redot-launcher"
    RMDir /r "$LOCALAPPDATA\redot-launcher-updater"
  ${endIf}
!macroend
