'use strict';

// Register `languageDetail` component, along with its associated controller and template
angular.
  module('languageDetail').
  component('languageDetail', {
    templateUrl: 'language-detail/language-detail.template.html',
    controller: ['$http', '$routeParams',
      function languageDetailController($http, $routeParams) {
        var self = this;


        $http.get('languages/' + $routeParams.languageName + '.json').then(function(response) {
          self.language = response.data;
        });
      }
    ]
  });
