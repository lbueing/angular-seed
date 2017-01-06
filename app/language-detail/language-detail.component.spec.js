'use strict';

describe('languageDetail', function() {

  // Load the module that contains the `languageDetail` component before each test
  beforeEach(module('languageDetail'));

  // Test the controller
  describe('languageDetailController', function() {
    var $httpBackend, ctrl;
    var xyzlanguageData = {
      name: 'language xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('languages/xyz.json').respond(xyzlanguageData);

      $routeParams.languageId = 'xyz';

      ctrl = $componentController('languageDetail');
    }));

    it('should fetch the language details', function() {
      expect(ctrl.language).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.language).toEqual(xyzlanguageData);
    });

  });

});
