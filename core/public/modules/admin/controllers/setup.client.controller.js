'use strict';

angular.module('clique').controller('SetupController', ['$scope',
	function($scope) {
		// Setup
		$scope.setup = function(){
			// validate
			// make sure the passwords match
			if(this.password !== this.confirmPassword) {
				
			}
		}
	}
]);