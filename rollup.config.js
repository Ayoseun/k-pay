
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
export default {
  input: 'go/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'OrokiipayWidget'
  },
  plugins: [
    resolve(),
    commonjs(),
       postcss({
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minify the CSS
    }),
  ]
};