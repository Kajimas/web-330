/* 
Title: Assignment 5 – Bob’s Automotive Repair Shop
Author: Richard Krasso
Date: 2/5/2023
Description: A PDF that describes how to complete Web 330 Assign_5 
 */

"use strict";


export class ShoppingCart {
  
  //Will be used to record new product entries
  constructor() {
    this.products = [];
  }

  //Keeps track of the number of products selected
  count() {
    return this.products.length;
  }

  //Will allow the user to push new products to the list
  add(product) {
    this.products.push(product);
  }

  //Will be used to add the array's products to a table
  *[Symbol.iterator]() {
    for (let product of this.products) {
      yield product;
    }
  }
}
