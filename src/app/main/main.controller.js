(function() {
  'use strict';

  angular
  .module('psi')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController(TestCenterService, $log, $scope, tmhDynamicLocale) {
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
    $scope.date = new Date();
    $scope.money = 5000;
      
    // below listner listnes to change of language from 
    //translation.component and updates the language accordingly
    $scope.$on('language-changed', function(event, args) {
         tmhDynamicLocale.set(args.langKey);
    });      
    
  }
})();
