module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
