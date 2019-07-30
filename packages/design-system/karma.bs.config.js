/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const bsSettings = require('@open-wc/testing-karma-bs/bs-settings.js');
const createBaseConfig = require('./karma.conf.js');

module.exports = config => {
  config.set(
    merge(bsSettings(), createBaseConfig(config), {
      browserStack: {
        project: 'prototype-design-system',
      },
    }),
  );

  return config;
};
