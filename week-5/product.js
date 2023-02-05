/* 
Title: Assignment 5 – Bob’s Automotive Repair Shop
Author: Richard Krasso
Date: 2/5/2023
Description: A PDF that describes how to complete Web 330 Assign_5 
 */

"use strict"

// Exports a class with a name, price and id
// The name and price are received as inputs, but the ID is a random number
export class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2)
    }
}