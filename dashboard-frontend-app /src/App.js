import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Dashboard,
    Home,
    Users,
    Products,
    Orders,
    Auth,
    Login,
    Register,
    ForgotPassword,
    UserProfile,
} from './pages';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { saveUser, removeUser } from './redux/authSlice';
import './App.css';
import { auth } from './firebase';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    saveUser({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route path="auth" element={<Auth />}>
                    <Route index path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                        path="forgot_password"
                        element={<ForgotPassword />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
export default App;
