const rules = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    parser: { amd: false },
    test: /\.(m?js|node)$/,
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    exclude: /node_modules/,
    test: /\.[jt]sx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          process.env.NODE_ENV !== 'production' &&
            require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  },
  {
    exclude: /(node_modules|\.webpack)/,
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
];

module.exports = rules;
