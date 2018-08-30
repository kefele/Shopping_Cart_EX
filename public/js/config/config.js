"use strict";

angular
 .module("cartApp")
 .config(($routeProvider) => {
    $routeProvider
    .when("/select-cart", {
        template: "<select-cart></select-cart>"
      })

 });