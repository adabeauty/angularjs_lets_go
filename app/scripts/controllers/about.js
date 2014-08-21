'use strict';

/**
 * @ngdoc function
 * @name letGoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the letGoApp
 */
angular.module('letGoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
