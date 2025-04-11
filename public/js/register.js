document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let userType = document.getElementById("userType").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password do not match!");
        return;
    }
    
    if (!userType) {
        alert("Please select a user type.");
        return;
    }

    alert("Account created successfully as " + userType + "!");
    
    if (userType === "student") {
        localStorage.setItem("credentials", "student");
    } else if (userType === "doctor") {
        localStorage.setItem("credentials", "doctor");
    } else if (userType === "staff") {
        localStorage.setItem("credentials", "staff");
    }
    window.location.href = "dashboard.html";
});