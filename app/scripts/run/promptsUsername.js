(function() {
  function blocChatCookies ($cookies,$uibModal,loginModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    var user = this;
    user.loginInitialize = loginModal;

    if (!currentUser || currentUser === '') {
      user.loginInitialize.open();
    }
  }

  angular.module('blocChat').run(['$cookies','$uibModal','loginModal',blocChatCookies]);
})();
