import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        rollupOptions: {
            input: './src/scripts/main.js',
            output: {
                entryFileNames: 'main.js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'tailwind.css') return 'tailwind.css';
                    return '[name].[ext]';
                },
            },
        },
    },
    css: {
        postcss: './postcss.config.js',
    },
});
