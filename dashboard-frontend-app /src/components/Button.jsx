import React from 'react';
import './Button.css';

const Button = ({ type, children, mode, fn, disabled, className }) => {
    return (
        <button
            type={type}
            className={`btn btn-${mode} ${className}`}
            onClick={fn}
            disabled={disabled}>
            {children}
        </button>
    );
};
Button.defaultProps = {
    className: '',
    type: 'button',
    mode: 'light',
    disabled: false,
    fn: () => {
        return;
    },
};

export default Button;
