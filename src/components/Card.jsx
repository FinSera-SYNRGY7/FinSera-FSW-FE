import React from "react";
import Card from "react-bootstrap/Card";
import iconHistoryTXN from "@/assets/logo/HistoTXN.svg";
import Success from "@/assets/img/Success.svg";
import styles from "@/assets/css/Cards.module.css";
import { ButtonAlt, ButtonIcon } from "./ButtonAlt";

const CardTransaction = ({ titleTXN, typeTXN, priceTXN }) => {
  return (
    <Card
      className={`${styles.cardHistory}`}
      role="listitem"
      aria-labelledby={`judul-transaksi-${titleTXN}`}
      aria-describedby={`detail-transaksi-${titleTXN}`}
    >
      <Card.Body className="d-flex flex-column justify-content-start align-items-start p-0">
        <img className="mb-2" src={iconHistoryTXN} alt="Riwayat Transaksi" />
        <Card.Title
          className={styles.cardTitle}
          id={`judul-transaksi-${titleTXN}`}
        >
          {titleTXN}
        </Card.Title>
        <Card.Text
          className={`${styles.cardText} m-0`}
          id={`detail-transaksi-${titleTXN}`}
        >
          {typeTXN}
        </Card.Text>
        <div
          className={`${styles.cardPrice} d-flex flex-row-reverse px-3 w-100`}
        >
          <p id={`detail-transaksi-${titleTXN}`} className="m-0">
            {priceTXN}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

const CardMutation = ({ color, dateTXN, noTXN, typeTXN, nominal, time }) => {
  const cardMutationStyle = {
    price: {
      color: color,
    },
  };

  return (
    <div className="w-100">
      <div
        className={`d-flex flex-column align-items-start m-0 ${styles.containerMutation}`}
        role="region"
        aria-labelledby={`transaksi-${noTXN}`}
      >
        <p id={`transaksi-${noTXN}`} className={styles.mutationTitle}>
          {dateTXN}
        </p>
        <div
          className={`${styles.containerCardMutation} d-flex flex-row justify-content-between w-100`}
          role="group"
          aria-labelledby={`transaksi-${noTXN}`}
        >
          <div
            className={`${styles.content1} d-flex flex-column align-items-start`}
          >
            <p
              className={`${styles.textTXN} m-0`}
              aria-label={`No Transaksi: ${noTXN}`}
            >
              {noTXN}
            </p>
            <p aria-label={`Tipe Transaksi: ${typeTXN}`}>{typeTXN}</p>
          </div>
          <div
            className={`${styles.content2} d-flex flex-column align-items-end`}
          >
            <p
              className={styles.textPrice}
              style={cardMutationStyle.price}
              aria-label={`Nominal Transaksi: ${nominal}`}
            >
              {nominal}
            </p>
            <p
              style={cardMutationStyle.text}
              aria-label={`Waktu Transaksi: ${time}`}
            >
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardHorizontalAlt = ({
  img,
  className,
  first,
  second,
  data,
  ...rest
}) => {
  return (
    <div className={`card ${className}`} {...rest}>
      <div className="d-flex">
        <div
          className={`${first} mx-sm-4 ms-1 d-flex align-items-center justify-content-center ${styles.cardImg}`}
        >
          <img src={img} alt="" />
        </div>
        <div className={`${second} p-0`}>
          <div className="card-body px-0">
            <span role="label" aria-label={`nama : ${data.name_recipient}`}>
              <h5 className="card-title">{data.name_recipient}</h5>
            </span>
            <span role="label" aria-label="akun Bank BCA">
              <h6 className="card-subtitle text-body-secondary">
                {data.transaction_name}
              </h6>
            </span>
            <span
              className="h-c"
              role="label"
              aria-label="update terakhir 5 hari lalu"
            >
              <small className="text-body-secondary">
                {data.no_transaction}
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardVerticalAlt = ({ className, children, data, ...rest }) => {
  return (
    <>
      {children}
      <div className={`card text-center ${className}`} {...rest}>
        <img
          className="m-auto my-5 my-md-5 w-20"
          src={Success}
          alt="Transfer Success"
        />
        <span role="label" aria-label="Transaksi Berhasil">
          <h1 className="fw-bold">Transaksi Berhasil</h1>
        </span>
        <div className="card-body">
          <span role="label" aria-label={`Tanggal : ${data.transaction_date}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Tanggal</h5>
              <h5 className="fw-bold col-auto">{data.transaction_date}</h5>
            </div>
          </span>
          <span role="label" aria-label={`Nomor Transaksi : ${data.transaction_num}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Nomor Transaksi</h5>
              <h5 className="fw-bold col-auto">{data.transaction_num}</h5>
            </div>
          </span>
          <hr />
          <span role="label" aria-label={`Penerima : ${data.name_recipient}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Penerima</h5>
              <h5 className="fw-bold col-auto">{data.name_recipient}</h5>
            </div>
          </span>
          <span
            role="label"
            aria-label={`Jenis Transaksi : ${data.type_transaksi}`}
          >
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jenis Transaksi</h5>
              <h5 className="fw-bold col-auto">{data.type_transaksi}</h5>
            </div>
          </span>
          <span role="label" aria-label={`Jumlah : ${data.nominal}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jumlah</h5>
              <h5 className="fw-bold col-auto">{data.nominal}</h5>
            </div>
          </span>
          <span role="label" aria-label={`Jumlah : ${data.nominal_admin}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Biaya Admin</h5>
              <h5 className="fw-bold col-auto">{data.nominal_admin}</h5>
            </div>
          </span>
          <span role="label" aria-label={`Catatan : ${data.note}`}>
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Catatan</h5>
              <h5 className="fw-bold col-auto">{data.note}</h5>
            </div>
          </span>
          <div className={`${styles.cardBtnSuccess} d-flex flex-row justify-content-between mb-3 mb-sm-5`}>
            <div className="w-100">
              <ButtonIcon
                label="unduh"
                onClick={() => console.log("Solid Download Clicked")}
                variant="btnDownload1st"
              />
            </div>
            <div className="w-100">
              <ButtonIcon
                label="Bagikan"
                onClick={() => console.log("Outline Add Button Clicked")}
                variant="btnShare"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CardTransaction, CardMutation, CardHorizontalAlt, CardVerticalAlt };
