const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'./src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    // publicPath: 'public'
  },
  mode:"production",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
   hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: [
      //     'url-loader'
      //   ],
      //   query: {
      //     limit: 8192
      //   }
      // }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
}