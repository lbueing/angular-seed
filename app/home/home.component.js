'use strict';


angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$http', function homeController($http) {

      // this.soundclip = {
      //   word: '',
      //   rate: '',
      //   pitch: ''
      // };
      // if(responsiveVoice.voiceSupport()) {
      //     responsiveVoice.speak("hello world");
      //   }
      // angular.element(document.querySelector('#sound')).on('click', function(){
      //   responsiveVoice.speak(this.word, "UK English Male", {rate: 0.8, pitch: 0.6});
      // });

      var self = this;

      $http.get('http://localhost:3000/api/languages').then(function(response) {
        self.languages = response.data;
      });
    }]
    // controllerAs: 'home'
  });
