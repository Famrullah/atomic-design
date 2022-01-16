const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postCssImport = require('postcss-import')
module.exports = {
  plugins: ['postcss-preset-env', tailwindcss, autoprefixer, postCssImport],
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
}
