/* eslint-disable @typescript-eslint/no-require-imports */
const config = require("tailwind-config/tailwind.config.cjs");

module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
};
