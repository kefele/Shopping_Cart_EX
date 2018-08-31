"use strict";

angular
 .module("cartApp")
 .config(($routeProvider) => {
    $routeProvider
    .when("/select-cart", {
        template: "<select-cart></select-cart>"
      })
    .when("/add-item", {
        template: "<add-cart></add-cart>"
      })

 });