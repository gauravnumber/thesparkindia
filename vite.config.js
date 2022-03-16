import { defineConfig } from "vite";
// import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from "path";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    // tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
