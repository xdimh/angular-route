define(['require',
    'angular',
    'angular-route',
    'jquery',
    'introduction/introductionapp'
], function(require, angular) {
    'use strict';
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['introductionapp']);
    });
});
