window.addEventListener("load", function() {
    // Page loaded event listener
    console.log("Page loaded!"); // Add this line to check if the event listener is triggered
    // Preloader handling
    var loader = document.getElementById("preloader");
    setTimeout(function() {
        loader.classList.add("disappear");
    }, 3900); // Disappear after 3.9 seconds (3900 milliseconds)

    // Elements selection
    var stars = document.getElementsByClassName('fas');
    var emoji = document.getElementById('emoji');
    var slider = document.getElementById('slider');

    // Event listener for slider input
    slider.addEventListener('input', function() {
        var value = parseInt(this.value);
        updateStars(value);
    });

    // Function to update stars based on slider value
    function updateStars(value) {
        // Reset all stars color to default
        for (var i = 0; i < stars.length; i++) {
            stars[i].style.color = "#e4e4e4";
        }
        // Set color for stars up to the selected value
        for (var i = 0; i < value; i++) {
            stars[i].style.color = "#ffd93b";
        }
        // Adjust emoji position based on slider value
        emoji.style.transform = "translateX(" + (-100 * value) + "px)";
    }
});

// Event listener for submit button
document.getElementById("submit-button").addEventListener("click", function() {
    // Submit button click event
    // Redirect to another page
    window.location.href = "profile.html"; // Change "another-page.html" to the URL of the desired page
});