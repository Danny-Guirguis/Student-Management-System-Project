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

let userLevel = localStorage.getItem("userLevel");

function loadCollectionData() {
    const coursesGrid = document.querySelector('.courses-grid'); // Target your courses container
    const collectionRef = db.collection(`courses_level_${userLevel}`);

    collectionRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const newCard = document.createElement('div');
                newCard.classList.add('course-card');

                // Example fields
                const title = document.createElement('h3');
                title.textContent = data.subject || doc.id;
                newCard.appendChild(title);

                const info = document.createElement('p');
                info.textContent = `Instructor: ${data.instructor || 'N/A'} | Day: ${data.day || 'N/A'} | Time: ${data.time || 'N/A'}`;
                newCard.appendChild(info);

                coursesGrid.appendChild(newCard);
            });
        })
        .catch((error) => {
            console.error("Error getting documents:", error);
        });
}

// Call the function to load data when the page loads
document.addEventListener('DOMContentLoaded', loadCollectionData);