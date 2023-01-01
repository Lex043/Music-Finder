/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
