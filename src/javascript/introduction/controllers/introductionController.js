define(['introduction/module'],function(webapp){
    webapp.controller('IntroductionController',['$scope',function($scope){
        $scope.test = 'test';
    }]);
    return webapp;
});