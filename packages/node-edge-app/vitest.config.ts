import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    conditions: [process.env.VITEST_CONDITIONS!]
  }
})