(function(){
  function newRoom(){
    var newRoom = {};
    newRoom.$value = 'Room name';
    return newRoom;
  }

  angular
    .module('blocChat')
    .factory('newRoom',newRoom);
})();
