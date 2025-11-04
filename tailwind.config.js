const path = require('path');

module.exports = {
    content: [
        path.join(__dirname, './layout/**/*.liquid'),
        path.join(__dirname, './templates/**/*.liquid'),
        path.join(__dirname, './sections/**/*.liquid'),
        path.join(__dirname, './snippets/**/*.liquid'),
        path.join(__dirname, './src/**/*.{js,css}'),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
