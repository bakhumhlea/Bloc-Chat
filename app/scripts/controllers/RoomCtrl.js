(function() {
    function RoomCtrl(){
      $scope.rooms = Room.all;
    }

    angular
      .module('blocChat')
      .controller('RoomCtrl', ['$scope','Room', RoomCtrl]);
})();
