(function() {
  'use strict';

  angular
  .module('psi')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController(TestCenterService, $log) {
    var vm = this;

    vm.searchObj = {};

    vm.searchObj.distance  = "5";

    vm.search = function(){
      vm.testCenters = [];
      TestCenterService.search(vm.searchObj.testId).then(function(testCenters){
        vm.testCenters =  testCenters;
        if(angular.isArray(vm.testCenters)){
          vm.totalItems = vm.testCenters.length;
        }
           
      });
    }

    vm.itemsPerPage = 2;
    vm.currentPage = 1;
    
    vm.pageChanged = function() {
      $log.log('Page changed to: ' + vm.currentPage);
    };
    
    //initialize date and currency value  
    vm.date = new Date();
    vm.money = 5000;
  }
})();
