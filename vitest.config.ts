import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: true
    }
    // This doesn't work either
    // coverage: {
    //   include: ['src/**/*.{ts,vue}'],
    //   all: true,
    // } as any
  },
})
