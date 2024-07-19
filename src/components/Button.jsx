import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonPrimary = ({ children, style, ...props }) => {
    return (
        <>
            <Button className='button-beranda' variant='$0066AE'>
                { children}
            </Button>
        </>
    );
};

export default ButtonPrimary;
