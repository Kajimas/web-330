/* 
Title: Assignment 7 – WhatABook, Part 1
Author: Richard Krasso
Date: 2/17/2023
Description: A PDF that describes how to complete Web 330 Assign_7
 */
/*
Title: gorham-whatabook1.html (https://github.com/chrisgorham999/web-330/blob/main/week-7/gorham-whatabook1.html)
Author: Chris Gorham
Date: 2/17/2023
Description: A fellow student's public work shared with the class on slack was very helpful for locating multiple errors within this document that were preventing my code from running successfully. 
*/
"use strict";

addEventListener(`DOMContentLoaded`, () => {
  const fileName = `books.xml`;

  fetch(fileName)
    .then((res) => res.text())
    .then((data) => {
      const domParser = new DOMParser();
      const xmlBooks = domParser.parseFromString(data, `text/xml`);
      loadBooks(xmlBooks);
      addIsbnClickEvents();
    });
});

function loadBooks(xml) {
  const books = xml.getElementsByTagName(`book`);
  let tableData = `<table id="bookTable" class="table"><th>ISBN</th><th>Title</th><th>Description</th><th>Pages</th><th>Authors</th><tbody>`;

  for (const book of books) {
    const isbn = book.getElementsByTagName(`isbn`)[0].childNodes[0].nodeValue;
    const title = book.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
    const description =
      book.getElementsByTagName(`description`)[0].childNodes[0].nodeValue;
    const pages = book.getElementsByTagName(`pages`)[0].childNodes[0].nodeValue;
    const authors =
      book.getElementsByTagName(`authors`)[0].childNodes[0].nodeValue;
    tableData += `
    <tr><td data-value="ISBN" data-entry="${isbn}"><a href="#" class="isbn-link">${isbn}</a></td>
    <td data-value="Title" data-entry="${title}">${title}</td>
    <td data-value="Description" data-entry="${description}">${description}</td>
    <td data-value="Pages" data-entry="${pages}">${pages}</td>
    <td data-value="Authors" data-entry="${authors}">${authors}</td></tr>`;
  }

  tableData += `</tbody></table>`;
  document.getElementById(`bookList`).innerHTML = tableData;
}

function anchorClicked(e) {
  e.preventDefault();
  const data = this.parentElement.parentElement.querySelectorAll(`td`);
  let bookData = `<ul style="list-style-type:none">`;

  for (const field of data) {
    bookData += `<li><b>${field.dataset.value}: </b>${field.dataset.entry}`;
  }

  document.getElementById(`selectedBook`).innerHTML = bookData;
}

function addIsbnClickEvents() {
  const viewButtons = document.querySelectorAll(`#bookTable tbody .isbn-link`);
  for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener(`click`, anchorClicked);
  }
}
