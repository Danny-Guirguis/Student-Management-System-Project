import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

document.getElementById("signupForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let userType = document.getElementById("userType").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!userType) {
    alert("Please select a user type.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userUid = user.uid;

    // Create a document in the 'users' collection with the document ID set to the user's UID
    await setDoc(doc(collection(db, "users"), userUid), {
      email: email,
      role: userType
    });

    window.location.href = "dashboard.html";

  } catch (error) {
    alert("Error: " + error.message);
  }
});