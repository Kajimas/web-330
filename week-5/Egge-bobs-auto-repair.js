/*
Title: Assignment 4 - Restaurant App
Author: Richard Krasso
Date: 1/29/2023
Description: A PDF that describes how to complete Web 330 Assign_4
*/
/*
Title: 
Author: 
Date: //2023
Description: 
*/


import { Product } from "./product.js";
import { ShoppingCart } from "./shopping-cart.js";

const shoppingCart = new ShoppingCart();
    
    setCardCount();
        
    document.getElementById('btnAddProduct').onclick = function () {

            let productList = document.getElementById('productList').value

            let product = productList.options[productList.selectedIndex].text

            let productValue = productList.options[productList.selectedIndex].value

            //may not work
            if (product =! "--Select--"){
                ShoppingCart.add(product)
                ShoppingCart.add(productValue)
                alert(`${product} was added to your shopping cart!`)
            }
            
        
        }

        document.getElementById('cartIcon').onclick = function () {
        let cartDisplayTable = `<table class="table">`

        }

        document.getElementById('btnShow').onclick = function () {
            alert(JSON.stringify(fruitManager.fruits))
        }

        document.getElementById('btnEmpty').onclick = function() {
            fruitManager.fruits = []
            document.getElementById('basket-count').innerHTML = fruitManager.count().toString()
        }

        setCardCount(){
            document.getElementById('cart-count').innerHTML = shoppingCart.count().toString()
        }