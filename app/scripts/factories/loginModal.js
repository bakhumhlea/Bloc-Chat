(function() {
  function loginModal($uibModal) {
    var loginModal = {};
    loginModal.animationsEnabled = true;
    loginModal.open = function() {
      $uibModal.open({
      animation: loginModal.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: false,
      templateUrl: '/templates/usernameModal.html',
      controller: 'UserCtrl',
      controllerAs: 'user',
      size: 'sm',
      resolve: {
          item: function () {
            return '';
          }
        }
      });
    };
    return loginModal;
  }

  angular.module('blocChat').factory('loginModal',['$uibModal',loginModal]);
})();
