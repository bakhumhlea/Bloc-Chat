(function(){
  function messages($firebaseArray) {
    var messages = {};
    var messageRef = firebase.database().ref().child("messageLists");
    var messageListArr = $firebaseArray(messageRef);
    
    messages.list = null;

    messages.openChatRoom = function(room) {
      var thisRoomId = room.$id;
      var thisRoomMessagesDisplay = null;
      var thisRoomMessages = messageRef.orderByChild('roomId').equalTo(thisRoomId).on('value', function(snapshot) {
        thisRoomMessagesDisplay = snapshot.val();
        messages.list = thisRoomMessagesDisplay;
      });
    };
    return messages;
  }

  angular.module('blocChat').service('messages', ['$firebaseArray',messages]);
})();
