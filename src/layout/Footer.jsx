import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';

import logobcawhite from '../assets/img/logobcawhite.png';
import logoInstagram from '../assets/logo/instagram.png';
import logoGmail from '../assets/logo/gmail.png';
import logoPhone from '../assets/logo/phone.png';
import logoWhatsapp from '../assets/logo/whatsapp.png';



const Footer = () => {
  return (
    <div>
      <Navbar>
        <Container fluid>
          <Card.Footer style={{ borderRight: '1px solid white', borderTop: 'none', paddingRight: '50px' }}>
            <img src={logobcawhite} className="logo-footer" alt="bca logo" />
          </Card.Footer>
          <div className='d-flex justify-content-between' style={{ flex: '1' }}>
            <div className='text-start text-white ms-4'>
              <div>
                Need Help ?
              </div>
              <div>
                <small>
                  We are here to help you. Just contact us.
                </small>
              </div>
            </div>
            <div className='logo-list d-flex align-items-center' style={{ gap: '20px' }}>
              <img className="footer-icon-phone" src={logoPhone} alt="logo phone" />
              <img className="footer-icon" src={logoWhatsapp} alt="logo wa" />
              <img className="footer-icon" src={logoInstagram} alt="logo ig" />
              <img className="footer-icon" src={logoGmail} alt="logo gmail" />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer;