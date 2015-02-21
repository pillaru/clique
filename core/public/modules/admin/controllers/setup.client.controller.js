'use strict';

angular.module('clique').controller('SetupController', ['$scope', '$http',
	function($scope, $http) {
		// Setup
		$scope.setup = function(){
			var setupData = {
				cliqueName: this.cliqueName,
				email: this.email,
				password: this.password,
				firstName: this.firstName,
				lastName: this.lastName
			}
			$http({
				method: 'POST',
				url: '/api/authentication/setup', 
				data: setupData,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    }
			}).
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously
    			// when the response is available
			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
    			// or server returns response with an error status.
			});
		};
	}
]);

angular.module('clique').directive('compareTo', function(){
	return {
		require: 'ngModel',
		scope: {
			otherModelValue: "=compareTo"
		},
		link: function(scope, element, attributes, ngModel) {
			ngModel.$validators.compareTo = function(modelValue) {
				return modelValue == scope.otherModelValue;
			};

			scope.$watch('otherModelValue', function() {
				ngModel.$validate();
			});
		}
	};
});