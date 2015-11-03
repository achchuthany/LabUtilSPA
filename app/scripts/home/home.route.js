
(function (angular) {
    'use strict';
    var routeConfig = function ($stateProvider) {

        var home = {
            url: '/home',
            templateUrl: '/scripts/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            data: {
            }
        };

        $stateProvider.state('home', home);
    };

    routeConfig.$inject = ['$stateProvider'];

    angular.module('app.home').config(routeConfig);

})(angular);