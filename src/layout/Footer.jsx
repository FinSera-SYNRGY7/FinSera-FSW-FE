import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

import logoFinseraPutih from "@/assets/img/logoFinseraPutih.svg";
import logoFinsera from "@/assets/img/logoFinsera.svg";
import logobcawhite from "@/assets/img/logobcawhite.png";
import logoInstagram from "@/assets/logo/instagram.png";
import logoGmail from "@/assets/logo/gmail.png";
import logoPhone from "@/assets/logo/phone.png";
import logoWhatsapp from "@/assets/logo/whatsapp.png";
import styles from "@/assets/css/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <Navbar>
        <Container fluid className={styles.containerFluid}>
          <Card.Footer
            className={styles.cardFooter}
            style={{
              borderRight: "1px solid white",
              borderTop: "none",
              paddingRight: "50px",
            }}
          >
            <img
              src={logoFinseraPutih}
              className="logo-footer"
              alt="finsera logo"
            />
          </Card.Footer>
          <div
            className={` ${styles.bodyContent} d-flex justify-content-between`}
            style={{ flex: "1" }}
          >
            <div className={` ${styles.textStart} text-start text-white ms-4`}>
              <div>Butuh Bantuan ?</div>
              <div>
                <small>
                  Kami di sini untuk membantu Anda. Cukup hubungi kami.
                </small>
              </div>
            </div>
            <div
              className={` ${styles.logoList} logo-list d-flex align-items-center`}
              style={{ gap: "20px" }}
            >
              <img
                className="footer-icon-phone"
                src={logoPhone}
                alt="logo phone"
              />
              <img className="footer-icon" src={logoWhatsapp} alt="logo wa" />
              <img className="footer-icon" src={logoInstagram} alt="logo ig" />
              <img className="footer-icon" src={logoGmail} alt="logo gmail" />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
