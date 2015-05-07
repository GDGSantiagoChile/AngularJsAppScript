'use strict';

describe('Directive: tablaListado', function () {

  // load the directive's module
  beforeEach(module('angularclApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tabla-listado></tabla-listado>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tablaListado directive');
  }));
});
