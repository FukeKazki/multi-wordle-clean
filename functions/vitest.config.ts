import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
});
