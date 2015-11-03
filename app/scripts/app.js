// app.js
"use strict";
var routerApp = angular.module('LabUtilSPA', ['ui.router','app.home']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
              
});