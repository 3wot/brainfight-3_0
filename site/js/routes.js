define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/default.html'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        });
        $routeProvider.when('/start', {
            templateUrl: 'views/start.html',
            controller: 'startController'
        });
        $routeProvider.when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        });
        $routeProvider.otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
    }]);
});