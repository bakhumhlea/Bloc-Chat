(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    console.log(rooms);

    Room.list = rooms;
    console.log(rooms);
    Room.add = function(room) {
      rooms.$add(room).then(function(data){
        console.log(room);
        var id = data.key;

        rooms.child('id').push().set({roomId: id})
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
