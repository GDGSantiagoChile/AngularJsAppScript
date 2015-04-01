'use strict';

/**
 * @ngdoc overview
 * @name angularclApp
 * @description
 * # angularclApp
 *
 * Main module of the application.
 */
angular
  .module( 'angularclApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config( function ( $routeProvider ) {

    $routeProvider
      .when( '/', {
        templateUrl: 'views/inicio.html'
      })
      .when( '/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
