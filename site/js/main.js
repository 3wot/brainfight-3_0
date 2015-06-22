require.config({
    baseUrl: "/js",
    paths: {
        "domReady": "vendor/domReady",
        "jquery": "vendor/jquery.min",
        "bootstrap": "vendor/bootstrap/js/bootstrap.min",
        "angular": "vendor/angular.min",
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
        "route": {
            "deps": ['angular']
        }
    },
    deps: ['./boot']
});