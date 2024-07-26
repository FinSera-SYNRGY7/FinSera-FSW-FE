import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logobcawhite from '@/assets/img/logobcawhite.png'
import logobcablue from '@/assets/img/logobcablue.png'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
import { PinInput } from '@/components/PinInput';
import styles from "@/assets/css/Relog.module.css";

const Relog = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6} className={styles.leftColumn}>
                    <div className={styles.logoContainer}>
                        <img
                            src={logobcawhite}
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
                        src={logobcablue}
                        alt="logo"
                        className={styles.logoBlue}
                    />
                    <div className={styles.formContainer}>
                        <h2 className={styles.title} aria-label="Selamat Datang Kembali">
                            Selamat Datang Kembali
                        </h2>
                        <h4 className={styles.subtitle} aria-label="Masukkan PIN Anda">Masukkan PIN Anda</h4>
                        <PinInput className={styles.pinInput} />
                        <a href="#" className={styles.forgotPIN} aria-label="Lupa PIN?">Lupa PIN?</a>
                        <Button className={`btn btn-primary ${styles.loginButton}`} type="submit">
                            Login
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Relog;