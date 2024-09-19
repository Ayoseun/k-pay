import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/scripts/script.js', // Entry point for your widget
  output: {
    file: 'dist/orokii.bundle.js',
    format: 'iife', // Immediately Invoked Function Expression for browser compatibility
    name: 'Orokiipay', // Global variable name
    sourcemap: true
  },
  plugins: [
    html({
      include: '**/*.html' // Include all HTML files
    }),
    postcss({
      extensions: ['.css'], // Include all CSS files
      minimize: true // Minify the CSS
    }),
    terser() // Minify the output JS
  ]
};
