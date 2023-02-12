/*
Title: Assignment 6 – Future Value App
Author: Richard Krasso
Date: 2/12/2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */
/*
Title: bujri-future-value.html (https://github.com/nbujri/web-330/blob/main/week-6/bujri-future-value.html)
Author: Ngi Bujri
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/
/*
Title: gorham-future-value.html (https://github.com/chrisgorham999/web-330/blob/main/week-6/gorham-future-value.html)
Author: Chris Gorham
Date: 2/12/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully.  
*/

"use strict";

import { FinanceCalculator } from "./finance-calculator.js";
import { Validator } from "./validator.js";

//Records the current date
document.getElementById(`today`).innerHTML = new Date().toLocaleDateString(
  `en-US`
);

//Checks if inputs are valid
//If inputs are valid, they are used to calculate a future value
//If an input is not valid, it is returned as an error
document.getElementById(`btnCalculator`).onclick = () => {
  const monthlyPayment = document.getElementById(`txtMonthlyPayment`).value;
  const rate = document.getElementById(`txtYearlyRate`).value;
  const years = document.getElementById(`listNumOfYears`).value;
  let errorLogEl = document.getElementById(`errorLog`);

  const monthlyPaymentValidator = new Validator(
    `Monthly Payment`,
    monthlyPayment
  );

  monthlyPaymentValidator.addRequiredField();
  monthlyPaymentValidator.addRequiredFloatField();
  monthlyPaymentValidator.addFloatMinField(100);

  const rateValidator = new Validator(`Interest Rate`, rate);
  rateValidator.addRequiredField();
  rateValidator.addRequiredFloatField();
  rateValidator.addFloatMaxField(100);

  const errorLog = [];

  if (!monthlyPaymentValidator.validate())
    for (let message of monthlyPaymentValidator.messages)
      errorLog.push(message);

  if (!rateValidator.validate())
    for (let message of rateValidator.messages) errorLog.push(message);

  if (monthlyPaymentValidator.validate() && rateValidator.validate()) {
    errorLogEl = ``;
    const futureValue = FinanceCalculator.calculateFutureValue(
      monthlyPayment,
      rate,
      years
    );
    console.log(FinanceCalculator.convertToCurrency(futureValue));
    document.getElementById(
      `futureValue`
    ).innerHTML = `The future value is ${FinanceCalculator.convertToCurrency(
      futureValue
    )}`;
  } else {
    errorLogEl.innerHTML = ``;
    let errorLogMessage = `<ul>`;
    for (let message of errorLog) errorLogMessage += `<li>${message}</li>`;
    errorLogMessage += `</ul>`;
    document.getElementById(`errorLog`).innerHTML = errorLogMessage;
  }
};
