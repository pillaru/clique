'use strict';

// Setting up route
angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.
		state('setup', {
			url: '/admin/setup',
			templateUrl: 'modules/admin/views/setup.client.view.html'
		});
	}
]);