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

const CardMutation = ({color, dateTXN, noTXN, typeTXN, nominal, time }) => {
  const cardMutationStyle = {
    price: {
      color: color
    }
  }

 return (
  <div className="w-100">
    <div className={`d-flex flex-column align-items-start m-0 ${styles.containerMutation}`} role="region" aria-labelledby={`transaksi-${noTXN}`}>
    <p id={`transaksi-${noTXN}`} className={styles.mutationTitle}>{dateTXN}</p>
    <div className={`${styles.containerCardMutation} d-flex flex-row justify-content-between w-100`} role="group" aria-labelledby={`transaksi-${noTXN}`}>
      <div className={`${styles.content1} d-flex flex-column align-items-start`}>
        <p className={`${styles.textTXN} m-0`} aria-label={`No Transaksi: ${noTXN}`}>{noTXN}</p>
        <p aria-label={`Tipe Transaksi: ${typeTXN}`}>{typeTXN}</p>
      </div>
      <div className={`${styles.content2} d-flex flex-column align-items-end`}>
        <p className={styles.textPrice} style={cardMutationStyle.price} aria-label={`Nominal Transaksi: ${nominal}`}>{nominal}</p>
        <p style={cardMutationStyle.text} aria-label={`Waktu Transaksi: ${time}`}>{time}</p>
      </div>
    </div>
  </div>
  </div>
 )
}

export { CardTransaction, CardMutation };
