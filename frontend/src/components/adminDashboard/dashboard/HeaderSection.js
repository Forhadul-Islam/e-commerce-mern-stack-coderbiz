import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllUsers } from '../../../redux/actions/adminActions';

const HeaderSection = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.productReducer);
    const {users} = useSelector(state => state.adminReducer);

    useEffect(()=>{
        dispatch(loadAllUsers())
    })
    return (
        <div className="dashboard__header">
            <div className="dashboard__header--item">
                <div className="dashboard__header--item-title">
                    Total Available Courses
                </div>
                <div className="dashboard__header--item-count">
                    {products.length && products.length}
                </div>
            </div>
            <div className="dashboard__header--item">
            <div className="dashboard__header--item-title">
                    Total Course Enrolled
                </div>
                <div className="dashboard__header--item-count">
                    06
                </div>
            </div>
            <div className="dashboard__header--item">
            <div className="dashboard__header--item-title">
                    Total Users
                </div>
                <div className="dashboard__header--item-count">
                    {users?.length}
                </div>
            </div>
        </div>
    )
}

export default HeaderSection
