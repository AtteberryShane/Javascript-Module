// Declaring variables
let length;
let width;

// Function to calculate area of rectangle
function calculateArea() {
    // obtaining values from input fields and converting them to float
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width; // calculating area
    document.getElementById("result").innerText = `The area of the rectangle is ${area}`;
}