/* 
Title: Assignment 8 – WhatABook, Part 1
Author: Richard Krasso
Date: 2/26/2023
Description: A PDF that describes how to complete Web 330 Assign_8
 */

"use strict";

// Defines a class named HttpClient that will be exported later 
export class HttpClient {
  async get(url, params = ``) {
    url = new URL(url);
    url.search = new URLSearchParams(params);
    const res = await fetch(url.toString(), { method: "GET" });
    return res.json();
  }
}
