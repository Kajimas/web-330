/* 
Title: Assignment 5 – Bob’s Automotive Repair Shop
Author: Richard Krasso
Date: 2/5/2023
Description: A PDF that describes how to complete Web 330 Assign_5 
 */
/*
/*
Title: bujri-bobs-auto-repair.html (https://github.com/nbujri/web-330/blob/main/week-5/bujri-bobs-auto-repair.html)
Author: Ngi Bujri
Date: 2/5/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully. 
*/
/*
Title: gorham-bobs-auto-repair.html (https://github.com/chrisgorham999/web-330/blob/main/week-5/gorham-bobs-auto-repair.html)
Author: Chris Gorham
Date: 2/5/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully. 
*/

"use strict";

import { Product } from "./product.js";
import { ShoppingCart } from "./shopping-cart.js";

const shoppingCart = new ShoppingCart();

//Activates when the "Add to Cart" button is clicked
document.getElementById("btnAddProduct").onclick = function () {
  //Gets the text and value of the selected product
  let productList = document.getElementById("productList");
  let product = productList.options[productList.selectedIndex].text;
  let productValue = productList.options[productList.selectedIndex].value;

  // If the product is not the default option, a new product is added to the array and the product counter increases
  // Additionally, the user is alerted of what happened and the options are reset
  if (product !== "--Select--") {
    shoppingCart.add(new Product(product, productValue));
    setCartCount();
    alert(`${product} was added to your shopping cart!`);
    document.getElementById("productList").value = "Select";
  }
};

//Activates when the cart icon is clicked
document.getElementById("cartIcon").onclick = function () {
  //Creates the head of the table
  let cartDisplayTable = `<table class="table">
  <th>ID</th>
  <th>Name</th>
  <th>Price</th>`;

  //Adds the cart Items to the table
  for (let product of shoppingCart) {
    cartDisplayTable += `
    <tr class="table-hover">
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    </tr>`;
  }

  //Closes the table and sends it to the element with the "shoppingCart" ID
  cartDisplayTable += `</table>`;
  document.getElementById("shoppingCart").innerHTML = cartDisplayTable;
};

//Returns the number of items selected
function setCartCount() {
  document.getElementById("cart-count").innerHTML = shoppingCart
    .count()
    .toString();
}

setCartCount();
