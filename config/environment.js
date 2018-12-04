'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'sentry-demo',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    sentry: {
      dsn: 'https://b53cb08e298e4ff496c0c676e5eb576f@sentry.io/1328216',
      globalErrorCatching: false
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com",
      'img-src': [
        "'self'",
        "data: app.getsentry.com"
      ],
      'connect-src': [
        "'self'",
        'app.getsentry.com'
      ],
      // `media-src` will be omitted from policy
      // Browser will fallback to default-src for media resources (which is to deny, see above).
      'media-src': null
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
