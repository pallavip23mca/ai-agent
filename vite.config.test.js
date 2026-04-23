const assert = require('assert');
const fs = require('fs');
const path = require('path');

const viteConfigPath = path.resolve(__dirname, 'vite.config.js');
const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');

assert.ok(viteConfigContent.includes("import { defineConfig } from 'vite'"), 'vite.config.js should import defineConfig from vite');
assert.ok(viteConfigContent.includes("import react from '@vitejs/plugin-react'"), 'vite.config.js should import react plugin');
assert.ok(viteConfigContent.includes("plugins: [react()]"), 'vite.config.js should use react plugin');

console.log('All vite.config.js tests passed!');
