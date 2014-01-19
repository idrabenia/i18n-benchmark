'use strict';

angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
  gettextCatalog.setStrings('en', {'Splendid!': 'Splendid!'});
  gettextCatalog.setStrings('ru', {'Splendid!': 'Сплендид!'});
}]);