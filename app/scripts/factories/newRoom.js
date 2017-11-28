(function(){
  function newRoom(){
    var newRoom = {};
    newRoom.$value = 'Enter your room name!';
    return newRoom;
  }

  angular
    .module('blocChat')
    .service('newRoom',newRoom);
})();
