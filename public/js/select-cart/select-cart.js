"use strict";
const selectCart = {
  templateUrl: `./js/select-cart/select-cart.html`,
  controller: ["CartService", function (CartService) {
    const vm = this;

    CartService.getAllItems().then((response) => {
      // console.log(vm.itemList)
      vm.itemList = response;
    });

    vm.deleteItems = (id) => {
      CartService.deleteItems(id).then((response) => {
        vm.itemList = response;
      });
    };



    vm.editQty = (id, quantity) => {

      CartService.editQty(id, quantity).then((response) => {
        vm.itemList = response;
      });
    }

  }]
};

angular
  .module("cartApp")
  .component("selectCart", selectCart);