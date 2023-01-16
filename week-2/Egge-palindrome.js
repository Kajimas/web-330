/*
Title: Web 330 Assign_2
Author: Richard Krasso
Date: 1/15/2023
Description: A PDF that describes how to complete Web 330 Assign_2
*/
/*
Title: Date.prototype.toLocaleString() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
Author: developer.mozilla.org
Date: 1/15/2023
Description: An article using code snippets to explain how to use toLocaleString()
*/
/*
Title: Javascript date method without time
Author: Micaël Félix
Date: Oct 23, 2014
Description: a Stack Overflow user who explains how control specific parts of a date
*/

//I was unable to figure out how to remove the hours normally
//I set the hours to a fixed number and used slice so that the length I would want removed would not change over time
function getTodaysDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date
    .toLocaleString("en-US")
    .split(``)
    .reverse()
    .slice(13)
    .reverse()
    .join(``);
}

//
function getLength(string) {
  return string.length;
}
function reverse(string) {
  return string.split(``).reverse().join(``);
}
function isPalindrome(string) {
  return reverse(string) === string ? true : false;
}

document.getElementById(`btnCheckPhrase`).onclick = function () {
  // these are the variables mentioned in 1) through 7)
  // Since they are never changed within the function, I thought that they would be better as consts
  // assignResults was an exception and needed to be reassigned latter, so I made it a let
  let assignResults = ``;
  const txtPhrase = document.getElementById(`txtPhrase`).value;
  const today = getTodaysDate();
  const len = getLength(txtPhrase);
  const reversedPhrase = reverse(txtPhrase);
  const header = `Date: ${today} <br>
 Original Phrase: ${txtPhrase} <br>
 Reversed Phrase: ${reversedPhrase} <br> 
 Phrase Length: ${len}`;

  document.getElementById(`assign-results-header`).innerHTML = header;

  //this is the if...else statement from 8)
  //I thought that this would be better as a turnery, but the assignment said it needed to be an if...else statement
  if (isPalindrome(txtPhrase.toLowerCase())) {
    assignResults = `${txtPhrase} is a palindrome!`;
  } else {
    assignResults = `${txtPhrase} is not a palindrome!`;
  }
  document.getElementById(`assign-results`).innerHTML = assignResults;
};
