(function(){
	"use strict";
	angular
	.module('psi')
	.factory('TestCenterService', TestCenterService);

	/** @ngInject */
	function TestCenterService($http, $log) {
		function search(testId){
			return $http.get("testcenters/"+testId).then(successFunc).catch(errorFunc);
			//return $http.get("app/data/test.centers.json").then(successFunc).catch(errorFunc);
		}
		function successFunc(response){
			return response.data;
		}
		function errorFunc(response){
			$log.error(response);
		}
		return {
			search:search
		}

	}
})();