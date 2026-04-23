const assert = require('assert');
const fs = require('fs');
const path = require('path');

const appJsxPath = path.resolve(__dirname, 'src/App.jsx');
const appJsxContent = fs.readFileSync(appJsxPath, 'utf8');

assert.ok(appJsxContent.includes("import React from 'react'"), 'App.jsx should import React');
assert.ok(appJsxContent.includes("function App() {"), 'App.jsx should define an App function component');
assert.ok(appJsxContent.includes("export default App"), 'App.jsx should export App as default');
assert.ok(appJsxContent.includes("Hello Vite + React!"), 'App.jsx should contain default welcome text');

console.log('All src/App.jsx tests passed!');
