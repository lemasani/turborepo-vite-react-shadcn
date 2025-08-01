import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // port for the app host
  },
  resolve: {
    alias: {
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.mjs"),
  },
});
