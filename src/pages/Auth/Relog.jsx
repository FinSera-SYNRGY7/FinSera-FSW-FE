import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
// import { PinInput } from '@/components/PinInput';
import PinInput from "react-pin-input";
import styles from "@/assets/css/Relog.module.css";
import { useRefreshToken } from '@/features/auth/useRefreshToken'
import { useNavigate } from "react-router-dom";

const Relog = () => {
  
    const navigate = useNavigate()
    const [pin, setPin] = useState(0)
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("PIN yang Anda masukkan salah!"); 
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const { mutate, isPending } = useRefreshToken({
      onSuccess: (success) => {
        localStorage.setItem('auth_token', success.data.accessToken)
        navigate('/home')
      },
      onError: (data, error) => {
        console.log(error)
      }
    })

    const handlePinSubmit = (pin) => {
      setPin(pin)
    };
    
    const loginAct = () => {
      const refreshToken = localStorage.getItem('auth_refresh_token')
      const pinAppLock = localStorage.getItem('pin_app_lock')
      
      if(pin == pinAppLock) {
        mutate({
          refreshToken
        })
      } else {
        showError()
      }
    }

    const showError = () => {
        setIsError(true);
    };
    
    useEffect(() => {
      if(localStorage.getItem('auth_token') != null) {
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
                        <h2 className={styles.title} aria-label="Selamat Datang Kembali">
                            Selamat Datang Kembali
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
                          ariaLabel="Pin Input"
                          name="pin"
                          onChange={(value) => {
                            handlePinSubmit(value);
                          }}
                        />
                        <a href="#" onClick={() => {
                          localStorage.removeItem('pin_app_lock')
                          localStorage.removeItem('auth_token')
                          navigate('/')
                        }} className={styles.forgotPIN} aria-label="Lupa PIN?">Lupa PIN?</a>
                        <Button className={styles.loginButton} disabled={ isPending } type="submit" onClick={loginAct}>
                            Login
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

export default Relog;