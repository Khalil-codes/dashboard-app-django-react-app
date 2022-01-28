import React from 'react';
import './SideBar.css';

import SidebarMenu from './SidebarMenu';
import UserProfileTab from './UserProfileTab';
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <UserProfileTab />
                <SidebarMenu />
            </div>
        </div>
    );
};

export default SideBar;
