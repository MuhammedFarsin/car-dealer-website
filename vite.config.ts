import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "react-vendor";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
            if (
              id.includes("react-hook-form") ||
              id.includes("zod")
            ) {
              return "forms";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("sonner")) {
              return "sonner";
            }
          }
        },
      },
    },
  },
}));