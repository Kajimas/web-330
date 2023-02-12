/* 
Title: Assignment 6 – Future Value App
Author: Richard Krasso
Date: 2/12/2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */
/*
Title: validator.js (https://github.com/nbujri/web-330/blob/main/week-6/validator.js)
Author: Ngi Bujri
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/
/*
Title: validator.js (https://github.com/chrisgorham999/web-330/blob/main/week-6/validator.js)
Author: Chris Gorham
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/

"use strict";

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

//Used to detect whether an input fits its criteria
//If a input does not fit its criteria, a message is pushed 
export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  validate() {
    for (let item of this.validators) {
      if (item.validate() === false) {
        this.messages.push(item.getMessage());
        return false;
      }
    }
    return true;
  }
}
