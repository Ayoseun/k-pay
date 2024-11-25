import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import obfuscator from 'rollup-plugin-obfuscator';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'OrokiipayWidget',
    sourcemap: process.env.NODE_ENV !== 'production',
    globals: {
      crypto: 'crypto',
      buffer: 'Buffer',
      http: 'http',
      https: 'https',
      url: 'url',
      stream: 'stream',
      zlib: 'zlib',
      events: 'events'
    }
  },
  plugins: [
    nodePolyfills({
      include: ['buffer', 'crypto', 'http', 'https', 'stream', 'url', 'zlib', 'events']
    }),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs({
      transformMixedEsModules: true
    }),
    json(),
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
  ],
  context: 'window'
};