'use strict';

/**
 * @ngdoc overview
 * @name labUtilApp
 * @description
 * # labUtilApp
 *
 * Main module of the application.
 */

var routerApp = angular.module('labUtilApp', ['ui.router','app.home','app.about']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
		
});
