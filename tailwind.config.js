import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/src/**/*.{html,ts,scss}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

module.exports = {
    content: [
      './resources/src/index.html',
      './resources/src/**/*.{js,ts,jsx,tsx,html,scss}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }