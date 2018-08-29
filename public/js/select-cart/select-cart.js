"use strict";
const selectCart = {
  templateUrl: `./js/select-cart/select-cart.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getItems().then((response) => {
      vm.itemList = response;
    });
    
    
  }]
};

angular
  .module("cartApp")
  .component("selectCart", selectCart);