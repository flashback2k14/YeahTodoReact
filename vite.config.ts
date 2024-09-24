import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        background_color: "#eeeeee",
        theme_color: "#eeeeee",
        orientation: "portrait",
        display: "standalone",
        name: "Yeah! ToDo",
        short_name: "Yeah! ToDo",
        icons: [
          {
            src: "assets/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "assests/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
