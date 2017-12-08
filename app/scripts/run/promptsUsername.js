(function() {
  function blocChatCookies ($cookies,$uibModal,loginModal,messages) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    var user = this;
    user.loginInitialize = loginModal;
    user.messages = messages;

    if (!currentUser || currentUser === '') {
      user.loginInitialize.open();
    } else if (currentUser) {
      user.messages.openChatRoom();
    }
  }

  angular.module('blocChat').run(['$cookies','$uibModal','loginModal','messages',blocChatCookies]);
})();
