module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-inject')({
      injectTo: 'fileStart',
      cssFilePath: './src/assets/styles/consts.css'
    })
  ]
}