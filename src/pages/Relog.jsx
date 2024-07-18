import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import logobcawhite from '@/assets/img/logobcawhite.png'
import login from '@/assets/img/login.svg';
import Button from 'react-bootstrap/Button';
import { PinInput } from '@/components/PinInput';

const Relog = () => {
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
                        Selamat Datang Kembali
                    </h2>
                    <h4 style={{ marginBottom: '20px', fontWeight: '700', fontSize: '15px', color: '#4f4f4f' }}>Masukkan PIN Anda</h4>
                    <PinInput style={{marginTop: '40px', marginBottom: '50px'}} />
                    <h4 style={{ marginTop: '20px', fontWeight: '700', fontSize: '15px', color: '#4f4f4f' }}>Lupa PIN?</h4>
                    <Button className="btn btn-primary" type="submit" style={{ width: '100%', height: '48px', marginTop: '110px', backgroundColor: '#0066AE', borderRadius: '18px' }}>
                        Login
                    </Button>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Relog;