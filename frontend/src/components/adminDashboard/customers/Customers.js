import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAllUsers } from '../../../redux/actions/adminActions';
import InfoTable from './InfoTable';

const Customers = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadAllUsers())
    }, [])
    return (
        <div className="customers">
            <div className="customers__title">
                All Users Information
            </div>
            <div className="customers__info">
                <InfoTable />
            </div>
        </div>
    )
}

export default Customers
