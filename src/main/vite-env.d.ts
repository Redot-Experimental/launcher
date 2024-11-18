interface ImportMetaEnv {
  readonly MAIN_VITE_AUTH_URL: string;
  readonly MAIN_VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
