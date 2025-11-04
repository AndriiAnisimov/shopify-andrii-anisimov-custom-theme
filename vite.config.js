import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        rollupOptions: {
            input: './src/scripts/main.js',
            output: {
                entryFileNames: 'main.js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
    css: {
        postcss: './postcss.config.js',
    },
});
