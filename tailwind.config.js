/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './layout/**/*.liquid',
        './templates/**/*.liquid',
        './sections/**/*.liquid',
        './snippets/**/*.liquid',
        './src/**/*.{js,css}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
