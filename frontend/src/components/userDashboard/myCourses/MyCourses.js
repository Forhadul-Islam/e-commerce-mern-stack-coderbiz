import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyCoursesItem from './MyCoursesItem';

const MyCourses = () => {
    const dispatch = useDispatch();
    const {coursesOwned} = useSelector(state => state.userReducer.user);
    return (
        <div className="my-courses">
            <div className="my-courses__title">
               ⏳ 🎆 Currently you have the following <span className="my-courses__title--course-count">{ coursesOwned?.length }</span> course! 🚀
            </div>
            <div className="my-courses__item">
            {
                coursesOwned?.map(course => (
                    <MyCoursesItem
                        title={course.title}
                        instructor = {course.instructor}
                        image ={course.image}
                        description={course.description}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default MyCourses
