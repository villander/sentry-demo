/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.sentry = {
      publicUrl: 'https://safe-oasis-39380.herokuapp.com',
      sentryUrl: 'https://sentry.io/',
      sentryOrganizationSlug: 'villander',
      sentryProjectSlug: 'javascript',
      sentryBearerApiKey: 'd649f01f5f1746099cedc74f385833abe3e855583c5e4a98a7987698176544a3'
    };
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
