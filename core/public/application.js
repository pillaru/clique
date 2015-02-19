'use strict';

angular.module('clique', ['ngRoute']);

angular.module('clique').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/admin/setup', {
        templateUrl: 'modules/admin/views/setup.client.view.html',
        controller: 'SetupController'
      });
      $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(function(){
	angular.bootstrap(document, ['clique']);
})