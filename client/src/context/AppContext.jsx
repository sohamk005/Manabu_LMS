import { createContext, useEffect, useState } from "react";
import { Courses } from "../assets/course_data.js";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY || '$';

    const navigate = useNavigate()
    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);

    const fetchAllCourses = async () => {
        setAllCourses(Courses)
    }

    const calculateRating = (course) => {
    const ratings = Array.isArray(course?.courseRatings) ? course.courseRatings : [];
    if (ratings.length === 0) return 0;

    let totalRating = 0;
    ratings.forEach(rating => {
        totalRating += rating.rating;
    });

    return (totalRating / ratings.length).toFixed(1);
};


    useEffect(() => {
        fetchAllCourses();
    }, [])
    const value = {
            currency, allCourses, navigate, calculateRating, 
            isEducator, setIsEducator

        }

    return (        
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}