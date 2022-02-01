import React from 'react';
import './TopBar.css';

import { Logout, Settings } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthTokens, removeUser } from '../../../redux/authSlice';

const TopBar = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.user.user);
    const logoutHandler = async () => {
        dispatch(removeUser());
        dispatch(removeAuthTokens());
        localStorage.removeItem('authTokens');
    };
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Adminy</span>
                </div>
                <div className="top-right">
                    <div className="topbar-welcome-text">
                        Welcome, {currentUser?.username}
                    </div>
                    <div className="topbar-icons-container">
                        <div className="topbar-icon-container">
                            <Settings className="topbar-icon" />
                        </div>
                        <div
                            className="topbar-icon-container"
                            onClick={logoutHandler}>
                            <Logout className="topbar-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
