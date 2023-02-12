/* 
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6
 */

"use strict";

//
export class FloatMaxField {
  constructor(name, field, max) {
    this.name;
    this.field;
    this.max;
  }

  validate() {
    return parseFloat(this.field) < this.max ? true : false;
  }

  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
