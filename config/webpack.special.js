const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  // entry: [paths.src + '/index.ts'],
  entry: [paths.src + '/scripts/App.ts'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.(glsl|vs|fs)$/, loader: 'ts-shader-loader' },

      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, modules: false } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // TypeScript: Use ts-loader to transpile TS files
      { test: /\.ts$/, exclude: /node_modules/, use: ['ts-loader'] },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
