(function(){
  function messages($firebaseArray) {
    var messages = {};
    var messageRef = firebase.database().ref().child("messageLists");
    var logedInUser = firebase.database().ref().child("currentUser");
    var messageListArr = $firebaseArray(messageRef);

    messages.list = null;
    messages.currentChatRoom = null;

    messages.openChatRoom = function(room) {
      var thisRoomId = room.$id;
      var thisRoomMessagesDisplay = null;
      var thisRoomMessages = messageRef.orderByChild('roomId').equalTo(thisRoomId).on('value', function(snapshot) {
        thisRoomMessagesDisplay = snapshot.val();
        messages.list = thisRoomMessagesDisplay;
        messages.currentChatRoom = room.$id;
      });
    };

    messages.text = null;

    messages.user = function() {
      var user = null;
      var currentUser = logedInUser.orderByChild('username').on('child_added', function(userData) {
        user = userData.val();
      });
      return user;
    };

    messages.sentTime = function() {
      var time = new Date();
      var h = time.getHours();
      var m = time.getMinutes();
      var d = time.getDay();
      if (m<10) {
          m = '0'+ m;
      }
      var checkday = function(d) {
        var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        var today = '';
        for (var i = 0;i<days.length;i++) {
          if (i === d) {
            today = days[i];
          }
        }
        return today;
      }
      var today = checkday(d);

      var timeString = h +':'+m+', '+today;
      return timeString;
    }

    messages.send = function(message) {
      var sender = messages.user().username;
      var roomId = messages.currentChatRoom;
      var time = messages.sentTime();
      console.log('Message Sent at '+time);
      var messageList = firebase.database().ref().child('messageLists');
      var Message = messageList.push();
      Message.set({
        userId: sender,
        message: message,
        timeSent: time,
        roomId: roomId
      });
      messages.text = null;
    };

    return messages;
  }

  angular.module('blocChat').service('messages', ['$firebaseArray',messages]);
})();
