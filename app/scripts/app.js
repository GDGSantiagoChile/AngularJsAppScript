'use strict';

angular

  .module( 'angularclApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  
  .config( function ( $routeProvider, $locationProvider ) {

    $locationProvider.html5Mode({
      enabled: true,
      requiredBase: false
    });

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
