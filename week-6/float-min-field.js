/* 
Title: Assignment 6 – Future Value App
Author: Richard Krasso
Date: 2/12/2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */
/*
Title: float-min-field.js (https://github.com/nbujri/web-330/blob/main/week-6/float-min-field.js)
Author: Ngi Bujri
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/
/*
Title: float-min-field.js (https://github.com/chrisgorham999/web-330/blob/main/week-6/float-min-field.js)
Author: Chris Gorham
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/

"use strict";

//Defines the criteria for FloatMinField, its validation, and its error message
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    return parseFloat(this.field) > this.min ? true : false;
  }

  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
