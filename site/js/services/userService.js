define(['./module'], function (services) {
    'use strict';
    services.factory('userService', ['$http', '$q', '$location', 'messageService', function ($http, $q, $location, messageService) {
        return {
            userService: this,
            authorized: false,
            username: "",
            authToken: "",

            checkAuth: function(){
                if(!this.authorized){
                    $location.path('/login');
                }
            },

            authFromToken: function(){
                $cookies
            },

            login: function(username, password){

                var deferred = $q.defer();

                $http.get("/service/user/login/" + username + "/" + password)
                    .success(function(res){
                        res = messageService.validate(res);
                        if(res.status === 1 && 'authToken' in res.data){
                            userService.authToken = res.data.authToken;
                            userService.authorized = true;
                        }
                        deferred.resolve(res);
                    })
                    .error(function(){
                        deferred.reject(messageService.defaultError());
                    });

                return deferred.promise;

            },

            signup: function(username, email, password){

                var deferred = $q.defer();

                $http.post("/service/user/signup", {username: username, email: email, password: password})
                    .success(function(res){
                        res = messageService.validate(res);
                        deferred.resolve(res);
                    })
                    .error(function(){
                        deferred.reject(messageService.defaultError());
                    });

                return deferred.promise;
            },

            usernameIsDuplicate: function(username){

                var deferred = $q.defer();

                $http.get("/service/user/usernameIsDuplicate/" + username)
                    .success(function(res){
                        res = messageService.validate(res);
                        deferred.resolve(res);
                    })
                    .error(function(){
                        deferred.reject(messageService.defaultError());
                    });

                return deferred.promise;
            },

            emailIsDuplicate: function(email){

                var deferred = $q.defer();

                $http.get("/service/user/emailIsDuplicate/" + email)
                    .success(function(res){
                        res = messageService.validate(res);
                        deferred.resolve(res);
                    })
                    .error(function(){
                        deferred.reject(messageService.defaultError());
                    });

                return deferred.promise;
            }
        }
    }]);
});