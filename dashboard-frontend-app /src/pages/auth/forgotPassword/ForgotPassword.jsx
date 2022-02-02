import React, { useState } from 'react';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
// import { auth, sendPasswordResetEmail } from '../../../firebase';

const ForgotPassword = () => {
    const [emailInputText, setEmailInputText] = useState('');
    const [message, setMessage] = useState({
        msgType: '',
        msg: '',
    });
    const [loading, setLoading] = useState(false);

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();
        // try {
        //     setMessage({
        //         msg: '',
        //         msgType: '',
        //     });
        //     setLoading(true);
        //     await sendPasswordResetEmail(auth, emailInputText);
        //     setMessage({
        //         msg: 'Password Sent to your email',
        //         msgType: 'success',
        //     });
        // } catch (err) {
        //     setMessage({
        //         msg: 'Email Not found',
        //         msgType: 'danger',
        //     });
        //     setLoading(false);
        // }
    };
    return (
        <div className="container">
            <h3>Login User</h3>
            <p
                style={{
                    visibility: message.msgType !== '' ? 'visible' : 'hidden',
                }}
                className={`text-${message.msgType} text-center`}>
                {message.msg}
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
                <div className="login-utility">
                    <Button
                        type="submit"
                        mode={loading ? 'dark' : 'light'}
                        fn={forgotPasswordHandler}
                        disabled={loading}>
                        {loading ? 'Sending Mail' : 'Reset Password'}
                    </Button>
                    <Link className="auth-links" to="/auth/login">
                        Login
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

export default ForgotPassword;
