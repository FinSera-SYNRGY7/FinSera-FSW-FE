import React from 'react'
// import Button from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const SumberRekening = () => {

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h4>Sumber Rekening</h4>
                    <br />
                    <span>1234567890</span>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
};

export default SumberRekening;

