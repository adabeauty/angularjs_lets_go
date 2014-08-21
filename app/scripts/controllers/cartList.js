'use strict';

angular.module('letGoApp')
  .controller('CartListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.drinks = getGroup('drinks');
    $scope.snacks = getGroup('snacks');
    $scope.nuts = getGroup('nuts');
    // $scope.categories = [{class:'饮料类',$scope.drinks}, {class:'干果类', $scope.nutks}, {class:'零食类', $scope.snacks}];
    // $scope.cartItems = [$scope.drinks, $scope.nutks, $scope.snacks];

    // $scope.downCartItemNum = function (cartItem,num){
    //     var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    //     for(var i=0; i<boughtGoods.length; i++){
    //         if(boughtGoods[i].item.name === cartItem.name){
    //             boughtGoods[i].item.num++;
    //             num++;
    //         }
    //
    //     }
    //     Localstorage.setLocalstorage("boughtGoods", boughtGoods);
    // }

  });

function getGroup(group){
    var drinks = [];
    var nuts = [];
    var snacks = [];

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){

        if(boughtGoods[i].item.category === "饮料类"){
            drinks.push(boughtGoods[i]);
        }

        if(boughtGoods[i].item.category === "干果类"){
            nuts.push(boughtGoods[i]);
        }
        if(boughtGoods[i].item.category === "零食类"){
            snacks.push(boughtGoods[i]);
        }
    }

    Localstorage.setLocalstorage("drinks", drinks);
    Localstorage.setLocalstorage("snacks", snacks);
    Localstorage.setLocalstorage("nuts", nuts);

    return returngroup(group, drinks, nuts, snacks);
}

function returngroup(group, drinks, nuts, snacks){
    if(group === 'drinks'){
        return drinks;
    }
    if(group === 'nuts'){
        return nuts;
    }
    if(group === 'snacks'){
        return snacks;
    }
}
