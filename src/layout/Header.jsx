// src/components/Header.jsx
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoFinsera from "../assets/img/logoFinsera.svg";
import logobcablue from "@/assets/img/logobcablue.png";
import logoAlert from "@/assets/logo/alert.png";
import logoProfile from "@/assets/logo/profile.png";
import styles from "@/assets/css/Header.module.css";
import logoutIcon from "@/assets/img/LogoutIcon.svg";
import { SearchInput } from "@/components/FormInput";
import { useNavigate } from "react-router-dom";
import { PopUp } from "@/components/PopUp";
// import { Profile } from "@/pages/Profile";
// import { Account } from "@/pages/Account";
import { Link } from "react-router-dom";

import { useGetKeyQuery } from "@/features/getKeyQuery/useGetKeyQuery";

//ada perubahan di prop untuk melakukan pengkodisian
const Header = ({ type }) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();
  
  const name = localStorage.getItem('name') ?? 'User';

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutPopup(true);
  };

  const handleClosePopup = () => {
    setShowLogoutPopup(false);
  };

  const handleConfirmLogout = () => {
    const pinAppLock = localStorage.getItem('pin_app_lock')
    if (pinAppLock != null) { 
      navigate('/relog')
    } else {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_refresh_token");
      navigate("/login");
    }
    setShowLogoutPopup(false);
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <>
      <Navbar expand="lg" className={`${styles.navbarHeader} navbar-header`}>
        <Container fluid className={styles.containerFluid}>
          <Navbar.Brand href="/home" className={styles.navbarBrand} onClick={() => {
            window.history.replaceState({}, '')
          }}>
            <img src={logoFinsera} className="logo" alt="finsera logo" />
          </Navbar.Brand>
          <Nav className={styles.searchBar} aria-label="Search Input">
            <SearchInput onSearch={handleSearch} />
          </Nav>
          <Nav
            className={` ${styles.logoList} logo-list d-flex align-items-center`}
            style={{ gap: "20px" }}
          >
            <Nav.Link href="#alert">
              <img
                className="header-icon"
                src={logoAlert}
                alt="Notifikasi"
              />
            </Nav.Link>
            <Nav.Link href="/account">
              <img
                className="header-icon"
                src={logoProfile}
                alt="Akun"
              />
            </Nav.Link>
            <Nav.Link>
              <img src={logoutIcon} alt="" onClick={handleLogoutClick} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {type === "necktie" && <div className="necktie"></div>}
      <div className={styles.blankSpace}></div>
      {showLogoutPopup && (
        <PopUp handleClosePopup={handleClosePopup} handleConfirmLogout={ handleConfirmLogout } />
      )}
    </>
  );
};

export default Header;
