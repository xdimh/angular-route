var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'HomeController'
        })
        .when('/personal', {
            templateUrl: 'views/personal/personal.html',
            controller: 'HomeController'
        });
}]);

app.controller('HomeController',['$scope',function($scope){
	$scope.test = 'ttest';
}]);