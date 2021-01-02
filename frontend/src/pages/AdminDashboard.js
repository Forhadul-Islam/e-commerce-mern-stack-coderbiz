import React from 'react'
import AdminDashboardTemplate from '../components/adminDashboard/AdminDashboardTemplate'
import CheckUser from '../util/CheckUser'

const AdminDashboard = () => {
    return (
        <>
            <CheckUser />
            <AdminDashboardTemplate />
        </>
    )
}

export default AdminDashboard
