/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const plugins = [
  new ForkTsCheckerWebpackPlugin(),
  isDevelopment &&
    new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } }),
].filter(Boolean);

module.exports = plugins;
