/* 
Title: Assignment 6 – Future Value App
Author: Richard Krasso
Date: 2/12/2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */
/*
Title: required-field.js (https://github.com/nbujri/web-330/blob/main/week-6/required-field.js)
Author: Ngi Bujri
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/
/*
Title: required-field.js (https://github.com/chrisgorham999/web-330/blob/main/week-6/required-field.js)
Author: Chris Gorham
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/

"use strict";

//Defines the criteria for RequiredField, its validation, and its error message
export class RequiredField {
  constructor(name, field) {
    this.name;
    this.field;
  }

    validate() {
    return Boolean(this.field !== "")
  }

  getMessage() {
    return `${this.name} is a required field.`
  }
}
