(function() {
    function HomeCtrl(Room , newRoom, $uibModal) {
      this.rooms = Room;
      this.newRoom = newRoom;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',['Room','newRoom','$uibModal', HomeCtrl]);
})();
