angular.module("app", ["ngResource", "ngRoute"]);

angular.module("app").config(function($routeProvider, $locationProvider) {

    var routeRoleChecks = {
        admin: {
            auth: function(mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute("admin");
            }
        },
        user: {
            auth: function(mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    }

    $locationProvider.html5Mode(true);

    $routeProvider.when("/", {
        templateUrl: "/partials/main/main",
        controller: "mvMainCtrl"

    });

    $routeProvider.when("/admin/users", {
        templateUrl: "/partials/admin/user-list",
        controller: "mvUserListCtrl",
        resolve: routeRoleChecks.admin
    });

    $routeProvider.when("/signup", {
        templateUrl: "/partials/account/signup",
        controller: "mvSignupCtrl"

    });

    $routeProvider.when("/profile", {
        templateUrl: "/partials/account/profile",
        controller: "mvProfileCtrl",
        resolve: routeRoleChecks.user

    });


    $routeProvider.when("/courses", {
        templateUrl: "/partials/courses/course-list",
        controller: "mvCoursesListCtrl"

    });

    $routeProvider.when("/courses/:id", {
        templateUrl: "/partials/courses/course-details",
        controller: "mvCourseDetailCtrl"

    });
});

angular.module("app").run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(evt, current, previous, rejection) {
        if(rejection === "not authorized") {
            $location.path("/");
        }
    });
});
