import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: ".vite",
  envPrefix: "H_",
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3001,
    host: true,
  },
  build: {
    manifest: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        "index": "./index.html",
        "App": "./src/App.jsx",
        "css": "./src/index.css",
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      }
    }
  }
});
