import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import logobcawhite from '../assets/img/logobcawhite.png'
import login from '../assets/img/login.svg';
import { FormInput } from '../components/FormInput.jsx'
import Button from 'react-bootstrap/Button';


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={6} style={{ backgroundColor: '#0A3967', height: '100vh' }}>
                    <img
                        src={logobcawhite}
                        alt="logo"
                        style={{
                            position: 'relative',
                            top: '40px',
                            left: '-290px',
                            width: '100px',
                            height: 'auto'
                        }}
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <img
                            src={login}
                            alt="login image"
                            style={{
                                width: '500px',
                                height: '500px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </Col>
                <Col md={6} style={{ backgroundColor: '#FFFFFF', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '452px' }}>
                        <h2 style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            textAlign: 'center',
                            marginBottom: '70px'
                        }}>
                            Login
                        </h2>
                        <Form>
                            <FormInput className="mb-5" aria-label="Username">
                                <Form.Label htmlFor="username" style={{
                                    textAlign: 'left',
                                    display: 'block',
                                    fontWeight: '500'
                                }}>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    placeholder="masukkan username"
                                    style={{ width: '100%', height: '48px', borderRadius: '18px' }}
                                />
                            </FormInput>

                            <FormInput className="mb-3 position-relative" aria-label="Password">
                                <Form.Label htmlFor="password" style={{
                                    textAlign: 'left',
                                    display: 'block',
                                    fontWeight: '500'
                                }}>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    placeholder="masukkan password"
                                    style={{ width: '100%', height: '48px', borderRadius: '18px' }}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '15px',
                                        top: '70%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                    role="button"
                                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </FormInput>

                            <div style={{ textAlign: 'right', marginBottom: '80px' }}>
                                <a href="#" style={{ textDecoration: 'none', fontSize: '14px', color: '#0066AE', fontWeight: '700' }}>Lupa Password? </a>
                            </div>

                            <Button className="btn btn-primary" type="submit" style={{ width: '100%', height: '48px', marginBottom: '20px', backgroundColor: '#0066AE', borderRadius: '18px' }}>
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
