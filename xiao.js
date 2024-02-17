// Function to open the login form
function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

// Function to close the login form
function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

// Add event listeners to open and close the login form
document.getElementById("openButton").addEventListener("click", openLogin);
document.getElementById("closeButton").addEventListener("click", closeLogin);