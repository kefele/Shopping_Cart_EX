"use strict";

const express = require("express");
const commands = express.Router();
const cartItems = require("../cart/cart");

commands.get("/items", (req, res) => {
    console.log("get all");
    res.send(cartItems);
} );

module.exports = commands;