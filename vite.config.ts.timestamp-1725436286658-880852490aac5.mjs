// vite.config.ts
import react from "file:///D:/reactworkspace/privacy-center-front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig, loadEnv } from "file:///D:/reactworkspace/privacy-center-front/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///D:/reactworkspace/privacy-center-front/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\reactworkspace\\privacy-center-front";
var vite_config_default = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  const port = parseInt(env.VITE_PORT, 10);
  const open = env.VITE_OPEN === "true";
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
      host: "0.0.0.0",
      port,
      open,
      cors: true
      // https: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFjdHdvcmtzcGFjZVxcXFxwcml2YWN5LWNlbnRlci1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccmVhY3R3b3Jrc3BhY2VcXFxccHJpdmFjeS1jZW50ZXItZnJvbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3JlYWN0d29ya3NwYWNlL3ByaXZhY3ktY2VudGVyLWZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQ29uZmlnRW52LCBkZWZpbmVDb25maWcsIGxvYWRFbnYsIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygobW9kZTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZS5tb2RlLCBwcm9jZXNzLmN3ZCgpKTtcblxuICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoZW52LlZJVEVfUE9SVCwgMTApO1xuICBjb25zdCBvcGVuID0gZW52LlZJVEVfT1BFTiA9PT0gJ3RydWUnO1xuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgICBpbmplY3Q6IHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogZW52LlZJVEVfVElUTEVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IHBvcnQsXG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgY29yczogdHJ1ZVxuICAgICAgLy8gaHR0cHM6IGZhbHNlLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxPQUFPLFdBQVc7QUFDNVQsT0FBTyxVQUFVO0FBQ2pCLFNBQW9CLGNBQWMsZUFBMkI7QUFDN0QsU0FBUyx3QkFBd0I7QUFIakMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsU0FBZ0M7QUFDM0QsUUFBTSxNQUFNLFFBQVEsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBRTVDLFFBQU0sT0FBTyxTQUFTLElBQUksV0FBVyxFQUFFO0FBQ3ZDLFFBQU0sT0FBTyxJQUFJLGNBQWM7QUFFL0IsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04saUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSixPQUFPLElBQUk7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
