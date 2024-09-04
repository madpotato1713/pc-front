import react from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());

  const port = parseInt(env.VITE_PORT, 10);
  const open = env.VITE_OPEN === 'true';

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_TITLE
          }
        }
      })
    ],
    server: {
      host: '0.0.0.0',
      port: port,
      open: open,
      cors: true
      // https: false,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
