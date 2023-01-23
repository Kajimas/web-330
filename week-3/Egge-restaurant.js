/*
Title: Assignment 3 - Restaurant App
Author: Richard Krasso
Date: 1/22/2023
Description: A PDF that describes how to complete Web 330 Assign_3
*/
/*
Title: restaurant.html (https://github.com/nbujri/web-330/tree/main/week-3)
Author: Ngi Bujri
Date: 1/22/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple typographic errors within this document that were preventing my code from running successfully. 
*/

import { Bill, Beverage, Appetizer, MainCourse, Dessert } from "./index.js";

//triggers when the "Place order" button is pressed
document.getElementById(`btnOrder`).onclick = function () {
  
    //assigns the divs and checkboxes to constants
  //I am fairly certian that this violates DRY, but I currently don't know how to improve it
  const BeveragesEl = document.getElementById("beverages");
  const Beverages = BeveragesEl.getElementsByTagName("input");
  const AppetizersEl = document.getElementById("appetizers");
  const Appetizers = AppetizersEl.getElementsByTagName("input");
  const MainCoursesEl = document.getElementById("main-courses");
  const MainCourses = MainCoursesEl.getElementsByTagName("input");
  const DessertsEl = document.getElementById("desserts");
  const Desserts = DessertsEl.getElementsByTagName("input");

  //creates a new instance of bill
  const bill = new Bill();

  //uses loops to add up the values of the selected checkboxes
  //I am also fairly certain that this violates DRY
  for (let beverage of Beverages) {
    if (beverage.checked) {
      bill.addBeverage(new Beverage(beverage.name, beverage.value));
    }
  }
  for (let appetizer of Appetizers) {
    if (appetizer.checked) {
      bill.addAppetizer(new Appetizer(appetizer.name, appetizer.value));
    }
  }
  for (let mainCourse of MainCourses) {
    if (mainCourse.checked) {
      bill.addMainCourse(new MainCourse(mainCourse.name, mainCourse.value));
    }
  }
  for (let dessert of Desserts) {
    if (dessert.checked) {
      bill.addDessert(new Dessert(dessert.name, dessert.value));
    }
  }

  // returns the total value in a string.
  document.getElementById(
    `order-total`
  ).innerHTML = `Your order total is $${bill.getTotal()}`;
};
