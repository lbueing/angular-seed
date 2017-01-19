'use strict';

// Register `languageDetail` component, along with its associated controller and template
angular.
  module('languageDetail').
  component('languageDetail', {
    templateUrl: 'language-detail/language-detail.template.html',
    controller: ['$scope', '$http', '$routeParams',
      function languageDetailController($scope, $http, $routeParams) {
        var self = this;


        $http.get('http://localhost:3000/api/words/search?query=' + $routeParams.language).then(function(response) {
          self.words = response.data["words"];
        });

        $scope.play_sound = function(event) {
          $http.get('http://localhost:3000/api/words/' + event.target.id).then(function(response) {
            var sound = new Audio(response.data.sound_clip)
            sound.play();
          });

        };
      }
    ]
  });
