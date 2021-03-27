import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'Library',
    },
    plugins: plugins(),
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.esm.js',
      format: 'esm',
    },
    plugins: plugins(),
  },
];

function plugins() {
  return [typescript(), buble(), terser()];
}
