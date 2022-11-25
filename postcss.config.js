module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' ?
    require('@fullhuman/postcss-purgecss')({
      content: ['./public/index.html', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }) : '',
  ]
}
