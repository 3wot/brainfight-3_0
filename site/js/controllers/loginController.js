define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('loginController', ['$scope', '$controller', '$location', 'userService', function ($scope, $controller, $location, userService) {

        $controller('formController', { //Наследуем свойства и методы контроллера формы
            $scope: $scope
        });

        $scope.username = {value: ""};
        $scope.password = {value: ""};

        $scope.login = function(){
            $scope.hideError();

            var promise = userService.login($scope.username.value, $scope.password.value);

            promise.then(function(resolve){
                if(resolve.status === 1){ //авторизация прошла успешно
                    $scope.$apply(function() { $location.path("/start"); });
                }else{
                    $scope.showError(resolve.message, resolve.data.fields);
                }
            }, function(reject){
                $scope.showError(reject.message, resolve.fields);
            });
        }
    }]);
});