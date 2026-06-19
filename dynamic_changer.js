// Source - https://stackoverflow.com/a/33870712
// Posted by OliverRadini
// Retrieved 2026-06-19, License - CC BY-SA 3.0

var widthDropdown = document.getElementById("widthOptions");

var lastSelected = widthDropdown.options[widthDropdown.selectedIndex].value

console.log(lastSelected);

widthDropdown.onchange = function(){

    var textBox = document.getElementById("agencyDescription");    
    currentText = textBox.value;

    var selected = this.options[this.selectedIndex].value;

    //load the current text into the last selected value
    sessionStorage.setItem(lastSelected, currentText);


    //load the new text in to the text box
    textBox.value = sessionStorage.getItem(selected);

    lastSelected = selected;
};
