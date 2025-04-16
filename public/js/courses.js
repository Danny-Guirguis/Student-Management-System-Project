let credential = localStorage.getItem("credentials");

document.addEventListener('DOMContentLoaded', function() {
    if (credential === "student") {
        document.body.innerHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Courses</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
    
            body {
                display: flex;
                height: 100vh;
                background: linear-gradient(to right, #eef2f3, #ffffff);
                overflow-x: hidden;
            }
    
            .sidebar {
                width: 80px;
                height: 100vh;
                background: #0c214b;
                color: white;
                position: fixed;
                left: 0;
                top: 0;
                transition: width 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 0;
                box-shadow: 3px 0 15px rgba(0, 0, 0, 0.1);
                z-index: 10;
            }
    
            .sidebar:hover {
                width: 240px;
            }
    
            .sidebar-header {
                width: 100%;
                padding: 20px 0;
                text-align: center;
            }
    
            .sidebar-header img {
                width: 50px;
                transition: transform 0.3s ease;
            }
    
            .sidebar:hover .sidebar-header img {
                transform: scale(1.1);
            }
    
            .menu {
                list-style: none;
                width: 100%;
                padding: 0;
                margin-top: 20px;
            }
    
            .menu li a {
                display: flex;
                align-items: center;
                padding: 15px 20px;
                color: white;
                text-decoration: none;
                transition: background 0.3s, transform 0.2s;
                border-radius: 10px;
                margin: 8px 10px;
                white-space: nowrap;
            }
    
            .menu li a i {
                font-size: 20px;
                width: 40px;
                text-align: center;
                transition: transform 0.3s ease;
            }
    
            .menu li a:hover {
                background: rgba(255, 255, 255, 0.15);
                transform: translateX(5px);
            }
    
            .menu-text {
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
    
            .sidebar:hover .menu-text {
                opacity: 1;
                margin-left: 5px;
            }
    
            .menu li a.active {
                background: white; /* White background for active section */
                color: #0c214b; /* Set text and icon color to the same as sidebar */
            }
    
            .menu li a.active i {
                color: #0c214b; /* Set icon color to the same as sidebar */
                transform: scale(1.2); /* Optional: scale the icon on active state */
            }
    
            .main-content {
                flex: 1;
                margin-left: 80px;
                padding: 30px;
                transition: margin-left 0.3s ease-in-out;
                width: 100%;
            }
    
            .sidebar:hover + .main-content {
                margin-left: 240px;
            }
    
            .header-title {
                font-size: 28px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 30px;
            }
    
            .courses-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 25px;
            }
    
            .course-card {
                background: #fff;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            .course-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }
    
            .course-card h3 {
                font-size: 20px;
                margin-bottom: 10px;
                color: #34495E;
            }
    
            .course-card p {
                font-size: 14px;
                color: #7F8C8D;
            }
    
            /* Responsive */
            @media (max-width: 768px) {
                .main-content {
                    margin-left: 60px;
                    padding: 20px;
                }
    
                .sidebar {
                    width: 60px;
                }
    
                .sidebar:hover {
                    width: 200px;
                }
    
                .sidebar:hover + .main-content {
                    margin-left: 200px;
                }
            }
        </style>
    </head>
    <body>
    
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text">Home</span></a></li>
            <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text">Dashboard</span></a></li>
            <li><a href="courses.html" class="active"><i class="fas fa-book"></i><span class="menu-text">Courses</span></a></li> <!-- Marked as active -->
            <li><a href="schedules.html"><i class="fas fa-calendar-alt"></i><span class="menu-text">Schedule</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">Your Courses</div>
        <div class="courses-grid">
            <div class="course-card">
                <h3>Web Development</h3>
                <p>Learn HTML, CSS, JavaScript and build responsive websites.</p>
            </div>
            <div class="course-card">
                <h3>Data Science</h3>
                <p>Master Python, data analysis, and machine learning techniques.</p>
            </div>
            <div class="course-card">
                <h3>Mobile App Dev</h3>
                <p>Create apps for Android and iOS using Flutter & React Native.</p>
            </div>
            <div class="course-card">
                <h3>Cybersecurity</h3>
                <p>Understand ethical hacking, security protocols, and best practices.</p>
            </div>
            <div class="course-card">
                <h3>UI/UX Design</h3>
                <p>Design user-friendly interfaces with Figma, Sketch & Adobe XD.</p>
            </div>
        </div>
    </div>
    
    </body>
    </html>
    
    
    `
    } 
    else if (credential === "doctor") {
        document.body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Doctor's Courses</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
    
            body {
                display: flex;
                height: 100vh;
                background: linear-gradient(to right, #eef2f3, #ffffff);
                overflow-x: hidden;
            }
    
            .sidebar {
                width: 80px;
                height: 100vh;
                background: #0c214b;
                color: white;
                position: fixed;
                left: 0;
                top: 0;
                transition: width 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 0;
                box-shadow: 3px 0 15px rgba(0, 0, 0, 0.1);
                z-index: 10;
            }
    
            .sidebar:hover {
                width: 240px;
            }
    
            .sidebar-header {
                width: 100%;
                padding: 20px 0;
                text-align: center;
            }
    
            .sidebar-header img {
                width: 50px;
                transition: transform 0.3s ease;
            }
    
            .sidebar:hover .sidebar-header img {
                transform: scale(1.1);
            }
    
            .menu {
                list-style: none;
                width: 100%;
                padding: 0;
                margin-top: 20px;
            }
    
            .menu li a {
                display: flex;
                align-items: center;
                padding: 15px 20px;
                color: white;
                text-decoration: none;
                transition: background 0.3s, transform 0.2s;
                border-radius: 10px;
                margin: 8px 10px;
                white-space: nowrap;
            }
    
            .menu li a i {
                font-size: 20px;
                width: 40px;
                text-align: center;
            }
    
            .menu li a:hover {
                background: rgba(255, 255, 255, 0.15);
                transform: translateX(5px);
            }
    
            .menu-text {
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
    
            .sidebar:hover .menu-text {
                opacity: 1;
                margin-left: 5px;
            }
    
            .menu li a.active {
                background: white; /* White background for active section */
                color: #0c214b; /* Set text and icon color to the same as sidebar */
            }
    
            .menu li a.active i {
                color: #0c214b; /* Set icon color to the same as sidebar */
                transform: scale(1.2); /* Optional: scale the icon on active state */
            }
    
            .main-content {
                flex: 1;
                margin-left: 80px;
                padding: 30px;
                transition: margin-left 0.3s ease-in-out;
                width: 100%;
            }
    
            .sidebar:hover + .main-content {
                margin-left: 240px;
            }
    
            .header-title {
                font-size: 28px;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 30px;
            }
    
            .batch-selector {
                margin-bottom: 20px;
                display: flex;
                align-items: center;
            }
    
            .batch-selector select {
                padding: 10px;
                font-size: 16px;
                margin-left: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
    
            .courses-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 25px;
            }
    
            .course-card {
                background: #fff;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            .course-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }
    
            .course-card h3 {
                font-size: 20px;
                margin-bottom: 10px;
                color: #34495E;
            }
    
            .course-card p {
                font-size: 14px;
                color: #7F8C8D;
            }
    
            @media (max-width: 768px) {
                .main-content {
                    margin-left: 60px;
                    padding: 20px;
                }
    
                .sidebar {
                    width: 60px;
                }
    
                .sidebar:hover {
                    width: 200px;
                }
    
                .sidebar:hover + .main-content {
                    margin-left: 200px;
                }
            }
        </style>
    </head>
    <body>
    
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text">Home</span></a></li>
            <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Dashboard</span></a></li>
            <li><a href="courses.html" class="active"><i class="fas fa-book"></i><span class="menu-text">Courses</span></a></li> <!-- Marked as active -->
            <li><a href="schedules.html"><i class="fas fa-calendar-alt"></i><span class="menu-text">Schedule</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">Select Batch and Courses</div>
    
        <!-- Batch Selector -->
        <div class="batch-selector">
            <label for="batchSelect">Choose a Batch:</label>
            <select id="batchSelect">
                <option value="batch1">First Year: Computer Science</option>
                <option value="batch2">Second Year: Information Technology</option>
                <option value="batch3">Third Year: Data Science</option>
            </select>
        </div>
    
        <!-- Courses Grid -->
        <div class="courses-grid" id="coursesGrid">
            <!-- Courses will be dynamically added based on selected batch -->
        </div>
    </div>
    
    <script>
        const batchSelect = document.getElementById('batchSelect');
        const coursesGrid = document.getElementById('coursesGrid');
    
        // Example data for doctor courses per batch
        const courses = {
            batch1: [
                { title: "Web Development", description: "Learn HTML, CSS, JavaScript and build responsive websites." },
                { title: "Data Structures", description: "Explore algorithms and data structures fundamental for programming." },
                { title: "Networking", description: "Understand the basics of networking and internet protocols." }
            ],
            batch2: [
                { title: "Database Management", description: "Learn about database systems, SQL, and data management techniques." },
                { title: "Operating Systems", description: "Understand the basic components of an operating system and its functionality." }
            ],
            batch3: [
                { title: "Machine Learning", description: "Explore machine learning algorithms and how they are used in real-world applications." },
                { title: "Big Data", description: "Learn about big data technologies and their real-world applications." }
            ]
        };
    
        // Function to update the displayed courses based on the selected batch
        function updateCourses(batch) {
            coursesGrid.innerHTML = ""; // Clear current courses
    
            // Check if there are courses available for the selected batch
            if (courses[batch] && courses[batch].length > 0) {
                courses[batch].forEach(course => {
                    const courseCard = document.createElement('div');
                    courseCard.classList.add('course-card');
    
                    const title = document.createElement('h3');
                    title.textContent = course.title;
                    courseCard.appendChild(title);
    
                    const description = document.createElement('p');
                    description.textContent = course.description;
                    courseCard.appendChild(description);
    
                    coursesGrid.appendChild(courseCard);
                });
            } else {
                const noCoursesMessage = document.createElement('p');
                noCoursesMessage.textContent = "No courses available for this batch.";
                coursesGrid.appendChild(noCoursesMessage);
            }
        }
    
        // Initial course load for batch1
        updateCourses(batchSelect.value);
    
        // When the doctor changes the batch, update the courses
        batchSelect.addEventListener('change', (event) => {
            updateCourses(event.target.value);
        });
    </script>
    
    </body>
    </html>
    
    
         `
    } 
    else if (credential === "staff") {
        document.body.innerHTML = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Course Upload</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
            }
    
            body {
                display: flex;
                height: 100vh;
                background: #f1f1f1;
            }
    
            .sidebar {
                width: 60px;
                height: 100vh;
                background: #0c214b;
                color: white;
                position: fixed;
                top: 0;
                left: 0;
                transition: width 0.3s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 0;
                box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            }
    
            .sidebar:hover {
                width: 220px;
            }
    
            .sidebar-header {
                width: 100%;
                padding: 20px 0;
                text-align: center;
            }
    
            .sidebar-header img {
                width: 45px;
            }
    
            .menu {
                list-style: none;
                width: 100%;
                padding: 0;
                margin-top: 20px;
            }
    
            .menu li {
                width: 100%;
            }
    
            .menu li a {
                display: flex;
                align-items: center;
                padding: 15px;
                color: white;
                text-decoration: none;
                transition: background 0.3s ease;
                border-radius: 5px;
                margin-bottom: 10px;
            }
    
            .menu li a:hover {
                background: #34495E;
            }
    
            .menu li a i {
                font-size: 20px;
                width: 40px;
                text-align: center;
            }
    
            .menu-text {
                opacity: 0;
                transition: opacity 0.5s ease-in-out;
            }
    
            .sidebar:hover .menu-text {
                opacity: 1;
            }
    
            .menu li a.active {
                background: white;
                color: #0c214b;
            }
    
            .main-content {
                flex: 1;
                margin-left: 60px;
                padding: 30px;
                background-color: #fff;
            }
    
            .sidebar:hover + .main-content {
                margin-left: 220px;
            }
    
            .header-title {
                font-size: 30px;
                font-weight: 600;
                color: #34495E;
                margin-bottom: 20px;
            }
    
            .upload-section {
                margin-top: 30px;
                display: flex;
                flex-direction: column;
            }
    
            .upload-section input,
            .upload-section textarea,
            .upload-section button {
                padding: 15px;
                margin-bottom: 20px;
                border-radius: 5px;
                border: 1px solid #ccc;
            }
    
            .upload-section button {
                background-color: #0c214b;
                color: white;
                cursor: pointer;
            }
    
            .upload-section button:hover {
                background-color: rgb(46, 127, 208);
            }
    
            /* Responsive for smaller screens */
            @media (max-width: 768px) {
                .sidebar {
                    width: 50px;
                }
    
                .sidebar:hover {
                    width: 200px;
                }
    
                .main-content {
                    margin-left: 50px;
                }
    
                .sidebar:hover + .main-content {
                    margin-left: 200px;
                }
            }
        </style>
    </head>
    <body>
    
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text"> Home</span></a></li>
            <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Dashboard</span></a></li>
            <li><a href="courses.html" id="courses-link" class="active"><i class="fas fa-book"></i><span class="menu-text"> Courses Upload</span></a></li>
            <li><a href="schedules.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Schedule Upload</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">
            Upload Course Details
        </div>
    
        <!-- Course Upload Form -->
        <div class="upload-section">
            <h3>Course Information</h3>
    
            <label for="course-name">Course Name:</label>
            <input type="text" id="course-name" name="course-name" placeholder="Enter course name">
    
            <label for="course-description">Course Description:</label>
            <textarea id="course-description" name="course-description" placeholder="Enter course description" rows="5"></textarea>
    
            <label for="course-file">Course File (e.g., syllabus, materials):</label>
            <input type="file" id="course-file" name="course-file">
    
            <button onclick="uploadCourse()">Upload Course</button>
        </div>
    </div>
    
    <script>
        // Highlight the "Courses" menu item as active
        document.addEventListener("DOMContentLoaded", function() {
            const coursesLink = document.getElementById('courses-link');
            coursesLink.classList.add('active');
        });
    
        function uploadCourse() {
            let courseName = document.getElementById('course-name').value;
            let courseDescription = document.getElementById('course-description').value;
            let courseFile = document.getElementById('course-file').files[0];
    
            // Check if all fields are filled and a file is selected
            if (courseName && courseDescription && courseFile) {
                alert("Course uploaded successfully!");
                // Reset the form fields after successful "upload"
                document.getElementById('course-name').value = '';
                document.getElementById('course-description').value = '';
                document.getElementById('course-file').value = '';
            } else {
                alert('Please fill in all fields and upload a file.');
            }
        }
    </script>
    
    </body>
    </html>`
    }
});
