document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(this); // Create a FormData object
    
    // Send the form data using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true); // Replace "save_data.php" with your server-side script URL
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success message
            alert(xhr.responseText);
        } else {
            // Error message
            alert("Failed to submit form. Please try again later.");
        }
    };
    xhr.send(formData); // Send the form data
});