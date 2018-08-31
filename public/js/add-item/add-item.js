"use strict";
const addCart = {
  templateUrl: `./js/add-item/add-item.html`,
  // template:`hi`,

  controller: ["CartService", function(CartService) {
    const vm = this;
    vm.addItem = (newItem)=>{
    CartService.addItem(newItem).then((response)=>{
        vm.itemsList=response;
    });
};
  }]
};

angular
  .module("cartApp")
  .component("addCart", addCart);


  