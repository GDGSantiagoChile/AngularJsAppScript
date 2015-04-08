'use strict';

angular.module( 'angularclApp' )

  .factory( 'listadoFactory', function ( appScriptService ) {

    var listado = {

      listar: appScriptService.query(),
      guardar: function ( values ) {

        var data = {
          type: 'post',
          fecha: values.fecha,
          nombre: values.nombre,
          apellido: values.apellido,
          correo: values.correo,
        }
        appScriptService.put( data );
        
      },
      
    };

    return listado;

  });
