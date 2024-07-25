import React from "react";
import Card from "react-bootstrap/Card";
import iconHistoryTXN from "@/assets/logo/HistoTXN.svg";
import styles from "@/assets/css/Cards.module.css";

const CardTransaction = ({titleTXN, typeTXN, priceTXN}) => {
  return (
    <Card
      className={`${styles.cardHistory}`}
      role="listitem"
      aria-labelledby={`judul-transaksi-${titleTXN}`}
      aria-describedby={`detail-transaksi-${titleTXN}`}
    >
      <Card.Body className="d-flex flex-column justify-content-start align-items-start p-0">
        <img className="mb-2" src={iconHistoryTXN} alt="Riwayat Transaksi" />
        <Card.Title className={styles.cardTitle} id={`judul-transaksi-${titleTXN}`}>{titleTXN}</Card.Title>
        <Card.Text className={`${styles.cardText} m-0`} id={`detail-transaksi-${titleTXN}`}>{typeTXN}</Card.Text>
        <div
          className={`${styles.cardPrice} d-flex flex-row-reverse px-3 w-100`}
        >
          <p id={`detail-transaksi-${titleTXN}`} className="m-0">{priceTXN}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export { CardTransaction };
