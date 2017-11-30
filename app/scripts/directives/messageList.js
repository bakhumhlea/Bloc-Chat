(function(){
  function messageList() {
    return {
      restrict: 'E',
      templateUrl: '/templates/messageList.html',
      replace: true,
    };
  }

  angular
    .module('blocChat')
    .directive('messageList', messageList);
}());
