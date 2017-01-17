'use strict';

angular.
  module('addAWord').
  component('addAWord', {
    templateUrl: 'add-a-word/add-a-word.template.html',
    controller: ['$scope', '$http', function addAWordController($scope, $http) {

      var self = this;

      $http.get('http://localhost:3000/api/languages').then(function(response) {
        self.languages = response.data;
      });

      $scope.save_word = function(){
        $http.post('http://localhost:3000/api/words',
        {
           'foreign_word'  : $scope.new_word.foreign_word,
           'english_word' : $scope.new_word.english_word,
           'language' : $scope.new_word.language
       });
       $scope.new_word = null;
      };


    }]
  });
