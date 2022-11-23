/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // for vite
    "./index.html",
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages when using in apps, but when set ui with dev script can ignore this
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
};
