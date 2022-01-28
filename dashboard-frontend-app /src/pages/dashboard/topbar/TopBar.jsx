import React from 'react';
import './TopBar.css';

import { Logout, Settings } from '@mui/icons-material';
// import { useSelector } from 'react-redux';
// import { signOut } from 'firebase/auth';
// import { removeUser } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth, signOut } from '../../../firebase';

const TopBar = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.user.user);
    const logoutHandler = async () => {
        await signOut(auth);
        navigate('./auth/login');
    };
    // const logoutHandler = async () => {
    //     try {
    //         await logOut();
    //         // navigate('/auth/login');
    //         dispatch(removeUser());
    //     } catch {
    //         console.log('hi');
    //     }
    //     dispatch(removeUser());
    // };
    // const currentUser = selectUser();

    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Adminy</span>
                </div>
                <div className="top-right">
                    <div className="topbar-welcome-text">
                        Welcome, {currentUser?.email}
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
