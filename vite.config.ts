import { defineConfig } from "vitest/config";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Vitest broadcast channel mock',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['vitest'],
        },
    },
})