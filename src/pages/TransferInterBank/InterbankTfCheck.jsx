import React, { useState } from "react";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { Link, useNavigate } from "react-router-dom";
import { FormChooseBank } from "@/components/FormInput";
import { useForm } from "react-hook-form";
import { useTransferInterBankCheck } from "@/features/transferInterBank/useTransferInterBankCheck";
import { useListBanks } from '@/features/transferInterBank/useListBanks';

const InterbankTfCheck = () => {
  
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  
  const { register, handleSubmit } = useForm()
  
  const { mutate, isPending } = useTransferInterBankCheck({
    onSuccess: (success, data) => {
      navigate('/transfer-antar-bank/form-input', {
        state:{
          accountnum_recipient: success.data.accountnum_recipient,
          bank_id:success.data.bank_id,
          bank_name:success.data.bank_name,
          name_recipient:success.data.name_recipient
        }
      })
    },
    onError: (error, data) => {
      setErrorMessage(error.message.response.data.message);
    }
  })
  
  const navigate = useNavigate();
  
  const { data, isLoading } = useListBanks()
  
  const submit = (data) => {
    const getValue = {
      accountnum_recipient:data.accountnum_recipient,
      bank_id:selectedValue.value
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
            >
              <Link
                to="/transfer-antar-bank"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                aria-label="kembali ke halaman sebelumnya"
                role="button"
              >
                <i className="fa fa-arrow-left" />
              </Link>
            </Button>
            <h1 className="fw-bold col-12 text-center text-sm-start">
              <span role="label" aria-label="Transfer Antar Bank">
                Transfer Antar Bank
              </span>
            </h1>
          </div>
          <Link
            to="/transfer-antar-bank"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            aria-label="kembali ke halaman sebelumnya"
            role="button"
          >
            <Button
              className={
                "d-none d-sm-block col-sm-12 base-color shadow-hover text-sm-start mb-5"
              }
              type="button"
              aria-label="kembali ke halaman sebelumnya"
              onClick={() => console.log("sip")}
            >
              <i className="fa fa-arrow-left" />
              <span className="ms-20">Back</span>
            </Button>
          </Link>
          {errorMessage != "" ? (
            <div
              className="alert alert-danger alert-dismissible"
              aria-label={`Pesan Error ${errorMessage}`}
              role="alert"
            >
              {errorMessage}{" "}
              <button className="btn-close" aria-label="tutup error" role="close" onClick={() => {
                setErrorMessage('')
              }} />
            </div>
          ) : (
            ""
          )}
          {/* <form method="POST" onSubmit={handleSubmit(submit)}> */}
          <form method="POST" onSubmit={handleSubmit(submit)}>
            <InputForm className={"my-4"}>
              <InputForm.Label to="bank" id="bank-label">
                <h4 className="fw-bold mb-3">
                  <span role="input" aria-label="Pilih Bank Tujuan Transfer">
                    Pilih Bank
                  </span>
                </h4>
              </InputForm.Label>
              {/* <FormChooseBank label="Pilih" options={bankOptions} onChange={handleChooseBank} selectedValue={selectedBank}></FormChooseBank> */}
              <FormChooseBank 
                options={isLoading ? [] : data} 
                value={selectedValue?.value || ""} 
                onChange={(option) => setSelectedValue(option)} 
                placeholder="Pilih" 
                ariaLabel="Pilih Bank Tujuan Transfer" 
              />
            </InputForm>
            <InputForm className={"my-4"}>
              <InputForm.Label to="rek" id="rek-label">
                <h4 className="fw-bold mb-3">
                  <span role="input" aria-label="nomor rekening">
                    Nomor Rekening
                  </span>
                </h4>
              </InputForm.Label>
              <InputForm.Input
                className="py-sm-3 ps-sm-5 fz-input input"
                type="number"
                placeholder="Masukkan nomor rekening"
                aria-labelledby="rek-label"
                required
                {...register("accountnum_recipient")}
              />
            </InputForm>
            <Button
              className={"btn base-color col-12 mb-5 shadow-hover"}
              aria-label="Lanjutkan"
              type="submit"
              disabled={isPending}
            >
              <h5 className="mb-0">Lanjutkan</h5>
            </Button>
          </form>
        </Layout>
      );
}

export default InterbankTfCheck;
