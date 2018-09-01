"use strict";

const express = require("express");
const commands = express.Router();
const pool = require("../pg-connection-pool.js");



commands.get("/items", (req, res) => {
  pool.query("select * from ShoppingCart").then((result) => {
    res.send(result.rows);
  });

});

commands.post("/items/add", (req, res) => {
  pool.query("Insert Into ShoppingCart(product, price, quantity) Values($1::text, $2::int, $3::int)",
    [req.body.product, req.body.price, req.body.quantity]).then(() => {
      pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
      });
    });
});


commands.put('/items/update/:id', (req, res) => {
  console.log('PUT request with ID: ' + req.params.id);
  let Qty = parseInt(req.body.quantity);
  let ID = parseInt(req.params.id);
  pool.query('update ShoppingCart set quantity=$1::int where id=$2::int', [Qty, ID]).then(() => {
    pool.query('select * from ShoppingCart;').then((results) => {
      res.send(results.rows);
    });
  });
});


commands.delete("/items/del:id", (req, res) => {
  pool.query("Delete From ShoppingCart Where id=$1::int", [parseInt(req.params.id)]).then(() => {
    pool.query("Select * From ShoppingCart").then((results) => {
      console.log(results.rows);
      res.send(results.rows);
    });
  });
});

module.exports = commands;