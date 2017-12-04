(function() {
  function userProfile ($firebaseArray,$cookies) {
    var user = {};
    user.username;
    user.first;
    user.last;
    user.avartar;
    //var userList = firebase.database().ref().child("blocChatUserProfile");
    //var currentUser = $firebaseArray(ref);
    var logedInUser = firebase.database().ref().child('currentUser');
    user.addUser = function(username,first,last,url) {
      $cookies.put('blocChatCurrentUser',username);
      logedInUser.push().set({
            username: username,
            firstname: first,
            lastname: last,
            avartar: url || 'https://i.pinimg.com/736x/37/20/55/3720557d019ee3b161b2ffd1648ac970--david-beckham.jpg'
      });
      var test = $firebaseArray(logedInUser);
    };
    user.logOut = function() {
      $cookies.remove('blocChatCurrentUser');
      logedInUser.remove();
    };

    user.currentUserName = function() {
      var currentUserInfo = null;
      var nameDisplay = 'Bloc Name';
      var currentUserName = logedInUser.orderByChild('username').on('child_added', function(userData) {
        currentUserInfo = userData.val();
        nameDisplay = currentUserInfo.username;
      });
      return currentUserInfo;
    };

    return user;
  }

  angular.module('blocChat').factory('userProfile',['$firebaseArray','$cookies', userProfile]);
})();
