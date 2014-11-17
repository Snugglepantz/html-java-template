(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', dataService);

  dataService.$inject = ['$http', '$log'];

  function dataService($http, $log) {
    var service = {
    };

    return service;
  }
})();
