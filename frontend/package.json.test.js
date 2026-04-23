// Test suite for frontend/package.json
// This file assumes a testing framework like Vitest or Jest would be used.

// describe('package.json', () => {
//   it('should contain react and react-dom in dependencies', () => {
//     const packageJson = require('./package.json');
//     expect(packageJson.dependencies.react).toMatch(/^\^18\./);
//     expect(packageJson.dependencies['react-dom']).toMatch(/^\^18\./);
//   });

//   it('should contain correct devDependencies for React, TypeScript, ESLint, Prettier, and Vite', () => {
//     const packageJson = require('./package.json');
//     const devDependencies = packageJson.devDependencies;
//     expect(devDependencies['@types/react']).toMatch(/^\^18\./);
//     expect(devDependencies['@types/react-dom']).toMatch(/^\^18\./);
//     expect(devDependencies['@typescript-eslint/eslint-plugin']).toMatch(/^\^6\./);
//     expect(devDependencies['@typescript-eslint/parser']).toMatch(/^\^6\./);
//     expect(devDependencies['@vitejs/plugin-react']).toMatch(/^\^4\./);
//     expect(devDependencies.eslint).toMatch(/^\^8\./);
//     expect(devDependencies.prettier).toMatch(/^\^3\./);
//     expect(devDependencies.typescript).toMatch(/^\^5\./);
//     expect(devDependencies.vite).toMatch(/^\^4\./);
//   });

//   it('should have a lint script configured', () => {
//     const packageJson = require('./package.json');
//     expect(packageJson.scripts.lint).toBe('eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0');
//   });
// });
