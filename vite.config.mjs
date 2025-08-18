import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 5173,         // standart port
    host: "0.0.0.0",
    strictPort: false,  // gerekirse başka port seçsin
    allowedHosts: ['localhost', '127.0.0.1'],
  }
});
