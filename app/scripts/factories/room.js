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
//    Room.click = function() {
//      var messageList = firebase.database().ref().child('messageLists');
//      var Message = messageList.push();
//      Message.set({
//        userId: 'bakhumhlea',
//        message: 'Hey!',
//        timeSent: '7:23',
//        roomId: 'id'
//      });
//      var path = Message.toString();
//      var message = $firebaseArray(Message);
//      console.log(path);
//      console.log(message);
//    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
