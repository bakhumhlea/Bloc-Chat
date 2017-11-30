(function() {
  function ModalInstanceCtrl(newRoom , Room, $uibModalInstance) {
    var $ctrl = this;
    $ctrl.room = Room;
    $ctrl.newRoom = newRoom;

    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.room.add(newRoom));
      $ctrl.newRoom.$value = 'Enter your room name!';

    };

    $ctrl.cancel = function () {
      $uibModalInstance.close('cancel');
    };
  };

  angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['newRoom','Room','$uibModalInstance', ModalInstanceCtrl]);
})();
