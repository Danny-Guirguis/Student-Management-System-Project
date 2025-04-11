// const confirmPassword = document.getElementById("confirmPassword").value;

// // Sign Up
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     console.log - userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.message);
//   });

// // Sign In
// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     console.log - userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.message);
//   });

// // On Authntication State Change
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User is signed in: ", user.uid);
//   } else {
//     console.log("User is signed out");
//   }
// });

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config.js';

// Sign up
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });

// Sign in
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });