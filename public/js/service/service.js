"use strict";

function CartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/items",
      method: "GET"
    }).then((response) => {
      vm.itemsList = response.data;
      return vm.itemsList;
    });

  };

  vm.addItem = (newItem) => {
    return $http({
      url: "items/add",
      method: "POST",
      data: {
        product: newItem.product,
        price: newItem.price,
        quantity: newItem.quantity
      }

    }).then((response) => {
      vm.itemsList = response.data;
      return vm.itemsList;
    });
  }

  vm.deleteItems = (id) => {
    return $http({
      url: "/items/del" + id,
      method: "DELETE"
    }).then((response) => {
      vm.itemsList = response.data;
      return vm.itemsList;
    });

  };

  vm.editQty = (id, quantity) => {
    return $http({
      url: "/items/update/" + id,
      method: "PUT",
      data: { quantity }
    }).then((response) => {
      vm.itemsList = response.data;
      return vm.itemsList;
    })
  };

};

angular
  .module("cartApp")
  .service("CartService", CartService);