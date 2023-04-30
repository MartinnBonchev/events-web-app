import { defineConfig } from "vite";
import { URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": new URL("./src/", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@routes": new URL("./src/routes", import.meta.url).pathname,
      "@store": new URL("./src/store", import.meta.url).pathname,
    },
  },
});
