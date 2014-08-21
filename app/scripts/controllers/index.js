'use strict';


angular.module('letGoApp')
  .controller('clickCountCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clickcount = Localstorage.getLocalstorage("clickcount");

    $scope.addClickcount = function (){
       $scope.clickcount = Localstorage.getLocalstorage("clickcount");
        // if($scope.clickcount === 0){
        //     $scope.clickcount = 0;
        // }

        Localstorage.setLocalstorage("clickcount", ++$scope.clickcount);
    }

  });
