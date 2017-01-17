'use strict';


angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$http', function homeController($http) {


      var self = this;

      $http.get('http://localhost:3000/api/languages').then(function(response) {
        self.languages = response.data;
      });
    }]
    // controllerAs: 'home'
  });
