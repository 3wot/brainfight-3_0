define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('loginController', ['$scope', '$controller', '$location', 'authService', function ($scope, $controller, $location, authService) {

        $controller('formController', { //Наследуем свойства и методы контроллера формы
            $scope: $scope
        });

        $scope.username = {value: ""};
        $scope.password = {value: ""};

        $scope.login = function(){
            $scope.hideError();

            authService.login($scope.username.value, $scope.password.value, function(response){
                if(response.status === 1){ //авторизация прошла успешно
                    $scope.$apply(function() { $location.path("/start"); });
                }else{
                    $scope.showError(response.message, response.data.fields);
                }
            });
        }
    }]);
});