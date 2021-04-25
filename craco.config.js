const CracoLessPlugin = require('craco-less');
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@router': path.resolve(__dirname, 'src/app/router'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA1F2' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
