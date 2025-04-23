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
const db = firebase.firestore()