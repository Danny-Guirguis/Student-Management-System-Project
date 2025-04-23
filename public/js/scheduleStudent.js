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

let userLevel = localStorage.getItem("userLevel");

function filterByDay() {
    const selectedDay = document.getElementById("dayFilter").value;
    const rows = document.querySelectorAll("#scheduleTable tbody tr");

    rows.forEach(row => {
        const rowDay = row.getAttribute("data-day");
        row.style.display = (selectedDay === "All" || selectedDay === rowDay) ? "" : "none";
    });
}

// Highlight today's classes
document.addEventListener("DOMContentLoaded", () => {
    const todayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[todayIndex];
});



// Function to query Firestore collection and create HTML div
function loadCollectionData() {
    const collectionRef = db.collection(`schudule_level_${userLevel}`); // Adjust collection name if needed
    collectionRef.get().then((querySnapshot) => {
        const scheduleTableBody = document.querySelector("#scheduleTable tbody");
        scheduleTableBody.innerHTML = ""; // Clear existing rows if needed

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const newRow = document.createElement("tr");

            // Example usage: set a data-day attribute from Firestore field (if you have a 'day' field)
            newRow.setAttribute("data-day", data.day || "Unknown");

            // Create cells
            const dayCell = document.createElement("td");
            dayCell.textContent = data.day || "No Day";
            newRow.appendChild(dayCell);

            const timeCell = document.createElement("td");
            timeCell.textContent = data.time || "No Time";
            newRow.appendChild(timeCell);

            const subjectCell = document.createElement("td");
            subjectCell.textContent = doc.id || "No Subject";
            newRow.appendChild(subjectCell);

            const instructorCell = document.createElement("td");
            instructorCell.textContent = data.instructor || "No Instructor";
            newRow.appendChild(instructorCell);

            const roomCell = document.createElement("td");
            roomCell.textContent = data.room || "No Room";
            newRow.appendChild(roomCell);

            // Append the new row to the table body
            scheduleTableBody.appendChild(newRow);
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });
}

// Call the function to load data when the page loads
document.addEventListener('DOMContentLoaded', loadCollectionData);