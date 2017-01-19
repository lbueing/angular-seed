'use strict';


angular.
  module('health').
  component('health', {
    templateUrl: 'health/health.template.html',
    controller: ['$http', function healthController($http) {

      $http.sendStatus(200);
    }]
  });
