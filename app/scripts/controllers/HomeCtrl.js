(function() {
    function HomeCtrl(Room , newRoom, $uibModal) {
      var $ctrl = this;
      $ctrl.rooms = Room;
      $ctrl.newRoom = newRoom;

      $ctrl.animationsEnabled = true;
      $ctrl.item = $ctrl.newRoom.$value;

      $ctrl.open = function (size, parentSelector) {

        var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: size,
          appendTo: parentElem,
          resolve: {
            item: function () {
              return $ctrl.item;
            }
          }
        });
        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

      $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
      };
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl',['Room','newRoom','$uibModal', HomeCtrl]);
})();
