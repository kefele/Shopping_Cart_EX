"use strict";

angular
 .module("cartApp")
 .config(($routeProvider) => {
    $routeProvider
    .when("/select-item", {
        template: "<select-item></select-item>"
      })

 });