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
  const signinForm = document.getElementById("signinForm");
  if (!signinForm) {
    console.error("Signin form not found");
    return;
  }

  signinForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userRef = db.collection("users").doc(user.uid); // Using namespace approach
            
            userRef.get()
                .then((docSnap) => {
                    if (docSnap.exists) {
                        const userData = docSnap.data();
                        if (userData.role) {
                            localStorage.setItem('credentials', userData.role);
                            localStorage.setItem('userLevel', userData.level); // Store user level in local storage
                            console.log("User role:", userData.role);
                            window.location.href = "dashboard.html";
                        } else {
                            alert("Account type mismatch. Please select correct user type.");
                            auth.signOut();
                        }
                    } else {
                        alert("User not found. Please register first.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Error retrieving user data");
                });
        })
        .catch((error) => {
            console.error("Sign-in error:", error); // Log the complete error object
            alert("Sign-in failed: " + error.message); // Keep user-friendly message
        });
  });
});
