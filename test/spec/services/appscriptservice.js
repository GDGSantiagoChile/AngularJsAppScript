'use strict';

describe('Service: appScriptService', function () {

  // load the service's module
  beforeEach(module('angularclApp'));

  // instantiate service
  var appScriptService;
  beforeEach(inject(function (_appScriptService_) {
    appScriptService = _appScriptService_;
  }));

  it('should do something', function () {
    expect(!!appScriptService).toBe(true);
  });

});
