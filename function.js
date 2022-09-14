const STYLESHEET_KEY = "forest.css"

function changeForest() {
    var element = document.getElementById("style-sheet");
    element.setAttribute("href", "forest.css");

    localStorage.setItem(STYLESHEET_KEY, "forest.css");
}

function changeDark() {
    var element = document.getElementById("style-sheet");
    element.setAttribute("href", "dark.css");

    localStorage.setItem(STYLESHEET_KEY, "dark.css")
}

window.onload = function(){
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "forest.css";
    var styleElement = document.getElementById("style-sheet");
    styleElement.setAttribute("href", stylesheetValue);
}