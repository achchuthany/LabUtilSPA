'use strict';

/**
 * @ngdoc function
 * @name labUtilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labUtilApp
 */
angular.module('app.about')
  .controller('AboutController', function () {
		var vm = this;
	
    vm.awesomeThings = [
      'about',
      'AngularJS',
      'Karma'
    ];
  });
