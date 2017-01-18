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
          // for (var i = 0; i < response.data.length; i ++) {
          //   console.log('hey');
          //   self.words[i].sound_clip = new Audio(response.data[i].sound_clip);
          // }

        });


      }
    ]
  });
