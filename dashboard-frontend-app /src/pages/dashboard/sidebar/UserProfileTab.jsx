import React from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../../assets/Images/default-user.jpeg';

const UserProfileTab = () => {
    return (
        <div className="user-profile-wrapper">
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    'user-profile' + (isActive ? ' active' : '')
                }>
                <img src={profileIcon} style={{ borderRadius: '50%' }} alt="" />
                Username
            </NavLink>
        </div>
    );
};

export default UserProfileTab;
