require.config({
    baseUrl: "/js",
    paths: {
        "domReady": "vendor/domReady",
        "jquery": "vendor/jquery.min",
        "bootstrap": "vendor/bootstrap/js/bootstrap.min",
        "angular": "vendor/angular.min",
        "angular-cookies": "vendor/angular-cookies.min",
        "route": "vendor/angular-route.min"
    },
    shim: {
        "bootstrap": {
            "deps": ['jquery'],
            exports: 'bootstrap'
        },
        "angular": {
            exports: 'angular'
        },
        "angular-cookies":{
            "deps": ['angular'],
            exports: 'angular-cookies'
        },
        "route": {
            "deps": ['angular']
        }
    },
    deps: ['./boot']
});