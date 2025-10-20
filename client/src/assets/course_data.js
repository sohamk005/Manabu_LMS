import { assets } from "./assets";
export const Courses = [
  // ====================================================================
  // 1. C++ Programming Fundamentals
  // ====================================================================
  {
    _id: "cpp_6f9a0c7e2b3f1c2b",
    courseTitle: "C++ Masterclass: From Beginner to Advanced OOP",
    courseDescription: "<h2>Build High-Performance Applications</h2><p>C++ is the backbone of modern software engineering, powering operating systems, game engines, and high-frequency trading platforms. This course is a comprehensive journey covering C++ fundamentals, advanced data structures, and Object-Oriented Programming (OOP) concepts.</p><ul><li>Master Pointers and Memory Management</li><li>Learn Modern C++ (C++17 and C++20) features</li><li>Build efficient data structures and algorithms</li></ul>",
    coursePrice: 790.99,
    isPublished: true,
    discount: 15, // 15% discount
    courseContent: [
      {
        chapterId: "ch_cpp_1",
        chapterOrder: 1,
        chapterTitle: "Getting Started and Basic Syntax",
        chapterContent: [
          { lectureId: "lec_cpp_1_1", lectureTitle: "Setup: Visual Studio Code & GCC", lectureDuration: 12, lectureUrl: "nLRL_NcnK-4", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_cpp_1_2", lectureTitle: "Variables, Data Types, and Operators", lectureDuration: 18, lectureUrl: "https://youtu.be/CPP1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: "ch_cpp_2",
        chapterOrder: 2,
        chapterTitle: "Object-Oriented Programming (OOP) in C++",
        chapterContent: [
          { lectureId: "lec_cpp_2_1", lectureTitle: "Classes, Objects, and Constructors", lectureDuration: 25, lectureUrl: "https://youtu.be/CPP2A", isPreviewFree: false, lectureOrder: 1 }
        ]
      }
    ],
    educator: "Soham K", // Replace with actual educator ID from your user data
    enrolledStudents: ["user_A", "user_B", "user_C"],
    courseRatings: [
      { userId: "user_A", rating: 5, _id: "rating_cpp_1" },
      { userId: "user_B", rating: 4, _id: "rating_cpp_2" }
    ],
    createdAt: "2024-08-10T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.cpp_image // Placeholder
  },

  // ====================================================================
  // 2. Java Development for Enterprise
  // ====================================================================
  {
    _id: "java_b4d3e2c1a0f9b8c7",
    courseTitle: "Java Spring Boot: Building RESTful APIs",
    courseDescription: "<h2>Master Backend Development with Spring</h2><p>Learn to build scalable, robust enterprise applications using Java and the powerful Spring Boot framework. This course focuses on microservices architecture, data persistence with JPA/Hibernate, and security.</p><ul><li>Develop RESTful Web Services</li><li>Implement Database Interaction with Spring Data JPA</li><li>Handle Security with Spring Security</li></ul>",
    coursePrice: 990.00,
    isPublished: true,
    discount: 20, // 20% discount
    courseContent: [
      {
        chapterId: "ch_java_1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Spring Boot",
        chapterContent: [
          { lectureId: "lec_java_1_1", lectureTitle: "Setting up your Development Environment", lectureDuration: 15, lectureUrl: "https://youtu.be/JAVA1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_java_1_2", lectureTitle: "Your First Controller and API", lectureDuration: 20, lectureUrl: "https://youtu.be/JAVA1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: "Soham K",
    enrolledStudents: ["user_D", "user_E"],
    courseRatings: [
      { userId: "user_D", rating: 5, _id: "rating_java_1" }
    ],
    createdAt: "2024-09-15T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.java_image // Placeholder
  },

  // ====================================================================
  // 3. Python for Data Science
  // ====================================================================
  {
    _id: "py_a1b2c3d4e5f6g7h8",
    courseTitle: "Python Data Science: Pandas, NumPy, and Matplotlib",
    courseDescription: "<h2>Analyze Data Like a Pro</h2><p>Dive deep into Python's powerful ecosystem for data science. This course focuses on essential libraries—Pandas for data manipulation, NumPy for numerical operations, and Matplotlib/Seaborn for visualization.</p><ul><li>Clean and prepare data using Pandas</li><li>Perform array computing with NumPy</li><li>Create stunning data visualizations</li></ul>",
    coursePrice: 590.99,
    isPublished: true,
    discount: 0, // No discount
    courseContent: [
      {
        chapterId: "ch_py_1",
        chapterOrder: 1,
        chapterTitle: "Python Environment and Basics",
        chapterContent: [
          { lectureId: "lec_py_1_1", lectureTitle: "Installing Anaconda and Jupyter", lectureDuration: 10, lectureUrl: "https://youtu.be/PYA1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_py_1_2", lectureTitle: "Introduction to NumPy Arrays", lectureDuration: 15, lectureUrl: "https://youtu.be/PYA1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: "Soham K",
    enrolledStudents: ["user_F", "user_G", "user_H", "user_I"],
    courseRatings: [
      { userId: "user_F", rating: 4, _id: "rating_py_1" },
      { userId: "user_G", rating: 5, _id: "rating_py_2" },
      { userId: "user_H", rating: 5, _id: "rating_py_3" }
    ],
    createdAt: "2024-07-20T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.python_image // Placeholder
  },
   {
    _id: "cpp_6f9a0c7e2b3f1c2b",
    courseTitle: "C++ Masterclass: From Beginner to Advanced OOP",
    courseDescription: "<h2>Build High-Performance Applications</h2><p>C++ is the backbone of modern software engineering, powering operating systems, game engines, and high-frequency trading platforms. This course is a comprehensive journey covering C++ fundamentals, advanced data structures, and Object-Oriented Programming (OOP) concepts.</p><ul><li>Master Pointers and Memory Management</li><li>Learn Modern C++ (C++17 and C++20) features</li><li>Build efficient data structures and algorithms</li></ul>",
    coursePrice: 790.99,
    isPublished: true,
    discount: 15, // 15% discount
    courseContent: [
      {
        chapterId: "ch_cpp_1",
        chapterOrder: 1,
        chapterTitle: "Getting Started and Basic Syntax",
        chapterContent: [
          { lectureId: "lec_cpp_1_1", lectureTitle: "Setup: Visual Studio Code & GCC", lectureDuration: 12, lectureUrl: "https://youtu.be/CPP1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_cpp_1_2", lectureTitle: "Variables, Data Types, and Operators", lectureDuration: 18, lectureUrl: "https://youtu.be/CPP1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: "ch_cpp_2",
        chapterOrder: 2,
        chapterTitle: "Object-Oriented Programming (OOP) in C++",
        chapterContent: [
          { lectureId: "lec_cpp_2_1", lectureTitle: "Classes, Objects, and Constructors", lectureDuration: 25, lectureUrl: "https://youtu.be/CPP2A", isPreviewFree: false, lectureOrder: 1 }
        ]
      }
    ],
    educator: "Soham K", // Replace with actual educator ID from your user data
    enrolledStudents: ["user_A", "user_B", "user_C"],
    courseRatings: [
      { userId: "user_A", rating: 5, _id: "rating_cpp_1" },
      { userId: "user_B", rating: 4, _id: "rating_cpp_2" }
    ],
    createdAt: "2024-08-10T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.cpp_image // Placeholder
  },
   {
    _id: "cpp_6f9a0c7e2b3f1c2b",
    courseTitle: "C++ Masterclass: From Beginner to Advanced OOP",
    courseDescription: "<h2>Build High-Performance Applications</h2><p>C++ is the backbone of modern software engineering, powering operating systems, game engines, and high-frequency trading platforms. This course is a comprehensive journey covering C++ fundamentals, advanced data structures, and Object-Oriented Programming (OOP) concepts.</p><ul><li>Master Pointers and Memory Management</li><li>Learn Modern C++ (C++17 and C++20) features</li><li>Build efficient data structures and algorithms</li></ul>",
    coursePrice: 790.99,
    isPublished: true,
    discount: 15, // 15% discount
    courseContent: [
      {
        chapterId: "ch_cpp_1",
        chapterOrder: 1,
        chapterTitle: "Getting Started and Basic Syntax",
        chapterContent: [
          { lectureId: "lec_cpp_1_1", lectureTitle: "Setup: Visual Studio Code & GCC", lectureDuration: 12, lectureUrl: "https://youtu.be/CPP1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_cpp_1_2", lectureTitle: "Variables, Data Types, and Operators", lectureDuration: 18, lectureUrl: "https://youtu.be/CPP1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: "ch_cpp_2",
        chapterOrder: 2,
        chapterTitle: "Object-Oriented Programming (OOP) in C++",
        chapterContent: [
          { lectureId: "lec_cpp_2_1", lectureTitle: "Classes, Objects, and Constructors", lectureDuration: 25, lectureUrl: "https://youtu.be/CPP2A", isPreviewFree: false, lectureOrder: 1 }
        ]
      }
    ],
    educator: "Soham K", // Replace with actual educator ID from your user data
    enrolledStudents: ["user_A", "user_B", "user_C"],
    courseRatings: [
      { userId: "user_A", rating: 5, _id: "rating_cpp_1" },
      { userId: "user_B", rating: 4, _id: "rating_cpp_2" }
    ],
    createdAt: "2024-08-10T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.cpp_image // Placeholder
  },
   {
    _id: "cpp_6f9a0c7e2b3f1c2b",
    courseTitle: "C++ Masterclass: From Beginner to Advanced OOP",
    courseDescription: "<h2>Build High-Performance Applications</h2><p>C++ is the backbone of modern software engineering, powering operating systems, game engines, and high-frequency trading platforms. This course is a comprehensive journey covering C++ fundamentals, advanced data structures, and Object-Oriented Programming (OOP) concepts.</p><ul><li>Master Pointers and Memory Management</li><li>Learn Modern C++ (C++17 and C++20) features</li><li>Build efficient data structures and algorithms</li></ul>",
    coursePrice: 790.99,
    isPublished: true,
    discount: 15, // 15% discount
    courseContent: [
      {
        chapterId: "ch_cpp_1",
        chapterOrder: 1,
        chapterTitle: "Getting Started and Basic Syntax",
        chapterContent: [
          { lectureId: "lec_cpp_1_1", lectureTitle: "Setup: Visual Studio Code & GCC", lectureDuration: 12, lectureUrl: "https://youtu.be/CPP1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_cpp_1_2", lectureTitle: "Variables, Data Types, and Operators", lectureDuration: 18, lectureUrl: "https://youtu.be/CPP1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: "ch_cpp_2",
        chapterOrder: 2,
        chapterTitle: "Object-Oriented Programming (OOP) in C++",
        chapterContent: [
          { lectureId: "lec_cpp_2_1", lectureTitle: "Classes, Objects, and Constructors", lectureDuration: 25, lectureUrl: "https://youtu.be/CPP2A", isPreviewFree: false, lectureOrder: 1 }
        ]
      }
    ],
    educator: "Soham K", // Replace with actual educator ID from your user data
    enrolledStudents: ["user_A", "user_B", "user_C"],
    courseRatings: [
      { userId: "user_A", rating: 5, _id: "rating_cpp_1" },
      { userId: "user_B", rating: 4, _id: "rating_cpp_2" }
    ],
    createdAt: "2024-08-10T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.cpp_image // Placeholder
  },
    {
    _id: "java_b4d3e2c1a0f9b8c7",
    courseTitle: "Java Spring Boot: Building RESTful APIs",
    courseDescription: "<h2>Master Backend Development with Spring</h2><p>Learn to build scalable, robust enterprise applications using Java and the powerful Spring Boot framework. This course focuses on microservices architecture, data persistence with JPA/Hibernate, and security.</p><ul><li>Develop RESTful Web Services</li><li>Implement Database Interaction with Spring Data JPA</li><li>Handle Security with Spring Security</li></ul>",
    coursePrice: 990.00,
    isPublished: true,
    discount: 20, // 20% discount
    courseContent: [
      {
        chapterId: "ch_java_1",
        chapterOrder: 1,
        chapterTitle: "Introduction to Spring Boot",
        chapterContent: [
          { lectureId: "lec_java_1_1", lectureTitle: "Setting up your Development Environment", lectureDuration: 15, lectureUrl: "https://youtu.be/JAVA1A", isPreviewFree: true, lectureOrder: 1 },
          { lectureId: "lec_java_1_2", lectureTitle: "Your First Controller and API", lectureDuration: 20, lectureUrl: "https://youtu.be/JAVA1B", isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: "Soham K",
    enrolledStudents: ["user_D", "user_E"],
    courseRatings: [
      { userId: "user_D", rating: 5, _id: "rating_java_1" }
    ],
    createdAt: "2024-09-15T10:00:00.000Z",
    updatedAt: "2025-01-01T12:00:00.000Z",
    courseImage: assets.java_image // Placeholder
  },
];

// Helper data for the educator (Soham K)
export const Educators = {
    "sohamk_educator_id": {
        _id: "sohamk_educator_id",
        name: "Soham K",
        bio: "Full-stack developer and MERN stack expert with 5+ years of teaching experience. Dedicated to making complex technical concepts easy to understand.",
        profileImage: assets.sohamk_profile, // Placeholder
        socials: {
            linkedin: "link_to_soham_linkedin",
            github: "link_to_soham_github",
        }
    }
}