'use strict';

angular.module( 'angularclApp' )

  .service( 'appScriptService', function ( $resource ) {

  	var url = 'https://script.google.com/macros/s/AKfycbxt4LCprQGTu00NkWDwUBHhIy4GCosUj3NjV5sG8su46ej4R8k/exec';

  	return $resource( url, {}, {
  		'put': { method: 'post', isArray: false, data: ':data' },
  	});

  });
