'use strict';

angular.module( 'angularclApp' )

  .controller( 'ListadoCtrl', function ( $scope, $modal, listadoFactory, $log ) {

  	$scope.registros = listadoFactory.listar;

  	$scope.nuevoRegistro = function () {

  		var modalInstance = $modal.open({
  			templateUrl: 'views/listado/listado-nuevo-modal.html',
  			controller: 'ListadonuevomodalCtrl',
  		});

  		modalInstance.result.then( function ( data ) {

        var values = {
          fecha: new Date(),
          nombre: data.nuevoReg.nombre,
          apellido: data.nuevoReg.apellido,
          correo: data.nuevoReg.correo,
        }

  			$scope.guardarRegistro( values );

      }, function () {
        $log.info( 'Operación cancelada' );
      });

    };

    $scope.guardarRegistro = function ( values ) {

      listadoFactory.guardar( values );
      $scope.registros.push( values );

  	};

  });
