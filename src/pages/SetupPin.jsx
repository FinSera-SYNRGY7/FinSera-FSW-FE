import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
import { PinInput } from '@/components/PinInput';
import Pininput from "react-pin-input";
import styles from "@/assets/css/Relog.module.css";
import { useNavigate } from "react-router-dom";

const SetupPin = () => {
  
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false);
    const [pin, setPin] = useState(0);
    const [errorMessage, setErrorMessage] = useState("PIN yang Anda masukkan salah!"); 
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePinSubmit = (pin) => {
      setPin(pin)
    };

    const showError = () => {
        setIsError(true);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6} className={styles.leftColumn}>
                    <div className={styles.logoContainer}>
                        <img
                            src={logoWhite}
                            alt="logo"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={login}
                            alt="login image"
                            className={styles.loginImage}
                        />
                    </div>
                </Col>
                <Col md={6} className={styles.rightColumn}>
                    <img
                        src={logoBlue}
                        alt="logo"
                        className={styles.logoBlue}
                    />
                    <div className={styles.formContainer}>
                        <h2 className={styles.title} aria-label="Buat Pin Lock Anda!">
                            Buat Pin Lock Anda
                        </h2>
                        <h4 className={styles.subtitle} aria-label="Masukkan PIN Anda">Masukkan PIN Anda</h4>
                        <Pininput
                          length={6}
                          type="numeric"
                          focus
                          secret
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          name="pin"
                          onChange={(value) => {
                            handlePinSubmit(value);
                          }}
                        />
                        <Button className={styles.loginButton} type="submit" onClick={() => {
                          navigate('/setup-pin/confirm', {
                            state:{
                              pinAppLock:pin
                            }
                          })
                        }} aria-label="Lanjutkan">
                            Lanjutkan
                        </Button>
                        {isError && (
                          <div className={styles.errorMessage}>
                              {errorMessage}
                          </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SetupPin;