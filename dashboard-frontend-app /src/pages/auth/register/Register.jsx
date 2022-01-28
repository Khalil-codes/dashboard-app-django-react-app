import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { auth, createUserWithEmailAndPassword } from '../../../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    // const auth = getAuth();
    const [emailInputText, setEmailInputText] = useState('');
    const [passwordInputText, setPasswordInputText] = useState('');
    const [confirmPasswordInputText, setConfirmPasswordInputText] =
        useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        if (passwordInputText !== confirmPasswordInputText) {
            return setError("Password Doesn't Match");
        }
        try {
            setError('');
            setLoading(true);
            await createUserWithEmailAndPassword(
                auth,
                emailInputText,
                passwordInputText
            );
            navigate('/');
        } catch {
            setError('Some Error Occured');
            setLoading(false);
        }
    };
    // const registerHandler = async (e) => {
    //     e.preventDefault();
    //     if (passwordInputText !== confirmPasswordInputText) {
    //         return setError("Password Doesn't Match");
    //     }
    //     try {
    //         setError('');
    //         setLoading(true);
    //         await signUp();
    //         navigate('/');
    //     } catch {
    //         setError('Some Error Occured');
    //         setLoading(false);
    //     }
    // };
    return (
        <div className="container">
            <h3>Sign Up</h3>
            <p
                style={{ visibility: error ? 'visible' : 'hidden' }}
                className="text-danger text-center">
                {error}
            </p>
            <form onSubmit={registerHandler}>
                <div className="form-control">
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        placeholder="abc@xyz.com"
                        value={emailInputText}
                        onChange={(e) => setEmailInputText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        placeholder="Enter Password"
                        value={passwordInputText}
                        onChange={(e) => setPasswordInputText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={confirmPasswordInputText}
                        onChange={(e) =>
                            setConfirmPasswordInputText(e.target.value)
                        }
                    />
                </div>
                <Button
                    type="submit"
                    mode={loading ? 'dark' : 'light'}
                    fn={registerHandler}
                    disabled={loading}>
                    {loading ? 'Signing up...' : 'Signup'}
                </Button>
            </form>
            <div className="w-100 text-center text-muted mt-2">
                Already have an Account?
                <Link
                    style={{
                        color: '#0d6efd',
                        textDecoration: 'underline',
                    }}
                    to="/auth/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Register;
