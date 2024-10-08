/* eslint-env node */
const path = require('path');

const base = require('@devvit/eslint-config/base.cjs');

const config = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: [
      path.join(__dirname, 'tsconfig.json'),
      path.join(__dirname, 'scripts', 'tsconfig.json'),
    ],
  },
};

module.exports = config;
