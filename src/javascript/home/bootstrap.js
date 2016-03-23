define(['require',
    'angular',
    'angular-route',
    'jquery',
    'home/homeapp'
], function(require, angular) {
    'use strict';
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['webapp']);
    });
});
