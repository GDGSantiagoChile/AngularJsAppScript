'use strict';

angular.module( 'angularclApp' )

  .factory( 'listadoFactory', function ( appScriptService ) {

    var listado = {

      listar: appScriptService.query(),
      guardar: function ( data ) {
      	appScriptService.save( data );
      },
      
    };

    return listado;

  });
