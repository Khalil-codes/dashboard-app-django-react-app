import React from 'react';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import TopBar from './topbar/TopBar';
import SideBar from './sidebar/SideBar';

const Dashboard = () => {
    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;
