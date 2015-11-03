(function (angular) {
    'use strict';

    var homeController = function ($rootScope, $stateParams, $state) {
			 var vm = this;
				vm.testMessage = "howwwwwwwwwww areeeeeeeeeee youuuuuuuuuuuuuu?";
			 };


    homeController.$inject = ['$rootScope', '$stateParams', '$state'];
	
    angular.module('app.home')
      .controller('HomeController', homeController);

})(angular);
    