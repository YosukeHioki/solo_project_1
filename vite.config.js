import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./dist/index.html",
    },
    // server: {
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:3000",
    //       changeOrigin: true,
    //     },
    //   },
  },
});
