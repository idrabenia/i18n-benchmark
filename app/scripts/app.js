'use strict';

angular.module('benchmarkApp', [
  'ngResource',
  'ngRoute',
  'gettext'
])
  .run(function (gettextCatalog) {
    gettextCatalog.currentLanguage = 'ru';

    
  })
  .factory('LocalizationInterceptor', function($q, gettextCatalog) {
      return {
       'request': function(config) {
           return config;
        },
     
        'response': function(response) {
            _.templateSettings = {
              'interpolate': /{{([\s\S]+?)}}/g
            };
            response.data = _.template(response.data, {t: gettextCatalog});
            return response;
        }
      };
  })
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    // alternatively, register the interceptor via an anonymous factory
    $httpProvider.interceptors.push('LocalizationInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });