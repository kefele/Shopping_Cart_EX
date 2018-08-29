"use strict";

function CartService($http){

    vm.getItems = () => {
        return $http({
          url: "/items",
          method: "GET"
        }).then((response) => {
          vm.itemsList = response.data;
          return vm.itemsList;
        });

}

}

angular
  .module("cartApp")
  .service("CartService", CartService);