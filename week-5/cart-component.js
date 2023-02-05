/* 
Title: Assignment 5 – Bob’s Automotive Repair Shop
Author: Richard Krasso
Date: 2/5/2023
Description: A PDF that describes how to complete Web 330 Assign_5 
 */

"use strict"

//Returns extends an HTML element to return a cart icon when used
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
  }
}

//Defines the class as a component
customElements.define(`cart-component`, CartComponent)