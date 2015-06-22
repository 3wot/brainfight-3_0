define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('signupController', ['$scope', '$controller', '$location', 'userService', function ($scope, $controller, $location, userService) {

        $controller('formController', { //Наследуем свойства и методы контроллера формы
            $scope: $scope
        });

        $scope.username = {value: ""};
        $scope.email = {value: ""};
        $scope.password = {value: ""};
        $scope.passwordConfirm = {value: ""};

        $scope.signup = function(){
            $scope.hideError();

            var promise = userService.signup($scope.username.value, $scope.email.value, $scope.password.value);

            promise.then(function(resolve){
                if(resolve.status === 1){ //регистрация успешна
                    $scope.$apply(function() { $location.path("/login"); });
                }else{
                    $scope.showError(resolve.message, resolve.data.fields);
                }
            }, function(reject){
                $scope.showError(reject.message, resolve.fields);
            });
        };

        $scope.usernameIsDuplicate = function(){
            var promise = userService.usernameIsDuplicate($scope.username.value);

            promise.then(function(resolve){
                if(resolve.status === 1){ //такого пользователя еще нет
                    $scope.username.state = "has-success";
                }else{
                    $scope.username.state = "has-error";
                    $scope.username.error = resolve.message;
                    //$scope.showError(resolve.message, resolve.data.fields);
                }
            }, function(reject){
                $scope.showError(reject.message, resolve.fields);
            });
        },

        $scope.emailValidate = function(){

            var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

            if($scope.email.value == ""){
                $scope.email.state = "";
            }else if($scope.email.value != "" && !EMAIL_REGEXP.test($scope.email.value)){
                $scope.email.state = "has-error";
                $scope.email.error = "Введите верный адрес элетронной почты";
            }else{
                var promise = userService.emailIsDuplicate($scope.email.value);

                promise.then(function(resolve){
                    if(resolve.status === 1){ //такого пользователя еще нет
                        $scope.email.state = "has-success";
                    }else{
                        $scope.email.state = "has-error";
                        $scope.email.error = resolve.message;
                        //$scope.showError(resolve.message, resolve.data.fields);
                    }
                }, function(reject){
                    $scope.showError(reject.message, resolve.fields);
                });
            }
        }
    }]);
});