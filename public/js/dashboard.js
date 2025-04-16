let credential = localStorage.getItem("credentials");

document.addEventListener('DOMContentLoaded', function() {
    if (credential === "student") {
        document.body.innerHTML = `
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
    
        /* Sidebar */
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
    
        .dashboard-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            width: 100%;
        }
    
        .pay-cards {
            flex: 1;
            min-width: 300px;
            background: #ffffff;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #e0e0e0;
        }
    
        .pay-cards:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
    
        .pay-cards h3 {
            font-size: 22px;
            color: #2c3e50;
            margin-bottom: 10px;
        }
    
        .pay-cards p {
            font-size: 16px;
            color: #2980B9;
        }
    
        /* Responsive */
        @media (max-width: 768px) {
            .dashboard-cards {
                flex-direction: column;
            }
    
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
    
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text">Home</span></a></li>
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text">Courses</span></a></li>
            <li><a href="schedules.html"><i class="fas fa-calendar-alt"></i><span class="menu-text">Schedule</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">
            Welcome, <span id="userRole">Student</span>
        </div>
    
        <div class="dashboard-cards">
            <div class="pay-cards">
                <h3>Payment of 2nd Year</h3>
                <p>1st Semester: <strong style="color:green;">Paid</strong></p>
                <p>2nd Semester: <strong style="color:red;">Not Paid</strong></p>
            </div>
        </div>
    </div>
    `
    } 
    else if (credential === "doctor") {
        document.body.innerHTML = `
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Doctor's Dashboard</title>
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
    
            /* Sidebar */
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
    
            /* Dashboard Cards */
            .dashboard-cards {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 30px;
            }
    
            .card {
                background: #ffffff;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border: 1px solid #ddd;
            }
    
            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }
    
            .card h3 {
                font-size: 22px;
                color: #34495E;
                margin-bottom: 10px;
            }
    
            .card p {
                font-size: 16px;
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
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text">Courses</span></a></li>
            <li><a href="schedules.html"><i class="fas fa-calendar-alt"></i><span class="menu-text">Schedule</span></a></li>
        </ul>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
        <!-- Header Title -->
        <div class="header-title">
            Welcome, Dr. John Doe
        </div>
    
        <!-- Dashboard Cards -->
        <div class="dashboard-cards">
            <!-- Upcoming Lectures -->
            <div class="card">
                <h3>Upcoming Lectures</h3>
                <p>Lecture on Data Science: April 20, 2025 at 10:00 AM</p>
                <p>Lecture on Machine Learning: April 22, 2025 at 1:00 PM</p>
                <a href="schedule.html">View Full Schedule</a>
            </div>
    
            <!-- Course Management -->
            <div class="card">
                <h3>Course Management</h3>
                <p>Manage your courses and upload new course materials.</p>
                <a href="courses.html">Go to Courses</a>
            </div>
    
            <!-- Student Feedback -->
            <div class="card">
                <h3>Student Feedback</h3>
                <p>Review feedback from your students on recent lectures.</p>
                <a href="feedback.html">View Feedback</a>
            </div>
    
    
        </div>
    </div>
    
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
        <title>Staff Dashboard</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <link rel="stylesheet" href="/public/js/schedule.js">
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
    
            /* Sidebar */
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
    
            /* Main Content */
            .main-content {
                flex: 1;
                margin-left: 60px;
                padding: 30px;
                transition: ease-in-out 0.3s;
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
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text"> Home</span></a></li>
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text"> Courses Upload</span></a></li>
            <li><a href="schedules.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Schedule Upload</span></a></li>
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
                <h3>Schedule</h3>
                <p>View and manage staff schedules</p>
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
    
        <!-- Quick Access Section -->
        <div class="header-title" style="margin-top: 40px;">Quick Access</div>
    
        <div class="dashboard-cards">
            <div class="card">
                <i class="fas fa-upload"></i>
                <h3>Upload Materials</h3>
                <p>Quickly upload lecture notes, slides, or assignments</p>
            </div>
            <div class="card">
                <i class="fas fa-users"></i>
                <h3>Student List</h3>
                <p>View enrolled students by course or batch</p>
            </div>
            <div class="card">
                <i class="fas fa-envelope"></i>
                <h3>Contact Admin</h3>
                <p>Send a message or request support from administration</p>
            </div>
        </div>
    </div>
    
    </body>
    </html>`
    }
});

