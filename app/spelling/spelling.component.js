'use strict';

angular.
  module('spelling').
  component('spelling', {
    templateUrl: 'spelling/spelling.template.html',
    controller: ['$location', '$scope', '$http', '$routeParams', function spellingController($location, $scope, $http, $routeParams) {
      $scope.words = [];
      var scope = $scope.words
      var params = $routeParams.words;
      for (var i = 0; i < params.length; i ++) {
        if (params[i].sound_present === true) {
          scope.push(params[i]);
        }
      }

      $scope.word_index = 0;
      $scope.word = {};
      $scope.show = undefined;
      $scope.number_correct = 0;
      $scope.finished = false;

      $scope.next = function() {
          // if ($scope.word_index == $scope.words.length -1) {
          //     $scope.show = 'finished';
          //
          // }
          // else {
              $scope.word_index ++;
              $scope.show = undefined;
              $scope.correct = "";
          // }
      };



      $scope.check = function() {
        if ($scope.correct == $scope.words[$scope.word_index].foreign_word){
          $scope.show = true;
          $scope.number_correct ++;
        } else {
          $scope.show = false;
        }
        if ($scope.word_index == $scope.words.length -1) {
           $scope.finished = true;
       }
      };

      $scope.play_sound = function(event) {
        $http.get('https://talabackend.herokuapp.com/api/words/' + event.target.id).then(function(response) {
          var sound = new Audio(response.data.sound_clip)
          sound.play();
        });
      };

      $scope.play_game = function() {
        $location.path('/play-game');
      }
    }]
  });
