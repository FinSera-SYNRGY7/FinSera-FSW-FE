import { useState } from "react";
import Pininput from "react-pin-input";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransferVirtualAccount } from "@/features/virtualAccount/useTransferVirtualAccount";
import { useForm } from "react-hook-form";

const VirtualAccountTfPin = () => {
  const [pinInput, setPinInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const { handleSubmit } = useForm()
  const { state } = useLocation()
  const navigate = useNavigate()
  
  const lastTransferAct = ({
    accountNum,
    accountName,
    typeTranscation,
    nominal
  }) => {
    const getLastTransfers = localStorage.getItem('last_transfers_virtual_account') == null ? [] : JSON.parse(localStorage.getItem('last_transfers_virtual_account'))
    
    const cloneArr = [...getLastTransfers]
    
    if (getLastTransfers.findIndex((elem) => elem.accountNum == accountNum)) {
      cloneArr.push(
        {
          accountNum,
          accountName,
          typeTranscation,
          nominal
        }
      )
    }
    
    localStorage.setItem('last_transfers_virtual_account', JSON.stringify(cloneArr))
  }
  
  const { mutate, isPending } = useTransferVirtualAccount({
    onSuccess: (success, data) => {
      
      lastTransferAct({
        accountNum: success.data.recipientVirtualAccountNum,
        accountName: success.data.recipientName,
        typeTranscation: state.typeTranscation,
        nominal: state.nominal
      })

      navigate('/transfer-virtual-account/success', {
        state:{
          transactionDate: success.data.transactionDate,
          transactionNum: success.data.transactionNum,
          recipientName: success.data.recipientName,
          type: success.data.type,
          recipientVirtualAccountNum: success.data.recipientVirtualAccountNum,
          nominal: success.data.nominal,
          note: success.data.note
        }
      })
    },
    onError: (error, data) => {
      setErrorMessage(error.message.response.data.message)
    }
  })
  
  const submit = (data) => {
    const getValue = {
      virtualAccountNumber: state.accountNum,
      mpinAccount: pinInput,
    }
    
    mutate(getValue)
  }

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => navigate("/transfer-virtual-account/konfirmasi", {
              state: {
                accountNum: state.accountNum,
                accountName: state.accountName,
                typeTranscation: state.typeTranscation,
                nominal: state.nominal,
              }
            })
          }>
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
          onClick={() => navigate("/transfer-virtual-account/konfirmasi", {
              state: {
                accountNum: state.accountNum,
                accountName: state.accountName,
                typeTranscation: state.typeTranscation,
                nominal: state.nominal,
              }
            })
          }>
          <i className="fa fa-arrow-left" />
          <span className="ms-20">Back</span>
        </Button>
      {errorMessage != "" ? (
        <div
            className="alert alert-danger alert-dismissible"
            aria-label={`Pesan Error ${errorMessage}`}
          >
            {errorMessage}{" "}
          <button className="btn-close" aria-label="tutup error" role="close" onClick={() => {
            setErrorMessage('')
          }} />
        </div>
      ) : (
        ""
      )}
      <form method="POST" onSubmit={handleSubmit(submit)}>
        <div
          className="row m-auto align-items-center text-center mb-5"
          style={{ height: "30vh" }}
        >
          <span role="label" aria-label="Masukkan PIN">
            <h4 className="fw-bold">Masukkan PIN</h4>
          </span>
          <Pininput
            length={6}
            type="numeric"
            inputMode="numeric"
            focus
            secret
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            name="pin"
            ariaLabel="Pin Transaksi"
            onChange={(value) => {
              setPinInput(value);
            }}
          />
          {/* <PinInput /> */}
        </div>
        <Button
          className={"btn base-color col-12 mb-5 shadow-hover"}
          type="submit"
          aria-label="Lanjutkan"
          disabled={isPending}
        >
          <h5 className="mb-0">Lanjutkan</h5>
        </Button>
      </form>
    </Layout>
  );
};

export default VirtualAccountTfPin;