import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CourseItemCard from './CourseItemCard';

const Courses = () => {
    const {products} = useSelector(state => state.productReducer)
    const [courses,] = useState(products)

    return (
        <div className="courses">
            <div className="courses__title">
                Our Top Courses
            </div>            
            <div className="courses__title--underline" />
            <div className="courses__container">
                {
                    products.map(course =>(
                        // <CourseItem
                        //     key={course._id}
                        //     id={course._id}
                        //     title={course.title}
                        //     image={course.image}
                        //     description={course.description}
                        //     price={course.price}
                        //     sale ={course.sale}
                        // />
                        <CourseItemCard 
                        key={course._id}
                            id={course._id}
                            title={course.title}
                            image={course.image}
                            description={course.description}
                            price={course.price}
                            sale ={course.sale}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Courses
