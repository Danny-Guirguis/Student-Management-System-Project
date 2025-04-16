// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAKei2xBBRWWgRJ4zGtAbXjgvuY6A03JV8",
    authDomain: "education-management-sys-1d954.firebaseapp.com",
    projectId: "education-management-sys-1d954",
    storageBucket: "education-management-sys-1d954.appspot.com",
    messagingSenderId: "1029175634464",
    appId: "1:1029175634464:web:f361c714e66b5211ddea45",
    measurementId: "G-K8JB51P24Z"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("signupForm");
  if (!signupForm) {
    console.error("Signup form not found");
    return;
  }

  signupForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const userType = document.getElementById("userType").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!userType) {
      alert("Please select a user type.");
      return;
    }

    try {
      console.log("Starting registration process...");
      
      // Check if email exists
      const querySnapshot = await db.collection("users")
        .where("email", "==", email)
        .get();
      
      if (!querySnapshot.empty) {
        alert("Email already registered");
        return;
      }

      // Create user
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Add user data
      await db.collection("users").doc(user.uid).set({
        email: email,
        role: userType,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      // Redirect
      window.location.href = "signin.html";
    } catch (error) {
      console.group("Registration Error Details");
      console.error("Full error object:", error);
      console.log("Error code:", error.code);
      console.log("Error message:", error.message);
      console.log("Stack trace:", error.stack);
      console.groupEnd();
      
      alert(`Registration failed (${error.code}): ${error.message}`);
      
      // Additional debug info
      console.log("Current auth state:", auth.currentUser);
      console.log("Firestore instance:", db);
    }
  });
});
