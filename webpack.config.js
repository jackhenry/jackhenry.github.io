const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  target: 'web',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.html'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    hot: false,
    liveReload: true,
    compress: true,
    port: 9000,
  },
};
