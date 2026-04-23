import { default_api } from './tool_code'; // Not a real import, for demonstration of reading content

// This test suite verifies the basic structure and content of the tsconfig.json file
// as part of the Vite project initialization.
async function testTsconfigContent() {
  const fileContent = await default_api.readFile({path: 'tsconfig.json'});
  const content = fileContent.content.content;
  const tsconfig = JSON.parse(content);

  console.assert(tsconfig.compilerOptions.target === 'ES2020', 'tsconfig.json: compilerOptions.target should be ES2020');
  console.assert(tsconfig.compilerOptions.jsx === 'react-jsx', 'tsconfig.json: compilerOptions.jsx should be react-jsx');
  console.assert(tsconfig.compilerOptions.moduleResolution === 'bundler', 'tsconfig.json: compilerOptions.moduleResolution should be bundler');
  console.assert(tsconfig.include.includes('src'), 'tsconfig.json: include array should contain \'src\'');
  console.assert(tsconfig.references && tsconfig.references.some(ref => ref.path === './tsconfig.node.json'), 'tsconfig.json: references should include tsconfig.node.json');
  
  console.log('tsconfig.json content verification passed.');
}

testTsconfigContent();
