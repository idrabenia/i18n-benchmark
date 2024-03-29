'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  app.get('/api/saveLoadTime', api.saveLoadTime);
  

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/localization-template', index.localizationTemplate);
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};