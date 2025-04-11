import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const userRef = doc(db, "users", user.uid);
            
            getDoc(userRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        if (userData.role) {
                            localStorage.setItem('credentials', userData.role);
                            console.log("User role:", userData.role);
                            window.location.href = "dashboard.html";
                        } else {
                            console.error("Role not defined for user");
                            // Optionally, display an error to the user
                            // alert("Role not defined for user. Please contact support.");
                        }
                    } else {
                        console.error("User document not found");
                        // Optionally, display an error to the user
                        // alert("User document not found. Please register first.");
                    }
                })
                .catch((error) => {
                    console.error("Error retrieving user data:", error);
                    alert("Error retrieving user data. Please try again.");
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign-in error:", errorCode, errorMessage);
            alert("Sign-in failed: " + errorMessage);
        });
});