// Test suite for frontend/tsconfig.json
// This file assumes a testing framework like Vitest or Jest would be used.

// describe('tsconfig.json', () => {
//   it('should configure TypeScript for a React project with ES2020 target and JSX', () => {
//     const tsconfig = require('./tsconfig.json');
//     expect(tsconfig.compilerOptions.target).toBe('ES2020');
//     expect(tsconfig.compilerOptions.useDefineForClassFields).toBe(true);
//     expect(tsconfig.compilerOptions.lib).toContain('ES2020');
//     expect(tsconfig.compilerOptions.lib).toContain('DOM');
//     expect(tsconfig.compilerOptions.lib).toContain('DOM.Iterable');
//     expect(tsconfig.compilerOptions.module).toBe('ESNext');
//     expect(tsconfig.compilerOptions.skipLibCheck).toBe(true);
//     expect(tsconfig.compilerOptions.jsx).toBe('react-jsx');
//   });

//   it('should set bundler mode and related options', () => {
//     const tsconfig = require('./tsconfig.json');
//     expect(tsconfig.compilerOptions.moduleResolution).toBe('bundler');
//     expect(tsconfig.compilerOptions.allowImportingTsExtensions).toBe(true);
//     expect(tsconfig.compilerOptions.resolveJsonModule).toBe(true);
//     expect(tsconfig.compilerOptions.isolatedModules).toBe(true);
//     expect(tsconfig.compilerOptions.noEmit).toBe(true);
//   });

//   it('should enable strict linting rules', () => {
//     const tsconfig = require('./tsconfig.json');
//     expect(tsconfig.compilerOptions.strict).toBe(true);
//     expect(tsconfig.compilerOptions.noUnusedLocals).toBe(true);
//     expect(tsconfig.compilerOptions.noUnusedParameters).toBe(true);
//     expect(tsconfig.compilerOptions.noFallthroughCasesInSwitch).toBe(true);
//   });

//   it('should include the src directory and reference tsconfig.node.json', () => {
//     const tsconfig = require('./tsconfig.json');
//     expect(tsconfig.include).toEqual(['src']);
//     expect(tsconfig.references).toEqual([{ path: './tsconfig.node.json' }]);
//   });
// });
