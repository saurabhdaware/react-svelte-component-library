/// <reference types="vitest" />

import { defineConfig } from "vite";
import { viteCrossPlatform } from "@cross-platform-tools/vite-plugin";
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

const isVue = process.env.PLATFORM === 'vue';

export default defineConfig({
  plugins: [
    isVue ? vue() : react(),
    viteCrossPlatform({
      platform: process.env.PLATFORM!,
      supportedPlatforms: ["vue", "react"],
      entryDir: 'src',
      outDir: 'dist',
      outputTypes: false,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue', 'react']
    }
  },
  resolve: {
    extensions: isVue ? ['.vue'] : undefined,
  }
});