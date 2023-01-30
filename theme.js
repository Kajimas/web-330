/*
Title: Assignment 1 – Environment Setup
Author: Richard Krasso
Date: 1/8/2023
Description: A PDF that instructs students on how to set up their environment for their assignments
*/

/*
Title: theme.js
Author: Richard Krasso
Date: 1/8/2023
Description: Instructs on how to make the javascript in the environment for class 330
*/

/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

//Set the default theme to light if one has not been set in the browsers localStorage
setDefaultTheme();

// I did not understand how @param x affected the following code block
// I did not ask about it because it was already too late to ask anyone by the time I found it
/**
 * Function to switch the users selected website theme
 * @param x (this instance)
 */
function toggleMode(x) {
  let colorTheme = document.body.classList; // get the body's CSS class
  let iconMode = x.classList; // get the current classes assigned to the triggered button

  //Changes the light theme to dark or the dark to light, depending on which is active
  //Results are reflected in the local storage
  if (colorTheme.value === "light-theme") {
    localStorage.clear();
    localStorage.setItem("mode", "dark-theme");
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode");
  } else {
    localStorage.clear();
    localStorage.setItem("mode", "light-theme");
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");
  }

  //Updates the selected theme
  //If commented out when on dark mode, it will stay on dark mode until the local storage is cleared
  colorTheme.value = localStorage.getItem("mode");
  iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
  document.getElementById("icon-text").innerHTML =
    localStorage.getItem("iconText");
}

//The local storage is reset
//Even when the local storage is reset, the default light theme needs to be manually selected
function clearLocalStorage() {
  localStorage.clear();
  document.body.classList.value = "light-theme";
  document.getElementById("icon-text").innerHTML = "Light Mode";
  document.getElementById("icon-mode").classList.value =
    "fa fa-toggle-off pull-right";
}
