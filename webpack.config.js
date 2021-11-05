import path from 'path';
import { URL } from 'url';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
