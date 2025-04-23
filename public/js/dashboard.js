let credential = localStorage.getItem("credentials");

document.addEventListener('DOMContentLoaded', function() {

    const contentStyle = document.getElementsByClassName("dashboard-cards");
    const content = document.getElementById("main-content");

    if (credential === "student") {
        contentStyle.display = "flex";
        contentStyle.flexWrap = "wrap";
        contentStyle.gap = "30px";
        contentStyle.width = "100%";

        content.innerHTML = 
        `
        <!-- Header Title -->
        <div class="header-title">
            Welcome, <span id="userRole">Student</span>
        </div>

        <!-- Dashboard Cards -->
        <div class="dashboard-cards">
            <div class="pay-cards">
                <h3>Payment of 2nd Year</h3>
                <p>1st Semester: <strong style="color:green;">Paid</strong></p>
                <p>2nd Semester: <strong style="color:red;">Not Paid</strong></p>
            </div>
        </div>

        `
    } 
    else if (credential === "doctor") {
        contentStyle.display = "grid";
        contentStyle.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
        contentStyle.gap = "30px";

        content.innerHTML = 
        `

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

        `
    } 
    else if (credential === "staff") {
        contentStyle.display = "flex";
        contentStyle.justifyContent = "space-between";
        contentStyle.flexWrap = "wrap";
        contentStyle.gap = "20px";
        
        content.innerHTML = 
        `

        <!-- Header Title -->
        <div class="header-title">
            Welcome, <span id="userRole">Staff Member</span>
        </div>
    
        <!-- Dashboard Cards -->
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
        
        `
    }
});

