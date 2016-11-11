(function() {
  'use strict';

  angular
  .module('psi')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController(TestCenterService, $translate) {
    var vm = this;

    vm.searchObj = {};

    vm.searchObj.distance  = "5";

    vm.search = function(){
      vm.testCenters = [];
      TestCenterService.search(vm.searchObj.testId).then(function(testCenters){
        vm.testCenters =  testCenters;   
      });
    }

    vm.changeLanguage = function (key) {
      $translate.use(key);
    };
    
  }
})();
