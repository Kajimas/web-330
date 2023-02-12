/* 
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6
 */

"use strict";

//
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
