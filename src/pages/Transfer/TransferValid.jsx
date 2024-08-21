import React from "react";
import Layout from "@/layout/Layout";
import { CardHorizontal, CardTransfer } from "@/components/Card/index";
import Button from "@/components/Button/index";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { formatRupiah } from "@/lib/utils";
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount";
import Spinner from "react-bootstrap/Spinner";

function TransferValid() {
  const { state } = useLocation();
  
  console.log(state)

  const navigate = useNavigate();

  const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount();

  const toInputPinPage = (data) => {
    navigate("/transfer-sesama-bank/input-pin", {
      state: {
        accountnum_recipient: data.accountnum_recipient,
        name_recipient:state.name_recipient,
        bank_name: state.bank_name,
        nominal: data.nominal,
        note: data.note,
      },
    });
  };

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => {
            navigate("/transfer-sesama-bank/form-input", {
              state: {
                accountnum_recipient: state.accountnum_recipient,
                name_recipient: state.name_recipient,
                bank_name: state.bank_name,
                nominal: state.nominal,
                note: state.note,
              }
            })
          }}
        >
          <i className="fa fa-arrow-left" />
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Konfirmasi Transaksi">
            Konfirmasi Transaksi
          </span>
        </h1>
      </div>

        <Button
          className={
            "d-none d-sm-block col-sm-12 base-color text-sm-start mb-5 shadow-hover"
          }
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => {
            navigate("/transfer-sesama-bank/form-input", {
              state: {
                accountnum_recipient: state.accountnum_recipient,
                name_recipient: state.name_recipient,
                bank_name: state.bank_name,
                nominal: state.nominal,
                note: state.note,
              }
            })
          }}
        >
          <i className="fa fa-arrow-left" />
          <span className="ms-20">Back</span>
        </Button>
      <CardHorizontal
        className={"p-0 border-0 mb-3"}
        data={{
          name_recipient: state.name_recipient,
          bank_name: "Bank BCA",
        }}
        aria-label="akun tujuan transfer"
      />
      <span role="label" aria-label="Nominal Transfer : Rp 100.000">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Nominal Transfer</h5>
          <h5 className="fw-bold col-auto">{formatRupiah(state.nominal)}</h5>
        </div>
      </span>
      <span role="label" aria-label="Jenis Transfer : Transfer Sesama Bank">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Jenis Transfer</h5>
          <h5 className="fw-bold col-auto">Transfer Sesama Bank</h5>
        </div>
      </span>
      <span role="label" aria-label="Catatan : Bayar Utang">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Catatan</h5>
          <h5 className="fw-bold col-auto">{state.note}</h5>
        </div>
      </span>
      <h4 className="fw-bold mb-3 pt-3 text-start">
        <span role="label" aria-label="Sumber rekening">
          Sumber rekening
        </span>
      </h4>
      {isLoadingAmount ? (
        <div className="text-center w-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CardTransfer
          className={"shadow p-0 border-0 mb-5"}
          first="col-1"
          second="col-2"
          data={{
            username: dataAmount.name,
            accountNumber: dataAmount.accountNumber,
            amount: dataAmount.amount,
          }}
        />
      )}
      <Button
        className={"btn base-color col-12 mb-5 shadow-hover"}
        type="button"
        aria-label="Lanjutkan"
        onClick={() =>
          toInputPinPage({
            accountnum_recipient: state.accountnum_recipient,
            nominal: state.nominal,
            note: state.note,
          })
        }
      >
        <h5 className="mb-0">Lanjutkan</h5>
      </Button>
    </Layout>
  );
}

export default TransferValid;
