define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('formController', ['$scope', function ($scope) {
        $scope.hasError = false;
        $scope.errorText = "";

        $scope.showError = function(msg, fields){
            $scope.hasError = true;
            $scope.errorText = msg;

            fields.forEach(function(value){
                $scope[value].state = "has-error";
            });
        }

        $scope.hideError = function(){
            $scope.hasError = false;
            $scope.errorText = "";
        }

    }]);
});