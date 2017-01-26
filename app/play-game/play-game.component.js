'use strict';


angular.
  module('playGame').
  component('playGame', {
    templateUrl: 'play-game/play-game.template.html',
    controller: ['$location', '$scope','$http', function playGameController($location, $scope, $http) {

      var self = this;

      $http.get('https://talabackend.herokuapp.com/api/languages').then(function(response) {
        self.languages = response.data;
      });

      $http.get('https://talabackend.herokuapp.com/api/categories').then(function(response) {
        self.categories = response.data;
      });

      $http.get('https://talabackend.herokuapp.com/api/speeches').then(function(response) {
        self.part_of_speeches = response.data;
      });

      $scope.play_game = function() {
        var scope = $scope.play_game;
        var location = $location;
        $http.get('https://talabackend.herokuapp.com/api/words/search?query=' + scope.language).then(function(response) {
          var data = response.data.words;
          var arr = [];
          if (scope.category !== undefined && scope.part_of_speech !== undefined){
            for (var i = 0; i < data.length; i ++) {
              if (data[i].category === scope.category && data[i].part_of_speech == scope.part_of_speech) {
                arr.push(data[i]);
          }}} else if (scope.part_of_speech !== undefined) {
            for (var j = 0; j < data.length; j ++) {
              if (data[j].part_of_speech == scope.part_of_speech) {
                arr.push(data[j]);
          }}} else if (scope.category !== undefined) {
            for (var k = 0; k < data.length; k ++) {
              if (data[k].category == scope.category) {
                arr.push(data[k]);
          }}} else {
            for (var n = 0; n < data.length; n ++) {
              arr.push(data[n]);
          }}
            location.search({words: arr}).path('/spelling');
        });

      };
    }]
  });
