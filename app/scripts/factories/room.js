(function() {
  function Room($firebaseArray, room) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.list = rooms;
    Room.add = function(room) {
      rooms.$add(room).then(function(data){
        console.log(room);
        var id = data.key;
        console.log(id);
        rooms.$indexFor(id);
      });
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
