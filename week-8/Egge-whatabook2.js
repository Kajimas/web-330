/* 
Title: Assignment 8 – WhatABook, Part 1
Author: Richard Krasso
Date: 2/26/2023
Description: A PDF that describes how to complete Web 330 Assign_8
 */
/*
Title: gorham-whatabook2.html (https://github.com/chrisgorham999/web-330/blob/main/week-8/gorham-whatabook2.html)
Author: Chris Gorham
Date: 2/26/2023
Description: A fellow student's public work available on github. It was useful for identifying code examples that were shared via low resolution images in the instructions. 
*/

"use strict";

import { HttpClient } from "./http-client.js";

// Create a new instance of the HttpClient class
const http = new HttpClient();

// Define an array of ISBNs to fetch book details for
const isbns = [
  "0345339681",
  "0261103571",
  "9780593099322",
  "9780261102361",
  "9780261102378",
  "9780590302715",
  "9780316769532",
  "9780743273565",
  "9780590405959",
];

// Define an object of parameters to send with the API request
const params = {
  bibkeys: `ISBN:${isbns.join(",")}`,
  format: "json",
  jscmd: "details",
};

// Send an HTTP GET request to the Open Library API with the provided parameters
http
  .get("https://openlibrary.org/api/books", params)
  .then((res) => {
    console.log(res);
    document.getElementById("bookList").innerHTML = buildHtmlString(
      res,
      "table"
    );
    addIsbnClickEvents();
  })
  .catch((e) => {
    console.log(e);
  });

// Defines a function to fetch additional details for a selected book
function getBook(event) {
  event.preventDefault();

  const self = this;
  const isbn = self.innerText;

  const params = {
    bibkeys: `ISBN:${isbn}`,
    format: "json",
    jscmd: "details",
  };

  http
    .get("https://openlibrary.org/api/books", params)
    .then((res) => {
      console.log(res);

      document.getElementById("selectedBook").innerHTML = buildHtmlString(
        res,
        "ul"
      );
    })
    .catch((e) => {
      console.log(e);
    });
}

// Defines a function to build an HTML string representing the book details
function buildHtmlString(res, format) {
  let tableString = `<table id="bookTable" class="table"><th>ISBN</th><th>Title</th><th>Description</th><th>Pages</th><th>Authors</th><tbody>`;

  let ulString = "";

  for (const key in res) {
    ulString += `<ul style = "list-style-type: none">`;

    if (res.hasOwnProperty(key)) {
      let authors = [];
      if (res[key].details.authors) {
        authors = res[key].details.authors.map(function (author) {
          return author.name;
        });
      }
      let book = {
        isbn:
          res[key].details.isbn_11 ||
          res[key].details.isbn_13 ||
          res[key].details.isbn_10,
        title: res[key].details.title,
        description:
          res[key].details.subtitle || res[key].details.subtitle || "N/A",
        pages:
          res[key].details.number_of_pages ||
          res[key].details.number_of_pages ||
          "N/A",
        authors: authors ? authors.join(",") : "",
      };

      ulString += `<li><b>ISBN:</b> ${book.isbn} </li>
      <li><b>Title:</b> ${book.title} </li>
      <li><b>Description:</b> ${book.description} </li>
      <li><b>Pages:</b> ${book.pages} </li>
      <li><b>Authors:</b> ${book.authors} </li>`;

      tableString += `<tr><td><a href= "#" class = "isbn-link"> ${book.isbn}</a></td><td>${book.title}</td><td>${book.description}</td><td>${book.pages}</td><td>${book.authors}</td></tr>`;
    }
  }

  tableString += "</tbody></table>";

  if (format === "table") {
    return tableString;
  } else {
    return ulString;
  }
}

// Defines function to add click event listeners to ISBN links
function addIsbnClickEvents() {
  const viewButtons = document.querySelectorAll(`#bookTable tbody .isbn-link`);
  for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener(`click`, getBook);
  }
}
