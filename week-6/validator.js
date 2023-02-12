/* 
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6
 */

"use strict";

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  addRequiredField() {
    console.log(this.name)
    console.log(this.field)
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    console.log(this.name)
    console.log(this.field)
    console.log(min)
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  validate() {
    for (let item of this.validators) {
      //may need to change
    //   console.log(item.validate())
     if (!item.validate()) this.messages.push(item.getMessage())
      return item.validate()
    }
  }
}
