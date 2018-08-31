"use strict";

const express = require("express");
const commands = express.Router();
const pool = require("../pg-connection-pool.js");
// const cartItems = require("../cart/cart");


commands.get("/items", (req, res) => {
    pool.query("select * from ShoppingCart").then((result)=>{
        res.send(result.rows);
    });
    // console.log("get all");
    // res.send(cartItems);
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


  commands.put("/items/update/:id", (req, res) => {
    pool.query("Update ShoppingCart set quantity=$1::int Where id=$2::int", [req.body.quantity, parseInt(req.params.id)]).then(() => {
      pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
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


// commands.post("/items", (req,res)=>{
//     console.log(req.body);
// });

// commands.put("/items/:id", (req,res) =>{
//     let count = 0;
//     console.log(req.params.id);
//     console.log(req.body);
// });

// commands.delete("/items/:id", (req,res)=>{
//     console.log(req.params.id)
// });


module.exports = commands;