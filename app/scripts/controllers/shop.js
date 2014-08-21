'use strict';

angular.module('letGoApp')
  .controller('ShopCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allItems = loadItems();
    $scope.add_cart_num = function(item){

        $scope.$parent.addClickcount();

        var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
        if(boughtGoods === 0){
            boughtGoods = [];
        }
        var boughtGood = goodsHasExist(item.name, boughtGoods);
        if(boughtGood){
            boughtGood.num++;
        }else{
            boughtGoods.push(new BoughtItem(item,1));
        }

        Localstorage.setLocalstorage("boughtGoods", boughtGoods);
      }

  });


function loadItems(){
    var allItems = [
              new Item('饮料类','可口可乐', '3.00', '瓶'),
              new Item('饮料类','雪碧', '3.00', '瓶'),
              new Item('饮料类','橙汁', '3.50', '瓶'),
              new Item('干果类', '腰果', '15.00', '斤'),
              new Item('干果类', '开心果', '20.50', '斤'),
              new Item('零食类', '上好佳', '4.50', '袋'),
              new Item('零食类', '可比克', '3.50', '袋')
            ];
     Localstorage.setLocalstorage('allItems', allItems);
    return allItems;
}

function goodsHasExist(name,boughtGoods){
    var boughtGood;
    if(boughtGoods){
        for(var i=0; i<boughtGoods.length; i++){
            if(name === boughtGoods[i].item.name){
                boughtGood = boughtGoods[i];
                break;
            }
        }
    }else{
        boughtGood=false;
    }
    return boughtGood;
}
