(function () {
  function userCtrl($cookies,userProfile,$uibModalInstance) {
    var $ctrl = this;
    $ctrl.userProfile = userProfile;

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
      } else {
        return
      }
    };
  }

  angular.module('blocChat').controller('UserCtrl',['$cookies','userProfile','$uibModalInstance',userCtrl])

})();
