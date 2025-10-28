import { assets } from "./assets"; // Assuming you have an assets file for images

const dummyDashboardData = {
    enrolledStudentsData: [
        {
            student: { 
                id: 1, 
                name: "Alice Johnson", 
                imageUrl: assets.profile_img_1 // 👈 ADDED IMAGE URL
            }, 
            courseTitle: "C++ Masterclass: Advanced OOP" // 👈 ADDED COURSE TITLE
        },
        {
            student: { 
                id: 2, 
                name: "Bob Smith", 
                imageUrl: assets.profile_img_2 
            }, 
            courseTitle: "Python Data Science: NumPy & Pandas"
        },
        {
            student: { 
                id: 3, 
                name: "Charlie Brown", 
                imageUrl: assets.profile_img_3
            }, 
            courseTitle: "Java Spring Boot: REST APIs"
        },
        {
            student: { 
                id: 4, 
                name: "Diana Prince", 
                imageUrl: assets.profile_img_4
            }, 
            courseTitle: "C++ Masterclass: Advanced OOP" 
        },
        // ... add more students 
    ],

    totalCourses: 18,
    totalEarnings: 45789.50,
    
    // This is good practice for the table's index column
    totalStudents: 6, 

    recentActivity: [
        { event: "New course added: React Hooks", time: "2 hours ago" },
        { event: "Student Eve Polastri enrolled", time: "5 hours ago" },
    ],
};

export default dummyDashboardData;