const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

publicPath = "public"

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, publicPath),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ] 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          }
        ] 
      },
      {
        test: /\.(woff|woff2|ttf|otf|svg)$/,
        loader: 'file-loader',
        include: [/fonts/],

        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: url => '/fonts/' + url
        }
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ] 
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization:{
    minimize: true
  },
  target: "electron-main"
};