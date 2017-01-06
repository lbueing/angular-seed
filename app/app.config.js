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
        when('/home/languageName', {
          template: '<language-detail></language-detail>'
        }).
        otherwise('/home');
    }
  ]);
