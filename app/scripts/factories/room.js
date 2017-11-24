(function() {
  function Room($firebaseArray, newRoom) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    console.log(newRoom);

    Room.list = rooms;
    Room.add = function(newRoom) {
      rooms.$add(newRoom).then(function(data){
        console.log(newRoom);
        var id = data.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id);
        console.log(data.key);
      });
    };

    Room.newRoomForm = false;

    Room.creatNewRoom = function(){
      Room.newRoomForm = true;
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray','newRoom', Room]);
})();
