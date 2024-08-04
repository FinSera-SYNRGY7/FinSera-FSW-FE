import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
import { PinInput } from '@/components/PinInput';
import styles from "@/assets/css/Relog.module.css";

const Relog = () => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("PIN yang Anda masukkan salah!"); 
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePinSubmit = (pin) => {
        console.log("PIN submitted:", pin);
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
                        <h2 className={styles.title} aria-label="Selamat Datang Kembali">
                            Selamat Datang Kembali
                        </h2>
                        <h4 className={styles.subtitle} aria-label="Masukkan PIN Anda">Masukkan PIN Anda</h4>
                        <PinInput className={styles.pinInput} onComplete={handlePinSubmit} />
                        <a href="#" className={styles.forgotPIN} aria-label="Lupa PIN?">Lupa PIN?</a>
                        <Button className={styles.loginButton} type="submit" onClick={showError}>
                            Login
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

export default Relog;