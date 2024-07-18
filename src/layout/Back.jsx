import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Back() {
    return (
        <>
            <Button variant="outline-primary">
                <FontAwesomeIcon icon={faArrowLeft} className="button-beranda" />
                Beranda
            </Button>{' '}
        </>
    );
}

export default Back;