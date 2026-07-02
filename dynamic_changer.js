// Source - https://stackoverflow.com/a/33870712
// Posted by OliverRadini
// Retrieved 2026-06-19, License - CC BY-SA 3.0

var widthDropdown = document.getElementById("widthOptions");

var lastSelected = widthDropdown.options[widthDropdown.selectedIndex].value

var textareaWidth = document.querySelector(":root");

console.log(lastSelected);

widthDropdown.onchange = function(){

    currentWidth = textBox.value;

    dropdownTextbox_get();

    var selected = this.options[this.selectedIndex].value;

    dropdownTextbox_set();

    //load the current text into the last selected value
    sessionStorage.setItem(lastSelected, currentWidth);


    //load the new text in to the text box
    textBox.value = sessionStorage.getItem(selected);

    lastSelected = selected;
};

// Function for getting a variable value
function dropdownTextbox_get() {
  // Get the styles (properties and values) for the root
  var textareaWidthStyle = getComputedStyle(textareaWidth);
  // Alert the value of the --textbox-width variable
  alert("The value of --textbox-width is: " + textareaWidthStyle.getPropertyValue('--textbox-width'));
}

function dropdownTextbox_set() {
  // Set the value of variable --textbox-width to another value
  r.style.setProperty('--textbox-width', selected);
}