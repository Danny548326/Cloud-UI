import typescript from '@rollup/plugin-typescript';
import copy from "rollup-plugin-copy"
import babel from '@rollup/plugin-babel';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss'

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
      babel(),
      less()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.m.js',
      format: 'es',
      // sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      copy({
        targets: [
          { src: 'src/types/*', dest: 'dist' },
          {
            src: 'src/native-shim.js',dest: 'dist'
          }
        ]
      }),
      babel({ babelHelpers: 'bundled', configFile: './.babelrc.json', }),
      postcss({
        config: {
            path: './postcss.config.js'
        },
        use: {               
            less: { javascriptEnabled: true }
        },
        styleInject: false
    }),
    ]
  }
  , {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.u.js',
      format: 'umd',
      // sourcemap: true
      name: 'index'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      copy({
        targets: [
          { src: 'src/types/*', dest: 'dist' },
        ]
      }),
      babel(),
      postcss({
        config: {
            path: './postcss.config.js'
        },
        use: {               
            less: { javascriptEnabled: true }
        },
        // extensions: ['.less'],
        styleInject: false
    }),
    ]
  }
]