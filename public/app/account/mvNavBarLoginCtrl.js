angular.module("app").controller("mvNavBarLoginCtrl", function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function(userName, password) {
        console.log("mvNavBarLoginCtrl: user - " + userName + " : " + password);
        mvAuth.authenticateUser(userName, password).then(function(success) {
            console.log("mvNavBarLoginCtrl: user - " + userName + " : " + password + " is logged in status: " + success);
            if(success) {
               mvNotifier.notify("You have Successfully signed in");
            } else {
               mvNotifier.notify("Invalid Username/Password combination");
            }
        });

    }

    $scope.signout = function() {
        mvAuth.logoutUser().then(function() {
            $scope.userName = "";
            $scope.password = "";
            mvNotifier.notify("You have successfully signed out!");
            $location.path("/");
        });
    }
});