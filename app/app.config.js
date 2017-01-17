'use strict';

angular.
  module('capstoneApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/home/:language', {
          template: '<language-detail></language-detail>'
        }).
        when('/add-a-word', {
          template: '<add-a-word></add-a-word>'
        }).
        otherwise('/home');
    }
  ]);
