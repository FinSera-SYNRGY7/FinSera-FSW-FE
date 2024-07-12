// src/components/Header.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



import logobcablue from '../assets/img/logobcablue.png'
import logoAlert from '../assets/logo/alert.png'
import logoProfile from '../assets/logo/profile.png'




const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logobcablue} className="logo" alt="bca logo" /> </Navbar.Brand>
                <Nav className="me-auto">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Cari di sini"
                                    className=" mr-sm-2"
                                />
                            </Col>

                        </Row>
                    </Form>
                </Nav>
                <Nav className='logo-list d-flex align-items-center' style={{ gap: '20px' }}>
                    <Nav.Link href="#alert">
                        <img className="header-icon" src={logoAlert} alt="logo alert" />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <img className="header-icon" src={logoProfile} alt="logo profile" />

                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};


export default Header;
