/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS(
  withSass({
    webpack: config => {
      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        loaders: 'graphql-tag/loader'
      });

      config.resolve.alias['@material-ui/styles'] = path.resolve(
        __dirname,
        'node_modules/@material-ui/styles'
      );

      return config;
    },
    publicRuntimeConfig: {
      GRAPHQL_SERVER: process.env.GRAPHQL_SERVER
    }
  })
);
