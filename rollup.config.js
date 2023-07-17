import typescript from '@rollup/plugin-typescript';
import copy from "rollup-plugin-copy"
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      // sourcemap: true
    },
    plugins: [
      typescript(),
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.m.js',
      format: 'module',
      // sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      copy({
        targets: [
          { src: 'src/types/*', dest: 'dist' },
        ]
      })
    ]
  }]