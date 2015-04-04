'use strict';


angular.module( 'angularclApp')

  .factory( 'listadoFactory', function ( appScriptService ) {
    
    var data = {
        listado: appScriptService.query().$promise.then( function ( response ) {
      
            return response;

        });
    };

    return data;

  });