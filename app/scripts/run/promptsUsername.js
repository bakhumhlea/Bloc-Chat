(function() {
  function blocChatCookies ($cookies,$uibModal,loginModal,messages,Room) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    var user = this;
    user.loginInitialize = loginModal;
    user.messages = messages;
    user.rooms = Room;

    if (!currentUser || currentUser === '') {
      user.loginInitialize.open();
    } else if (currentUser) {
      user.rooms.list = user.rooms.loaded;
      user.messages.openChatRoom();
    }
  }

  angular.module('blocChat').run(['$cookies','$uibModal','loginModal','messages','Room',blocChatCookies]);
})();
