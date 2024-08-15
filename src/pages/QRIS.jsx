import React from "react";
import QRCode from "react-qr-code";
import Layout from '@/layout/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import styles from "@/assets/css/QR.module.css";
import qrisLogo from "@/assets/logo/QRIS.svg";
import qrImage from "@/assets/img/qrImage.svg";
import Button from "@/components/Button/index";
import { Link } from "react-router-dom";
import backBlack from "@/assets/logo/backBlack.svg";
import back from "@/assets/logo/back.svg";

export default function QRIS() {
  const data = [{
    time: (new Date()),
    name: 'Hafiidh Luqman',
    bank_account: '123020320230230',
    bank_name: 'MANDIRI'
  }]
  const value = JSON.stringify(data)

  return (
    <Layout>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: "80%", width: "100%" }}>
        <div className={styles.header}>
          <Button
            className="d-sm-none p-0"
            type="button"
            aria-label="kembali ke halaman sebelumnya">
            <img src={backBlack} alt="Kembali ke halaman sebelumnya" className={styles.back} />
          </Button>
          <div className={styles.title}>
            <h1>QRIS</h1>
          </div>
        </div>
        <Link
          to="/home"
          className={styles.backButton}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button"
        >
          <Button
            className={
              "d-none d-sm-block flex-grow-1 base-color w-100 text-sm-start d-flex shadow-hover"
            }
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <img src={back} alt="Kembali ke halaman sebelumnya" />
            <span className="ms-20">Beranda</span>
          </Button>
        </Link>

        <Container className={styles.container}>
          <div className={styles.blueBox}></div>
          <Row>
            <Col md={6} className={styles.leftColumn}>
              <div className={styles.imageContainer}>
                <img
                  src={qrImage}
                  alt="QR Image"
                  className={styles.qrImage}
                />
              </div>
            </Col>
            <Col md={6} className={styles.rightColumn}>
              <img
                src={qrisLogo}
                alt="QRIS Logo"
                className={styles.qrisLogo}
              />
              <div className={styles.contentContainer}>
                <p className={styles.description}>
                  Tunjukkan kode QRIS Anda, biarkan mereka memindai, dan terima pembayaran
                  secara cepat dan efisien.
                </p>
                <div className={styles.qrCodeWrapper}>
                  <QRCode
                    size={256}
                    style={{ height: "300px", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}