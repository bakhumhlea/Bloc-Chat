(function () {
  function userCtrl($cookies,userProfile,$uibModalInstance,Room,messages) {
    var $ctrl = this;
    $ctrl.userProfile = userProfile;
    $ctrl.messages = messages;

    $ctrl.valid = true;
    $ctrl.required = function() {
      var username = $ctrl.userProfile.username;
      var first = $ctrl.userProfile.first;
      var last = $ctrl.userProfile.last;
      if (username!=='' && first!=='' && last!=='') {
        return false;
      } else {
        return true;
      }
    };

    $ctrl.ok = function (username,first,last,url) {
      if (username && first && last) {
        $uibModalInstance.close($ctrl.userProfile.addUser(username,first,last,url));
        $ctrl.userProfile.currentUserName();
        $ctrl.rooms.list = $ctrl.rooms.loaded;
        $ctrl.messages.user();
        $ctrl.messages.openChatRoom();
      } else {
        return
      }
    };
  }

  angular.module('blocChat').controller('UserCtrl',['$cookies','userProfile','$uibModalInstance','Room','messages',userCtrl])

})();
