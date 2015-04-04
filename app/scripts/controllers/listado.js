'use strict';

/**
 * @ngdoc function
 * @name angularclApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the angularclApp
 */
angular.module( 'angularclApp' )

  .controller( 'ListadoCtrl', function ( $scope, listadoFactory ) {

  	$scope.registros = listadoFactory.listar;

  });
