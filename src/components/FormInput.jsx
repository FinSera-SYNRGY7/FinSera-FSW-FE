import React from 'react';

const FormInput = ({ className, children, ...props }) => {
    return (
        <div className={`form-group ${className}`} {...props}>
            {children}
        </div>
    );
};

export {
    FormInput
};