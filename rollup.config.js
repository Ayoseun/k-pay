import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import obfuscator from 'rollup-plugin-obfuscator';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'OrokiipayWidget',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser(),
    obfuscator({
      globalOptions: {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        debugProtection: true,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.8,
        transformObjectKeys: true,
        unicodeEscapeSequence: false
      }
    }),
  ]
};