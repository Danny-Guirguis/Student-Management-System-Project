import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAKei2xBBRWWgRJ4zGtAbXjgvuY6A03JV8",
    authDomain: "education-management-sys-1d954.firebaseapp.com",
    projectId: "education-management-sys-1d954",
    storageBucket: "education-management-sys-1d954.firebasestorage.app",
    messagingSenderId: "1029175634464",
    appId: "1:1029175634464:web:f361c714e66b5211ddea45",
    measurementId: "G-K8JB51P24Z"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };