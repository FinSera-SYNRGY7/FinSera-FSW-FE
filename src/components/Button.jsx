import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonPrimary = () => {
    return (
        <>
            <Button className='button-beranda' variant='$0066AE'>
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                Beranda adaj
            </Button>
        </>
    );
};

export default ButtonPrimary;
