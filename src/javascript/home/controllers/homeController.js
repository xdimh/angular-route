define(['home/module'],function(webapp){
    webapp.controller('HomeController',['$scope',function($scope){
        $scope.test = 'test';
    }]);
    return webapp;
});