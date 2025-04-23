let credential = localStorage.getItem("credentials");

document.addEventListener('DOMContentLoaded', function() {
    if (credential === "student") {
        document.body.innerHTML = `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8">
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
                        background: #f7f9fc;
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
                        margin-bottom: 20px;
                    }
            
                    .filter-container {
                        margin-bottom: 20px;
                    }
            
                    select {
                        padding: 10px 15px;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        font-size: 16px;
                    }
            
                    .schedule-table {
                        width: 100%;
                        border-collapse: collapse;
                        background: white;
                        border-radius: 15px;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
                        overflow: hidden;
                        animation: fadeIn 0.6s ease-in-out;
                    }
            
                    .schedule-table th, .schedule-table td {
                        padding: 15px 20px;
                        text-align: left;
                        border-bottom: 1px solid #eee;
                    }
            
                    .schedule-table th {
                        background-color: #2980B9;
                        color: white;
                    }
            
                    .schedule-table tr:hover {
                        background-color: #f1f1f1;
                    }
            
                    .highlight-today {
                        background-color: #e3f6ff !important;
                    }
            
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
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
            
                        .schedule-table th, .schedule-table td {
                            padding: 10px;
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
                    <li><a href="index.html"><i class="fas fa-home"></i><span class="menu-text">Home</span></a></li>
                    <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Dashboard</span></a></li>
                    <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text">Courses</span></a></li>
                    <li><a href="schedules.html" class="active"><i class="fas fa-calendar-alt"></i><span class="menu-text">Schedule</span></a></li> <!-- Marked as active -->
                </ul>
            </div>
            
            <!-- Main Content -->
            <div class="main-content">
                <div class="header-title">Your Weekly Schedule</div>
            
                <div class="filter-container">
                    <label for="dayFilter">Filter by Day:</label>
                    <select id="dayFilter" onchange="filterByDay()">
                        <option value="All">All</option>
                        <option value="All">Saturday</option>
                        <option value="All">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                    </select>
                </div>
                <table class="schedule-table" id="scheduleTable">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Instructor</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            </body>
        </html>`
    } 
    else if (credential === "doctor") {
        document.body.innerHTML = ``
    } 
    else if (credential === "staff") {
        document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dashboard</title>
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
    
            .menu li a.active i {
                color: #0c214b;
                transform: scale(1.2);
            }
    
            .menu li a.active .menu-text {
                color: #0c214b;
            }
    
            .main-content {
                flex: 1;
                margin-left: 60px;
                padding: 30px;
                transition: margin-left 0.3s ease;
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
    
            .dashboard-cards {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 20px;
            }
    
            .card {
                background-color: #fff;
                padding: 20px;
                width: 30%;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                text-align: center;
                transition: transform 0.3s ease;
            }
    
            .card:hover {
                transform: translateY(-10px);
            }
    
            .card i {
                font-size: 40px;
                color: #2980B9;
                margin-bottom: 15px;
            }
    
            .card h3 {
                font-size: 20px;
                color: #34495E;
            }
    
            .card p {
                color: #7F8C8D;
            }
    
            .upload-section {
                margin-top: 30px;
                display: flex;
                flex-direction: column;
            }
    
            .upload-section label {
                margin-bottom: 8px;
                font-weight: bold;
                color: #34495E;
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
    
            @media (max-width: 768px) {
                .dashboard-cards {
                    flex-direction: column;
                }
    
                .card {
                    width: 100%;
                }
    
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
            <li><a href="index.html"><i class="fas fa-home"></i><span class="menu-text"> Home</span></a></li>
            <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Dashboard</span></a></li>
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text"> Courses Upload</span></a></li>
            <li><a href="schedules.html" class="active"><i class="fas fa-calendar-check"></i><span class="menu-text"> Schedule Upload</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">
            Welcome, <span id="userRole">Staff Member</span>
        </div>
    
        <div class="dashboard-cards">
            <div class="card">
                <i class="fas fa-calendar-alt"></i>
                <h3>Upload Schedule</h3>
                <p>Upload your schedule for students to view</p>
            </div>
            <div class="card">
                <i class="fas fa-user"></i>
                <h3>Manage Staff</h3>
                <p>View and manage staff schedules</p>
            </div>
            <div class="card">
                <i class="fas fa-book"></i>
                <h3>Course Details</h3>
                <p>Manage your course information and schedules</p>
            </div>
        </div>
    
        <!-- Upload Schedule Section -->
        <div class="upload-section">
            <h3>Schedule Upload</h3>
    
            <label for="schedule-name">Schedule Title:</label>
            <input type="text" id="schedule-name" name="schedule-name" placeholder="Enter schedule title">
    
            <label for="schedule-file">Schedule File (e.g., image or PDF):</label>
            <input type="file" id="schedule-file" name="schedule-file">
    
            <button onclick="uploadSchedule()">Upload Schedule</button>
        </div>
    </div>
    
    <script>
        function uploadSchedule() {
            const name = document.getElementById('schedule-name').value;
            const file = document.getElementById('schedule-file').files[0];
    
            if (name && file) {
                alert("Schedule uploaded: " + file.name);
                document.getElementById('schedule-name').value = '';
                document.getElementById('schedule-file').value = '';
            } else {
                alert("Please enter a title and select a file to upload.");
            }
        }
    </script>
    
    </body>
    </html>`
    }
});
