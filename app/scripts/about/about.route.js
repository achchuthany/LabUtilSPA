(function (angular) {
    'use strict';
    var routeConfig = function ($stateProvider) {

        var home = {
            url: '/about',
            templateUrl: 'scripts/about/about.html',
            controller: 'AboutController',
            controllerAs: 'vm',
            data: {
            }
        };

        $stateProvider.state('about', home);
    };

    routeConfig.$inject = ['$stateProvider'];

    angular.module('app.about').config(routeConfig);

})(angular);