import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { saveAuthTokens, saveUser } from '../../../redux/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [usernameInputText, setUsernameInputText] = useState('');
    const [passwordInputText, setPasswordInputText] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameInputText,
                password: passwordInputText,
            }),
        });
        const data = await response.json();
        if (response.status === 200) {
            dispatch(saveAuthTokens(data));
            dispatch(saveUser(jwtDecode(data.access)));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            console.log('Something Went Wrong');
        }
    };
    return (
        <div className="container">
            <h3>Login User</h3>
            <p
                style={{ visibility: error ? 'visible' : 'hidden' }}
                className="text-danger text-center">
                {error}
            </p>
            <form>
                <div className="form-control">
                    <label>Username:</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter Username"
                        onChange={(e) => setUsernameInputText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        placeholder="Enter Password"
                        onChange={(e) => setPasswordInputText(e.target.value)}
                    />
                </div>
                <div className="login-utility">
                    <Button
                        type="submit"
                        mode={loading ? 'dark' : 'light'}
                        fn={loginHandler}
                        disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                    <Link className="auth-links" to="/auth/forgot_password">
                        Forgot Password?
                    </Link>
                </div>
            </form>
            <div>
                Don't have an Account?{' '}
                <Link className="auth-links" to="/auth/register">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Login;
