/*
Title: 
Author: Richard Krasso
Date: //2023
Description: A PDF that describes how to complete Web 330 Assign_6 
 */

"use strict";

import { FinanceCalculator } from "./finance-calculator.js";
import { Validator } from "./validator.js";

document.getElementById(`today`).innerHTML = new Date().toLocaleDateString(
  `en-US`
);

document.getElementById(`btnCalculator`).onclick = () => {
  const monthlyPayment = document.getElementById(`txtMonthlyPayment`).value;
  const rate = document.getElementById(`txtYearlyRate`).value;
  const years = document.getElementById(`listNumOfYears`).value;
  const errorLogEl = document.getElementById(`errorLog`);

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

  //may cause error
  if (!monthlyPaymentValidator.validate())
    for (let message of monthlyPaymentValidator.messages)
      errorLog.push(message);

  if (!monthlyPaymentValidator.validate())
    for (let message of rateValidator.messages) errorLog.push(message);


    console.log(!monthlyPaymentValidator.validate())
    console.log(!rateValidator.validate())
  if (monthlyPaymentValidator.validate() && rateValidator.validate()) {
    errorLogEl = ``;
    const futureValue = FinanceCalculator.calculateFutureValue(
      monthlyPayment,
      rate,
      years
    );
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
