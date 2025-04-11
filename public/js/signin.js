document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let userType = document.getElementById("userType").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!userType) {
        alert("Please select a user type.");
        return;
    }

    if (email && password) {
        alert(`Sign in successful as ${userType}!`);
        if (userType === "student") {
            localStorage.setItem("credentials", "student");
        } else if (userType === "doctor") {
            localStorage.setItem("credentials", "doctor");
        } else if (userType === "staff") {
            localStorage.setItem("credentials", "staff");
        }
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter valid credentials.");
    }
});