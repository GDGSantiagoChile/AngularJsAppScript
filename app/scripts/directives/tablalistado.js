'use strict';

angular.module('angularclApp')

  	.directive('tablaListado', function () {

    	return {
	      templateUrl: 'views/listado/tabla-listado.html',
	      restrict: 'E',
	    };

  	});