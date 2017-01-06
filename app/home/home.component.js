'use strict';

angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$http', function homeController($http) {

      var self = this;

      $http.get('languages/languages.json').then(function(response) {
        self.languages = response.data;
      });
    }]
    // controllerAs: 'home'
  });
