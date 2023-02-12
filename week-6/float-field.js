/* 
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6
 */

"use strict";

//
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    return !isNaN(this.field) ? true : false;
  }

  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
