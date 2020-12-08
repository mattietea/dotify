/* eslint-disable @typescript-eslint/no-var-requires */
const plugins = require('./webpack.plugins');
const rules = require('./webpack.rules');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      ...rules,
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
