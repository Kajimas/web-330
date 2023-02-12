/* 
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */

"use strict";

//
export class RequiredField {
  constructor(name, field) {
    this.name;
    this.field;
  }

    validate() {
    return Boolean(this.field)
  }

  getMessage() {
    return `${this.name} is a required field.`
  }
}
