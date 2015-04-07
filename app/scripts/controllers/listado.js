'use strict';

angular.module( 'angularclApp' )

  .controller( 'ListadoCtrl', function ( $scope, $modal, listadoFactory, $log ) {

  	$scope.registros = listadoFactory.listar;

  	$scope.nuevoRegistro = function () {

  		var modalInstance = $modal.open({
  			templateUrl: 'views/listado-nuevo-modal.html',
  			controller: 'ListadonuevomodalCtrl',
  		});

  		modalInstance.result.then( function ( data ) {

  			$scope.guardarRegistro( data );

  		}, function () {
  			$log.info( 'Operación cancelada' );
  		});

  	};

  	$scope.guardarRegistro = function ( data ) {

  		var res = listadoFactory.guardar( data );
  		$scope.registros = listadoFactory.listar;

  	};

  });
