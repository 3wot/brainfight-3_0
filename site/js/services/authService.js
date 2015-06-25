define(['./module'], function (services) {
    'use strict';

    services.factory('authService',
        ['base64', '$http', '$cookies', '$rootScope',
            function (Base64, $http, $cookies, $rootScope) {
                var service = {};

                service.Login = function (username, password, callback) {

                    $http.post('/api/authenticate', { username: username, password: password })
                        .success(function (response) {
                            callback(response);
                        });

                };

                service.SetCredentials = function (username, password) {
                    var authdata = Base64.encode(username + ':' + password);

                    $rootScope.globals = {
                        currentUser: {
                            username: username,
                            authdata: authdata
                        }
                    };

                    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                    $cookies.put('globals', $rootScope.globals);
                };

                service.ClearCredentials = function () {
                    $rootScope.globals = {};
                    $cookies.remove('globals');
                    $http.defaults.headers.common.Authorization = 'Basic ';
                };

                return service;
            }])

});