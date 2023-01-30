/*
Title: Assignment 4 - Restaurant App
Author: Richard Krasso
Date: 1/29/2023
Description: A PDF that describes how to complete Web 330 Assign_4
*/

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
  static data = [
    new FoodModel(1007, `Egg`, 78),
    new FoodModel(1008, `Apple`, 95),
    new FoodModel(1009, `Hamburger`, 354),
    new FoodModel(1010, `Fries`, 400),
    new FoodModel(1011, `Banana`, 105),
    new FoodModel(1012, `Soda`, 150),
  ];
  static find(str) {
    return this.data.filter((x) => x.name.toLowerCase().includes(str));
  }
}