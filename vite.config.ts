import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Gym Coach App',
        short_name: 'GymCoach',
        description: 'Your personal gym workout assistant',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        icons: [
          {
            src: '/public/icons/training-gym-svgrepo-com.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: '/public/icons/training-gym-svgrepo-com.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
});
