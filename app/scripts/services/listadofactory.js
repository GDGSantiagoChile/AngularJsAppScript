'use strict';

/**
 * @ngdoc service
 * @name angularclApp.listadoFactory
 * @description
 * # listadoFactory
 * Factory in the angularclApp.
 */
angular.module( 'angularclApp' )

  .factory( 'listadoFactory', function ( appScriptService ) {

    var listado = {};

    listado.lista = appScriptService.query();
    
    return listado;

  });
