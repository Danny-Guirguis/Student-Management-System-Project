let credential = localStorage.getItem("credentials");
if (credential === "student") {
    document.body.innerHTML = `
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
        background:#004080;
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

    /* Expand Sidebar on Hover */
    .sidebar:hover {
        width: 220px;
    }

    /* Sidebar Logo */
    .sidebar-header {
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }

    .sidebar-header img {
        width: 45px;
    }

    /* Sidebar Menu */
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

    /* Responsive for smaller screens */
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
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text"> Home</span></a></li>
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text"> Courses</span></a></li>
            <li><a href="payments.html"><i class="fas fa-credit-card"></i><span class="menu-text"> Payment</span></a></li>
            <li><a href="schedules.html"><i class="fas fa-calendar"></i><span class="menu-text"> Schedule</span></a></li>
        </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div class="header-title">
            Welcome, <span id="userRole">Student</span>
        </div>

        <!-- Dashboard Cards -->
        <div class="dashboard-cards">
            <div class="card">
                <i class="fas fa-calendar-alt"></i>
                <h3>My Schedule</h3>
                <p>View your course schedule</p>
            </div>
            <div class="card">
                <i class="fas fa-book"></i>
                <h3>My Courses</h3>
                <p>Access your course materials</p>
            </div>
            <div class="card">
                <i class="fas fa-credit-card"></i>
                <h3>Payments</h3>
                <p>Manage your payments</p>
            </div>
        </div>
    </div>`
} 
else if (credential === "doctor") {
    document.body.innerHTML = ``
} 
else if (credential === "staff") {
    document.body.innerHTML = `
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
        background: #2C3E50;
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

    /* Expand Sidebar on Hover */
    .sidebar:hover {
        width: 220px;
    }

    /* Sidebar Logo */
    .sidebar-header {
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }

    .sidebar-header img {
        width: 45px;
    }

    /* Sidebar Menu */
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

    /* Schedule Cards */
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

    /* Schedule Form */
    .upload-section {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .upload-section input {
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .upload-section button {
        padding: 10px 20px;
        background-color: #2C3E50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .upload-section button:hover {
        background-color: #2C3E50;
    }

    /* Responsive for smaller screens */
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
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="./assets/samslogopng.png" alt="Logo">
        </div>
        <ul class="menu">
            <li><a href="homepage.html"><i class="fas fa-home"></i><span class="menu-text"> Home</span></a></li>
            <li><a href="dashboard.html"><i class="fas fa-calendar-check"></i><span class="menu-text"> Dashboard</span></a></li>
            <li><a href="courses.html"><i class="fas fa-book"></i><span class="menu-text"> Courses</span></a></li>
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
            <h3>Upload Schedule Image</h3>
            <input type="file" name="schedule" id="schedule-file">
            <button onclick="uploadSchedule()">Upload</button>
        </div>
    </div>

    <script>
        function uploadSchedule() {
            let file = document.getElementById('schedule-file').files[0];
            if (file) {
                alert('Schedule file uploaded: ' + file.name);
                // You can add the actual upload logic here
            } else {
                alert('Please select a file to upload');
            }
        }
    </script>`
}