/** @type {import('postcss-load-config').Config} */
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssImport from 'postcss-import';

const config = {
  plugins: [
    autoprefixer(),
    tailwindcss(),
    postcssImport(),
  ],
};

export default config;
