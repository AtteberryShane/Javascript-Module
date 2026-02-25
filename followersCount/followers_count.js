// Declaring count variable
let count = 0;

// Incremental count function
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Update the displayed count
    checkCountValue(); // Check if the count has reached specific values
}

// Display count function
function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; // Display the count in the HTML
}

// Adding event listener to the count
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! COngratulations!"); // Alert when count reaches 10
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!"); // Alert when count reaches 20
    }
}