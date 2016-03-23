/**
 * common Main test
 * @version 1.0
 * @author hzzhuzhenyu(hzzhuzhenyu@corp.netease.com)
 * Created by hzzhuzhenyu on 2016/3/23.
 */

requirejs.config({
    baseUrl: '/PHPLearn/src/javascript/',
    paths: {
        'jquery': '3rd/jquery/dist/jquery.min',
        'angular': '3rd/angular/angular.min',
        'domReady': '3rd/requirejs/domReady',
        'angular-route': '3rd/angular-route/angular-route.min'
    },
    shim:{
        "angular":{
            deps:['jquery'],
            exports:"angular"
        },
        "angular-route":{
            deps:['angular']
        }
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});
