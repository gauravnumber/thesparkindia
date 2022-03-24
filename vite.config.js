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
  // base: '/dist/',
  // build: {
  //   chunkSizeWarningLimit:1500,
  //   rollupOptions: {
  //       output:{
  //           manualChunks(id) {
  //             if (id.includes('node_modules')) {

  //                 return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //             }
  //         }
  //       }
  //   }
  // }
});
