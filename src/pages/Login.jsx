import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import logobcawhite from '@/assets/img/logobcawhite.png'
import logobcablue from '@/assets/img/logobcablue.png'
import login from '@/assets/img/login.svg';
import { FormInput } from '@/components/FormInput.jsx'
import Button from 'react-bootstrap/Button';
import styles from "@/assets/css/Login.module.css"

const Login = () => {
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
                            className={styles.logoWhite}
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
                        <h1 className={styles.loginTitle} aria-label="Login">
                            Login
                        </h1>
                        <Form aria-label="Login form">
                            <FormInput className="mb-5" aria-label="Username">
                                <Form.Label htmlFor="username" className={styles.formLabel}>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    placeholder="masukkan username"
                                    className={styles.formControl}
                                />
                            </FormInput>

                            <FormInput className="mb-3 position-relative" aria-label="Password">
                                <Form.Label htmlFor="password" className={styles.formLabel}>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    placeholder="masukkan password"
                                    className={styles.formControl}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className={styles.passwordToggle}
                                    role="button"
                                    aria-label={passwordVisible ? 'Sembunyikan password' : 'Tampilkan password'}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </FormInput>

                            <div className={styles.forgotPassword}>
                                <a href="#" className={styles.forgotPasswordLink} aria-label="Lupa Password?">Lupa Password?</a>
                            </div>
                            <Button
                                aria-label="Tombol Login"
                                className={`btn btn-primary ${styles.loginButton}`}
                                type="submit"
                                >
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;