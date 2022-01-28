import React from 'react';
import './Dashboard.css';
import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import TopBar from './topbar/TopBar';
import SideBar from './sidebar/SideBar';
// import { useAuth } from '../../firebase';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const currentUser = useSelector((state) => state.user.user);
    // const currentUser = selectUser();
    return currentUser ? (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/auth/login" replace />
    );
};

export default Dashboard;
