import React from 'react'
// import Button from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import "@/components/sumberrekening/SumberRekeningStyle.css";



const SumberRekening = ({ norek }) => {

    return (
        <div className='d-flex align-items-end'>
            <Accordion className='dropdown-sumberrekening'>
                <Accordion.Item>
                    <Accordion.Header>
                        <div>
                            <p className='text-sumber-rekening' >Sumber Rekening</p>
                            <p className='txt-norek' >{norek}</p>
                        </div>
                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default SumberRekening;

