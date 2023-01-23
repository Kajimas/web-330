/*
Title: Assignment 3 - Restaurant App
Author: Richard Krasso
Date: 1/22/2023
Description: A PDF that describes how to complete Web 330 Assign_3
*/
/*
Title: bill.js (https://github.com/nbujri/web-330/tree/main/week-3)
Author: Ngi Bujri
Date: 1/22/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple typographic errors within this document that were preventing my code from running successfully. 
*/

export class Bill {
  // Empty arrays to be populated latter
  _beverages = [];
  _appetizers = [];
  _mainCourses = [];
  _desserts = [];

  //Functions that push their value to their corresponding array
  //It may be possible to refactor this
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  getTotal() {
    //the initial total of all selected values
    let total = 0;

    //adds the sum of a product type to the total value
    //can probably be refactored
    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });
    let appetizerTotal = this._beverages.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });
    let mainCourseTotal = this._beverages.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });
    let dessertTotal = this._beverages.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    //returns the total value with a precisions of two decimal places
    return total.toFixed(2);
  }
}
