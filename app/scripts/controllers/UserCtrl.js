(function () {
  function userCtrl($cookies,userProfile,$uibModalInstance,messages) {
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
        $ctrl.messages.user();
      } else {
        return
      }
    };
    $ctrl.LogIn = function(username) {
      var checked = $ctrl.userProfile.findinDatabase(username);
      if (checked === true) {
        $uibModalInstance.close($ctrl.userProfile.loadData($ctrl.userProfile.userData));
        console.log($ctrl.userProfile.userData);
      } else if (checked === false){
        return
      } else {
        return
      }
    };
  }

  angular.module('blocChat').controller('UserCtrl',['$cookies','userProfile','$uibModalInstance','messages',userCtrl])

})();
