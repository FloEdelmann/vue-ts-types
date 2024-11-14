import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    include: ['./tests/**/*.spec.ts'],
  },
});
