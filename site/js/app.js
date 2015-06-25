define([
    'angular',
    'angular-cookies',
    'route',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'app.services',
        'ngRoute',
        'ngCookies'
    ]).run(['$rootScope', '$location', '$cookies', '$http', function($rootScope, $location, $cookies, $http){
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && $location.path() !== '/signup' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
});