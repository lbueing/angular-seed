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

      // var array = [];
      //
      // $scope.buffer_clip = function() {
      //   console.log('hey');
      //   blob = $scope.new_word.recordedInput;
      //   console.log(blob);
      //   var reader = new FileReader();
      //   reader.onloadend = function () {
      //     console.log(reader.result);
      //     console.log('hey');
      //   };
      //
      //   // reader.readAsBinaryString(blob);
      //   reader.readAsArrayBuffer(blob);
      // }



      $scope.save_word = function(){
        var scope = $scope.new_word;
        var blob = scope.recordedInput;
        var reader = new FileReader();
        if (blob) {
          reader.onloadend = function () {
          $http.post('http://localhost:3000/api/words',
          {
             'foreign_word'  : scope.foreign_word,
             'english_word' : scope.english_word,
             'language' : scope.language,
             'sound_clip' : reader.result,
             'sound_present' : true
           });
          };
          reader.readAsDataURL(blob);
        } else {
          $http.post('http://localhost:3000/api/words',
          {
             'foreign_word'  : scope.foreign_word,
             'english_word' : scope.english_word,
             'language' : scope.language,
             'sound_present' : false
           });
        }
        $scope.new_word = null;
      };

    }]
  });
