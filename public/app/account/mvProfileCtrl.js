angular.module("app").controller("mvProfileCtrl", function($scope, mvAuth, mvIdentity, mvNotifier) {
    console.log("userName : " + mvIdentity.currentUser.userName);
    $scope.userName = mvIdentity.currentUser.userName;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function() {
        var newUserData = {
            userName: $scope.userName,
            firstName: $scope.fname,
            lastName: $scope.lname
        }
        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        mvAuth.updateCurrentUser(newUserData).then(
            function() {
            mvNotifier.notify("Your user account has been updated");
                console.log("Success");
        }, function(reason) {
            mvNotifier.error(reason);
        })
    }
});