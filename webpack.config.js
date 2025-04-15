const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // ...existing code...
  plugins: [
    // ...existing plugins...
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};