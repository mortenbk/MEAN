angular.module("app").controller("mvMainCtrl",
    function($scope) {
        $scope.courses = [
            {name: "First course", featured: false, published: new Date()},
            {name: "Second course", featured: true, published: new Date()},
            {name: "Third course", featured: true, published: new Date()},
            {name: "Fourth course", featured: true, published: new Date()},
            {name: "Fifth course", featured: false, published: new Date()},
            {name: "Sixth course", featured: false, published: new Date()},
            {name: "Seventh course", featured: true, published: new Date()},
            {name: "Eighth course", featured: false, published: new Date()},
            {name: "Ninth course", featured: true, published: new Date()},
            {name: "Tenth course", featured: true, published: new Date()},
            {name: "Eleventh course", featured: true, published: new Date()},
            {name: "Twelfth course", featured: false, published: new Date()},
            {name: "Thirteenth course", featured: true, published: new Date()},
        ]
    });
