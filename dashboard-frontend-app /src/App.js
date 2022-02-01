import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const user = useSelector((state) => state.user.user);
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? (
                            <Dashboard />
                        ) : (
                            <Navigate replace to="/auth/login" />
                        )
                    }>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route
                    path="auth"
                    element={!user ? <Auth /> : <Navigate replace to="/" />}>
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
