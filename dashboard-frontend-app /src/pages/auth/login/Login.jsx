import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithEmailAndPassword } from '../../../firebase';
import { useSelector } from 'react-redux';
const Login = () => {
    // const auth = getAuth();
    const [emailInputText, setEmailInputText] = useState('');
    const [passwordInputText, setPasswordInputText] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.user);

    useEffect(() => {
        if (currentUser) navigate('/');
    }, [currentUser]);

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(
                auth,
                emailInputText,
                passwordInputText
            );
            navigate('/');
        } catch (err) {
            setError('Incorrect Credentails');
            setLoading(false);
        }
    };
    // const loginHandler = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         setError('');
    //         await login(emailInputText, passwordInputText);
    //         navigate('/');
    //     } catch {
    //         setError('Incorrect Credentials');
    //         setLoading(false);
    //     }
    // };
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
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        placeholder="abc@xyz.com"
                        onChange={(e) => setEmailInputText(e.target.value)}
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
