import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
      build: {
        outDir: "dist", // Change this to your desired build output directory
      },
    },
  },

  plugins: [react()],
});
