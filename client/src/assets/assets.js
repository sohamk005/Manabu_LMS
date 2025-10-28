// assets.js

// Import all image files from the assets folder
import notFound404 from './404notfound.png';
import commandsCourse from './commands_course.png';
import cppCourse from './cpp_course.png';
import creator from './creator.png';
import cssCourse from './css_course.png';
import dashboard from './dashboard.png';
import empty from './empty.png';
import features from './features.png';
import features1 from './features1.png';
import growth from './growth.png';
import hero from './hero.png';
import htmlCourse from './html_course.png';
import javaCourse from './java_course.png';
import javascriptCourse from './javascript_course.png';
import learning from './learning.png';
import logo from './logo.png';
import logoText from './logo_text.png';
import mail from './mail.png';
import maintainance from './maintainance.png';
import menuHam from './menu_ham.png';
import misc from './misc.png';
import payment from './payment.png';
import play from './play.png';
import pythonCourse from './python_course.png';
import rating from './rating.png';
import reactSvg from './react.svg';
import search from './search.png';
import sections from './sections.png';
import success from './success.png';
import user from './user.png';
import user1 from './user1.png';
import sketch from './sketch.png';
import cpp_logo from './cpp_logo.png';
import java_logo from './java_logo.png';
import python_logo from './python_logo.jpg';  
import js_logo from './js_logo.png';
import react_logo from './react_logo.png';
import flask_logo from './flask_logo.png';
import cpp_image from './cpp_image.png';
import java_image from './java_image.png';
import python_image from './python_image.png';
import star from './star.png';
import star_blank from './star_blank.png';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
import profile_img_4 from './profile_img_4.png';
import profile_img_5 from './profile_img_5.png';
import arrow from './arrow.png';
import cross_icon from './cross_icon.png';
import down_arrow_icon from './down_arrow_icon.png';
import clock from './clock.png'
import lesson from './lesson.png'
import home_icon from './home_icon.png'
import my_course from './my_course.png'
import add_icon from './add_icon.png'
import person_tick_icon from './person_tick_icon.png'
import yt_icon from './yt_icon.png'
import twitter_icon from './twitter_icon.png'
import insta_icon from './insta_icon.png'
import earnings from './earnings.png'
import file_upload_icon from './file_upload_icon.png'

// Export all imported images for easy access across the application
export const assets = {
  notFound404,
  commandsCourse,
  cppCourse,
  creator,
  cssCourse,
  dashboard,
  empty,
  features,
  features1,
  growth,
  hero,
  htmlCourse,
  javaCourse,
  javascriptCourse,
  learning,
  logo,
  logoText,
  mail,
  maintainance,
  menuHam,
  misc,
  payment,
  play,
  pythonCourse,
  rating,
  reactSvg,
  search,
  sections,
  success,
  user,
  user1,
  sketch,
  cpp_logo,
  java_logo,
  python_logo,
  js_logo,
  react_logo,
  flask_logo,
  cpp_image,
  java_image,
  python_image,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  profile_img_4,
  profile_img_5,
  arrow,
  cross_icon,
  down_arrow_icon,
  clock,
  lesson,
  home_icon,
  add_icon,
  my_course,
  person_tick_icon,
  yt_icon,
  twitter_icon,
  insta_icon,
  earnings,
  file_upload_icon
};

// This data would typically be exported from a file like:
// '../../assets/index.js' or '../../assets/dashboardData.js'

export const dummyDashboardData = {
    // Used for the "Total Enrolments" card.
    // The component accesses its length: dashboardData.enrolledStudentsData.length
    enrolledStudentsData: [
        { id: 1, name: "Alice Johnson" },
        { id: 2, name: "Bob Smith" },
        { id: 3, name: "Charlie Brown" },
        { id: 4, name: "Diana Prince" },
        { id: 5, name: "Eve Polastri" },
        { id: 6, name: "Frank Miller" },
        // ... add more students for a larger count
    ],

    // Used for the "Total Courses" card.
    // The component accesses it directly: dashboardData.totalCourses
    totalCourses: 18,

    // Used for the "Total Earnings" card.
    // The component accesses it directly: dashboardData.totalEarnings
    totalEarnings: 45789.50,

    // Add other potential dashboard data here
    recentActivity: [
        { event: "New course added: React Hooks", time: "2 hours ago" },
        { event: "Student Eve Polastri enrolled", time: "5 hours ago" },
    ],
    // ...
};

export const dummyStudentEnrolled = [
    {
        purchaseDate: '2025-10-25T10:00:00Z',
        courseTitle: 'Advanced React Hooks Masterclass',
        student: {
            name: 'Alice Johnson',
            imageUrl: 'https://i.pravatar.cc/150?img=45', // Placeholder image URL 1
        },
    },
    {
        purchaseDate: '2025-10-20T14:30:00Z',
        courseTitle: 'Full-Stack Node.js and Express',
        student: {
            name: 'Bob Smith',
            imageUrl: 'https://i.pravatar.cc/150?img=17', // Placeholder image URL 2
        },
    },
    {
        purchaseDate: '2025-09-15T08:15:00Z',
        courseTitle: 'Introduction to Python for Data Science',
        student: {
            name: 'Charlie Brown',
            imageUrl: 'https://i.pravatar.cc/150?img=52', // Placeholder image URL 3
        },
    },
    {
        purchaseDate: '2025-09-01T17:50:00Z',
        courseTitle: 'Web Design Fundamentals with Tailwind CSS',
        student: {
            name: 'Diana Prince',
            imageUrl: 'https://i.pravatar.cc/150?img=34', // Placeholder image URL 4
        },
    },
    {
        purchaseDate: '2025-08-10T11:00:00Z',
        courseTitle: 'Advanced React Hooks Masterclass',
        student: {
            name: 'Eve Polastri',
            imageUrl: 'https://i.pravatar.cc/150?img=21', // Placeholder image URL 5
        },
    },
    {
        purchaseDate: '2025-07-28T09:00:00Z',
        courseTitle: 'JavaScript ES6+ Deep Dive',
        student: {
            name: 'Frank Miller',
            imageUrl: 'https://i.pravatar.cc/150?img=67', // Placeholder image URL 6
        },
    },
    // Add more objects here as needed to fill the table
];


