import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
import PinInput from "react-pin-input";
import styles from "@/assets/css/Relog.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmSetupPin = () => {
    
    const navigate = useNavigate()
    const { state } = useLocation()
    const [isError, setIsError] = useState(false);
    const [pin, setPin] = useState(0);
    const [errorMessage, setErrorMessage] = useState("PIN yang Anda masukkan salah!"); 

    const handlePinSubmit = (pin) => {
        setPin(pin)
    };
    
    const savePin = () => {
      if(state.pinAppLock == pin) {
        localStorage.setItem('pin_app_lock', pin)
        navigate('/home')
      } else {
        showError()
        setErrorMessage('Pin Tidak Sesuai!')
      }
    }

    const showError = () => {
        setIsError(true);
    };
    
    useEffect(() => {
      if(localStorage.getItem('pin_app_lock') != null) {
        navigate('/home')
      }
    },[])

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
                        <h2 className={styles.title} aria-label="Konfirmasi Pin Lock Anda!">
                            Konfirmasi Pin Lock Anda
                        </h2>
                        <h4 className={styles.subtitle} aria-label="Masukkan PIN Anda">Masukkan PIN Anda</h4>
                        <PinInput
                          length={6}
                          type="numeric"
                          focus
                          secret
                          inputMode="numeric"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          name="pin"
                          ariaLabel="Pin Input"
                          onChange={(value) => {
                            handlePinSubmit(value);
                          }}
                        />
                        <Button className={styles.loginButton} type="submit" onClick={() => savePin()} aria-label="Simpan">
                            Simpan
                        </Button>
                          {isError && (
                            <div className={styles.errorMessage} aria-label={errorMessage}>
                                {errorMessage} <button className="btn-close" role="button" aria-label="Tutup Error" onClick={() => setIsError(false)} />
                            </div>
                          )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmSetupPin;