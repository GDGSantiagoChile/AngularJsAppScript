'use strict';

angular.module( 'angularclApp' )

  .factory( 'listadoFactory', function ( appScriptService ) {

    var listado = {

      listar: appScriptService.query(),
      guardar: function ( data ) {
      	var postData = new appScriptService;
      	postData.nombre = data.nombre;
      	postData.apellido = data.apellido;
      	postData.correos = data.correo;
      	postData.$save();
      },
      
    };

    return listado;

  });
