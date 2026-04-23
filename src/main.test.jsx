const assert = require('assert');
const fs = require('fs');
const path = require('path');

const mainJsxPath = path.resolve(__dirname, 'src/main.jsx');
const mainJsxContent = fs.readFileSync(mainJsxPath, 'utf8');

assert.ok(mainJsxContent.includes("import React from 'react'"), 'main.jsx should import React');
assert.ok(mainJsxContent.includes("import ReactDOM from 'react-dom/client'"), 'main.jsx should import ReactDOM');
assert.ok(mainJsxContent.includes("import App from './App.jsx'"), 'main.jsx should import App');
assert.ok(mainJsxContent.includes("ReactDOM.createRoot(document.getElementById('root')).render("), 'main.jsx should render App to root');
assert.ok(mainJsxContent.includes("<App />"), 'main.jsx should render the App component');
assert.ok(mainJsxContent.includes("<React.StrictMode>"), 'main.jsx should use React.StrictMode');

console.log('All src/main.jsx tests passed!');
