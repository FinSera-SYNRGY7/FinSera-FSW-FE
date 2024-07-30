// src/components/Header.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logobcablue from "@/assets/img/logobcablue.png";
import logoAlert from "@/assets/logo/alert.png";
import logoProfile from "@/assets/logo/profile.png";
import styles from "@/assets/css/Header.module.css";

//ada perubahan di prop untuk melakukan pengkodisian
const Header = ({ type }) => {
  return (
    <>
      <Navbar expand="lg" className={`${styles.navbarHeader} navbar-header`}>
        <Container fluid className={styles.containerFluid}>
          <Navbar.Brand href="/home" className={styles.navbarBrand}>
            <img src={logobcablue} className="logo" alt="bca logo" />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Cari di sini"
                    className={`${styles.formControl} mr-sm-2`}
                  />
                </Col>
              </Row>
            </Form>
          </Nav>
          <Nav
            className={` ${styles.logoList} logo-list d-flex align-items-center`}
            style={{ gap: "20px" }}
          >
            <Nav.Link href="#alert">
              <img className="header-icon" src={logoAlert} alt="logo alert" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <img
                className="header-icon"
                src={logoProfile}
                alt="logo profile"
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {type === "necktie" && <div className="necktie"></div>}
      <div className={styles.blankSpace}></div>
    </>
  );
};

export default Header;
