'use strict';

describe('Controller: ListadoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularclApp'));

  var ListadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListadoCtrl = $controller('ListadoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
