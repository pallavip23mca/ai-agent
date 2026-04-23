const assert = require('assert');
const fs = require('fs');
const path = require('path');

const prettierConfigPath = path.resolve(__dirname, '.prettierrc.cjs');
const prettierConfigContent = fs.readFileSync(prettierConfigPath, 'utf8');

assert.ok(prettierConfigContent.includes('semi: false'), 'Prettier config should set semi to false');
assert.ok(prettierConfigContent.includes('singleQuote: true'), 'Prettier config should set singleQuote to true');
assert.ok(prettierConfigContent.includes('trailingComma: 'all''), 'Prettier config should set trailingComma to 'all'');

console.log('All .prettierrc.cjs tests passed!');
