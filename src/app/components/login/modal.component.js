
angular.module('psi').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  
$ctrl.username=null;
  $ctrl.animationsEnabled = true;

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
          username: function(){
            return $ctrl.username;
        }  
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

 

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('psi').controller('ModalInstanceCtrl', function ($uibModalInstance, username) {
  var $ctrl = this;
    $ctrl.username=username;
  

  $ctrl.ok = function () {
     $uibModalInstance.close($ctrl.username);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('psi').component('modalComponent', {
  templateUrl: 'app/components/login/modalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

   /* $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };*/

    $ctrl.ok = function (username) {
      console.log(username);
         $ctrl.close({$value: username});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});