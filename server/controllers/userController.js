import Course from "../models/Course.js"
import { CourseProgress } from "../models/CourseProgress.js";
import { Purchase } from "../models/Purchase.js"
import User from "../models/User.js"
import Stripe from "stripe";

export const getUserData = async (req, res) => {
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId)

        if(!user){
            return res.json({success: false, message: 'User Not Found!'})
        }

        res.json({success: true, user})

    } catch (error){
        res.json({success: false, message: error.message})
    }
}

//user enrolled course with links to lecture

export const userEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses')
        if (!userData) {
            return res.status(404).json({ 
                success: false, 
                message: 'Authenticated user not found in the database.' 
            });
        }

        res.json({success: true, enrolledCourses: userData.enrolledCourses})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

//Payment for course -- 

export const purchaseCourse = async (req, res) => {
    try {
        const { courseId } = req.body
        const { origin } = req.headers
        const userId = req.auth.userId
        const userData = await User.findById(userId)
        const courseData = await Course.findById(courseId)


        if(!userData || !courseData){
            return res.json({success: false, message: 'Data Not Found!'})
        }

        const purchaseData = {
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),

        }

        const newPurchase = await Purchase.create(purchaseData)

        //Stripe gateway init - 
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

        const currency = process.env.CURRENCY.toLowerCase()

        //line items
        const line_items = [{
            price_data: {
                currency,
                product_data: {
                    name: courseData.courseTitle
                },
                unit_amount: Math.floor(newPurchase.amount) * 100
            },
            quantity: 1
        }]

        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url: `${origin}/`,
            line_items: line_items,
            mode: 'payment',
            metadata: {
                purchaseId: newPurchase._id.toString()
            }
        })

        res.json({success: true, session_url: session.url})


    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Update User Course Progress
export const updateUserCourseProgress = async (req, res) => {
    try {
        const userId = req.auth.userId;
        const { courseId, lectureId } = req.body;
        
        // Try to find an existing progress document for this user and course
        const progressData = await CourseProgress.findOne({ userId, courseId });

        // If a progress document already exists:
        if (progressData) {
            // Check if the lecture is already marked as completed
            if (progressData.lectureCompleted.includes(lectureId)) {
                return res.json({ success: true, message: 'Lecture Already Completed' });
            }
            
            // If not completed, push the new lectureId to the array
            progressData.lectureCompleted.push(lectureId);
            
            // Save the updated progress document
            await progressData.save();
        } 
        
        // If no progress document exists (first lecture being completed):
        else {
            await CourseProgress.create({
                userId,
                courseId,
                lectureCompleted: [lectureId] // Create the document with the first lecture ID
            });
        }
        
        // Send a successful response after saving/creating
        res.json({ success: true, message: 'Progress Updated' });

    } catch (error) {
        // Handle any errors during the process
        res.json({ success: false, message: error.message });
    }
};

// get User Course Progress
export const getUserCourseProgress = async (req, res) => {
    try {
        const userId = req.auth.userId;
        const { courseId } = req.body;
        
        // Find the progress document for the given user and course
        const progressData = await CourseProgress.findOne({ userId, courseId });
        
        // Send the found progress data back to the client
        res.json({ success: true, progressData });
        
    } catch (error) {
        // Handle any errors during the process
        res.json({ success: false, message: error.message });
    }
};

export const addUserRating = async (req, res) => {
    const userId = req.auth.userId;
    const { courseId, rating } = req.body;

    // 1. Initial Validation: Check for missing data or invalid rating range
    if (!courseId || !userId || !rating || rating < 1 || rating > 5) {
        return res.json({ success: false, message: 'Invalid Details' });
    }

    try {
        // 2. Find Course
        const course = await Course.findById(courseId);

        if (!course) {
            return res.json({ success: false, message: 'Course not found.' });
        }

        // 3. Find User
        const user = await User.findById(userId);

        // 4. Enrollment Check: Ensure the user exists and is enrolled in the course
        if (!user || !user.enrolledCourses.includes(courseId)) {
            return res.json({ success: false, message: 'User has not purchased this course.' });
        }

        // 5. Check if rating already exists
        const existingRatingIndex = course.courseRatings.findIndex(r => r.userId === userId);

        // 6. Update or Add Rating
        if (existingRatingIndex > -1) {
            // Update existing rating
            course.courseRatings[existingRatingIndex].rating = rating;
        } else {
            // Add new rating
            course.courseRatings.push({ userId, rating });
        }

        // 7. Save and Respond
        await course.save();

        return res.json({ success: true, message: 'Rating added' });

    } catch (error) {
        // 8. Error Handling
        res.json({ success: false, message: error.message });
    }
};