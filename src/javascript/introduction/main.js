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
    deps:['./introduction/bootstrap'],
    urlArgs: "bust=" +  (new Date()).getTime()
});
