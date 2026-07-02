//Edited by ezatsu

const widthDropdown = document.getElementById("width-options");
const root = document.documentElement;
const textBox = document.querySelector("textarea");

let lastSelected = widthDropdown.value;

widthDropdown.addEventListener("change", function () {
    const selectedWidth = this.value;

    // Save the current textarea contents under the previous width.
    sessionStorage.setItem(lastSelected, textBox.value);

    // Change the CSS custom property.
    root.style.setProperty("--textbox-width", `${selectedWidth}px`);

    // Restore text previously entered for this width.
    textBox.value = sessionStorage.getItem(selectedWidth) ?? "";

    lastSelected = selectedWidth;
});