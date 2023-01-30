/*
Title: Assignment 4 - Restaurant App
Author: Richard Krasso
Date: 1/29/2023
Description: A PDF that describes how to complete Web 330 Assign_4
*/
/*
Title: bujri-calorie.html (https://github.com/nbujri/web-330/blob/main/week-4/bujri-calorie.html)
Author: Ngi Bujri
Date: 1/29/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully. 
*/


import { CalorieConverter } from "./calorie-converter.js";

// consts that will be used to simplify further code
const txtFoodItemEl = document.getElementById(`txtFoodItem`);
const searchClick = document.getElementById("btnSearch");
const foods = CalorieConverter.find(txtFoodItemEl.value.toLowerCase());

// the beginng of the table
let tableData = `<table class="table"><tr><th>Name</th><th>Calories</th></tr>`;

// allows searches via a the button div
searchClick.addEventListener("click", search);

//submits surch via the "Enter" key
txtFoodItemEl.addEventListener(`keyup`, (event) => {
    if (event.code == `Enter`) search()
});

//formats the the table data
for (let food of foods) {
    tableData += `<tr class="table-hover"><td>${food.name}</td><td>${food.calories}</td></tr>`;
  }

//two more constants that will be used latter
const searchResults = document.getElementById("searchResults");
const foodListEl = document.getElementById("foodList");
    
// a function used to apply the same seach conditions for both the click and keyup event
     function search() {
       const txtFoodItem = txtFoodItemEl.value.toLowerCase();
       const foods = CalorieConverter.find(txtFoodItem);
       let tableData = `<table class="table"><tr><th>Name</th><th>Calories</th></tr>`;
       for (let food of foods) {
           tableData += `<tr class="table-hover"><td>${food.name}</td><td>${food.calories}</td></tr>`;
        }
        tableData += `</table>`;
        searchResults.innerHTML = tableData;
    }
    
    const foodList = CalorieConverter.data;
    
    //adds items to the example list
    let foodListData = `<i>(Ex: `;
    for (let food of foodList) {
      foodListData += `${food.name}, `;
    }

    //format the items of the example list
    foodListData = foodListData.replace(/, \s*$/, "");
    foodListData += `)</i>`;
    foodListEl.innerHTML = foodListData;