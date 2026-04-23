const assert = require('assert');
const fs = require('fs');
const path = require('path');

const eslintConfigPath = path.resolve(__dirname, '.eslintrc.cjs');
const eslintConfigContent = fs.readFileSync(eslintConfigPath, 'utf8');

assert.ok(eslintConfigContent.includes('root: true,'), 'ESLint config should set root to true');
assert.ok(eslintConfigContent.includes('plugin:react/recommended'), 'ESLint config should include react recommended plugin');
assert.ok(eslintConfigContent.includes('plugin:react-hooks/recommended'), 'ESLint config should include react-hooks recommended plugin');
assert.ok(eslintConfigContent.includes('prettier'), 'ESLint config should include prettier in extends');
assert.ok(eslintConfigContent.includes('jsx: true'), 'ESLint config should enable JSX');

console.log('All .eslintrc.cjs tests passed!');
