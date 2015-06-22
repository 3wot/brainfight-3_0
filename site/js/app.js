define([
    'angular',
    'route',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'app.services',
        'ngRoute'
    ]).run(['$location', 'userService', function($location, userService){
    }]);
});