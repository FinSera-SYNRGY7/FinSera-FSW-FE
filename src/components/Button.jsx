import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonPrimary = ({ children, style, ...props }) => {
    return (
        <>
            <Button variant='primary' style={style} {...props}>
                {children}
            </Button>
        </>
    );
};

export default ButtonPrimary;
