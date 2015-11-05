'use strict';

/**
 * @ngdoc function
 * @name labUtilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labUtilApp
 */
angular.module('app.home')
  .controller('HomeController', function () {
	 var vm = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
