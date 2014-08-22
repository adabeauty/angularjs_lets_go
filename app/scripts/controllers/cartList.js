'use strict';

angular.module('letGoApp')
  .controller('CartListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    getGroup();
    $scope.drinks = Localstorage.getLocalstorage("drinks");
    $scope.snacks = Localstorage.getLocalstorage("snacks");
    $scope.nuts = Localstorage.getLocalstorage("nuts");
    // $scope.drinks = getGroup('drinks');
    // $scope.snacks = getGroup('snacks');
    // $scope.nuts = getGroup('nuts');
    $scope.cartGoods = [$scope.drinks, $scope.snacks, $scope.nuts];
    $scope.totalMoney = getTotalMoney();
    $scope.totalNumber  = Localstorage.getLocalstorage("clickcount");
    // $scope.totalNumber  = getTotalNumber();
    // $scope.categories = [{class:'饮料类',$scope.drinks}, {class:'干果类', $scope.nutks}, {class:'零食类', $scope.snacks}];
    // $scope.cartItems = [$scope.drinks, $scope.nutks, $scope.snacks];

    $scope.upCartItemNum = function (cartItem){
        var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
        for(var i=0; i<boughtGoods.length; i++){
            if(boughtGoods[i].item.name === cartItem.name){
                boughtGoods[i].item.num++;
                // num++;
            }

        }
        Localstorage.setLocalstorage("boughtGoods", boughtGoods);
        $scope.drinks = Localstorage.getLocalstorage("drinks");
        // $scope.drinks.num ++;
    }


  });

function getGroup(){
    var drink = [];
    var nut = [];
    var snack = [];

    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    for(var i=0; i<boughtGoods.length; i++){

        if(boughtGoods[i].item.category === "饮料类"){
            drink.push(boughtGoods[i]);
        }

        if(boughtGoods[i].item.category === "干果类"){
            nut.push(boughtGoods[i]);
        }
        if(boughtGoods[i].item.category === "零食类"){
            snack.push(boughtGoods[i]);
        }
    }
    var drinks = new CartList('饮料类', drink);
    var snacks = new CartList('零食类', snack);
    var nuts = new CartList('干果类', nut);

    Localstorage.setLocalstorage("drinks", drinks);
    console.log(drinks);
    Localstorage.setLocalstorage("snacks",snacks);
    Localstorage.setLocalstorage("nuts", nuts);

    // return returngroup(group, drinks, nuts, snacks);
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

function getTotalMoney(){

  var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
  var totalMoney = 0;

  for(var i=0; i<boughtGoods.length; i++){
      totalMoney += boughtGoods[i].num * boughtGoods[i].item.price;
  }
  return totalMoney;
}
