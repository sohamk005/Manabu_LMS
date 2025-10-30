# Manabu: A Modern Full-Stack Learning Management System

## ✨ Overview

Manabu (学ぶ), Japanese for "**to learn**," is a modern, full-stack Learning Management System (LMS) designed for a smart, minimal, and personalized educational experience. This platform enables educators to host, manage, and sell interactive courses, while providing students with a seamless learning environment.

### 🚀 Live Demonstration

| Component | URL | Status | 
 | ----- | ----- | ----- | 
| Frontend (Main Application) | `https://manabu-lms-frontend.vercel.app/` | Deployed on Vercel | 
| Backend (API Base URL) | `https://manabu-lms-backend.vercel.app/` | Deployed on Vercel | 

## 🛠️ Technology Stack (MERN + Extras)

| Category | Technology | Purpose | 
 | ----- | ----- | ----- | 
| **Frontend** | React (Vite), React Router, **Tailwind CSS** | Fast, responsive UI with efficient routing and styling. | 
| **Backend** | Node.js, Express.js | Robust REST API server. | 
| **Database** | **MongoDB (Mongoose)** | Flexible NoSQL data storage for courses, users, and enrollments. | 
| **Authentication** | **Clerk** | Secure, scalable user authentication and authorization (Student/Educator roles). | 
| **Payments** | **Stripe** (Test Mode) | Payment processing for course purchases via webhooks. | 
| **File Storage** | **Cloudinary** | Cloud storage for course image thumbnails and other assets. | 
| **Deployment** | **Vercel** | Seamless CI/CD for both frontend and backend. | 

## 🔑 Key Features

### 🧑‍💻 Core Functionality

* **Role-Based Access:** Distinct user experiences for Students and Educators.

* **Course Catalog:** Browse and search for courses.

* **Secure Enrollment:** Student access to courses is protected post-enrollment.

* **Content Player:** Dedicated player for viewing course lectures (as seen in `/player/:courseId`).

### 💰 Commerce & Security

* **Stripe Integration:** Handles secure course purchases using the Stripe API.

* **Webhooks:** Uses Stripe and Clerk webhooks for real-time transaction and user data synchronization with the MongoDB database.

* **Clerk Auth Middleware:** Utilizes Clerk for highly secure JWT tokens and role-based protection (e.g., `protectEducator` middleware).

### 👩‍🏫 Educator Features

* **Dashboard:** Overview of course performance and enrolled students.

* **Course Creation:** Dedicated interface for adding new courses with image upload (via Cloudinary and Multer).

* **Student Tracking:** View and manage students enrolled in their specific courses.

## 🗺️ Routing Structure

The application uses **React Router** with nested and role-based routing.

| Path | Access | Component | Description | 
 | ----- | ----- | ----- | ----- | 
| `/` | Public | Home | Landing page and course showcase. | 
| `/course-list` | Public | CoursesList | All available courses. | 
| `/course/:id` | Public | CourseDetails | Detailed course information and purchase link. | 
| `/my-enrollments` | Student (Auth) | MyEnrollments | List of courses the user has purchased. | 
| `/player/:courseId` | Student (Auth) | Player | Course content lecture player. | 
| `/educator` | Educator (Auth) | Dashboard (Layout) | Educator management dashboard. | 
| `/educator/add-course` | Educator (Auth) | AddCourse | Form to upload and publish new courses. | 
| `/educator/my-courses` | Educator (Auth) | MyCourses | List of courses managed by the educator. | 