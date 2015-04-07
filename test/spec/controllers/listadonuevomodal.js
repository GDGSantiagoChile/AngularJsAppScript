'use strict';

describe('Controller: ListadonuevomodalCtrl', function () {

  // load the controller's module
  beforeEach(module('angularclApp'));

  var ListadonuevomodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListadonuevomodalCtrl = $controller('ListadonuevomodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
