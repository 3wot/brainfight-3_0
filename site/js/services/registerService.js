define(['./module'], function (services) {
    'use strict';

    services.factory('registerService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.register = function (data, callback) {

                    //data = {username, password, email, ...}
                    $http.post('/service/user/register', data)
                        .success(function (response) {
                            callback(response);
                        });
                };

                return service;
            }]);
});