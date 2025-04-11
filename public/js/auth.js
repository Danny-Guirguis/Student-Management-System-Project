import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged 
} from "firebase/auth";

// Firebase Config
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "PROJECT_ID",
    // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
    storageBucket: "PROJECT_ID.firebasestorage.app",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-MEASUREMENT_ID",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

// Sign Up
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log - userCredential.user;
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

// Sign In
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    console.log - userCredential.user;
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

// On Authntication State Change
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in: ", user.uid);
  } else {
    console.log("User is signed out");
  }
});