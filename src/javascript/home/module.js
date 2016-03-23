define(['angular','angular-route'], function (angular,ngRoute) {
    return angular.module('webapp',['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/PHPLearn/src/html/home/home.html',
                    controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: '/PHPLearn/src/html/about/about.html',
                    controller: 'HomeController'
                })
                .when('/personal', {
                    templateUrl: '/PHPLearn/src/html/personal/personal.html',
                    controller: 'HomeController'
                });
        }]);
});