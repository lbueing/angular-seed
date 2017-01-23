'use strict';


angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$http', function homeController($http) {


      var self = this;

      $http.get('https://talabackend.herokuapp.com/api/languages').then(function(response) {
        self.languages = response.data;
      });
    }]
    // controllerAs: 'home'
  });
