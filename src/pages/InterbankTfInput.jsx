import React, { useState } from "react";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { Link, useNavigate } from "react-router-dom";
import { FormChooseBank } from "@/components/FormInput";
// import { useForm } from "react-hook-form";
// import { useTransferBankCheck } from "@/features/transferBank/useTransferBankCheck";

const InterbackTfInput = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedBank, setSelectedBank] = useState('');

  const bankOptions = [
    { value: 'bca', label: 'BCA' },
    { value: 'bni', label: 'BNI' },
    { value: 'bri', label: 'BRI' },
    { value: 'mandiri', label: 'Mandiri' },
    { value: 'cimb', label: 'CIMB' },
    { value: 'btpn', label: 'BTPN' },
    { value: 'btn', label: 'BTN' },
    { value: 'muamalat', label: 'Muamalat' },
    { value: 'bukopin', label: 'Bukopin' },
    { value: 'danamon', label: 'Danamon' },
    { value: 'maybank', label: 'Maybank' },
    { value: 'permata', label: 'Permata' },
    { value: 'panin', label: 'Panin' },
    { value: 'mega', label: 'Mega' },
  ];

  const handleChooseBank = (event) => {
    setSelectedBank(event.target.value);
  };

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
              className="alert alert-danger"
              aria-label={`Pesan Error ${errorMessage}`}
            >
              {errorMessage}{" "}
              <button className="close" aria-label="tutup error" role="close">
                X
              </button>
            </div>
          ) : (
            ""
          )}
          {/* <form method="POST" onSubmit={handleSubmit(submit)}> */}
          <form method="POST">
            <InputForm className={"my-4"}>
              <InputForm.Label to="bank" id="bank-label">
                <h4 className="fw-bold mb-3">
                  <span role="input" aria-label="Nama Bank">
                    Pilih Bank
                  </span>
                </h4>
              </InputForm.Label>
              <FormChooseBank label="Pilih" options={bankOptions} onChange={handleChooseBank} selectedValue={selectedBank}></FormChooseBank>
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
                // required
                // {...register("accountnum_recipient")}
              />
            </InputForm>
            <InputForm className={"my-4"}>
              <InputForm.Label to="nominal" id="nominal-label">
                <h4 className="fw-bold mb-3">
                  <span role="input" aria-label="Nominal transfer">
                    Nominal
                  </span>
                </h4>
              </InputForm.Label>
              <InputForm.Input
                className="py-sm-3 ps-sm-5 fz-input input"
                type="number"
                placeholder="Masukkan nominal transfer"
                aria-labelledby="nominal-label"
                // required
                // {...register("nominal")}
              />
            </InputForm>
            <InputForm className={"my-4"}>
              <InputForm.Label to="catatan" id="catatan-label">
                <h4 className="fw-bold mb-3">
                  <span role="input" aria-label="Masukkan catatan">
                    Catatan
                  </span>
                </h4>
              </InputForm.Label>
              <InputForm.TextArea
                className="fz-input input"
                placeholder="Masukkan catatan"
                rows="6"
                aria-labelledby="catatan-label"
                // required
                // {...register("note")}
              />
            </InputForm>
            <InputForm className={"d-flex my-4 form-check align-items-center"}>
              <InputForm.Input
                className="form-check-input me-2 p-0 border-black border-2"
                name="remember"
                type="checkbox"
                aria-labelledby="remember-label"
              />
              <InputForm.Label to="remember" id="remember-label">
                <p className="form-check-label mb-0">
                  <span role="checkbox" aria-label="Tambahkan ke daftar tersimpan">
                    Tambahkan ke daftar tersimpan
                  </span>
                </p>
              </InputForm.Label>
            </InputForm>
            <Button
              className={"btn base-color col-12 mb-5 shadow-hover"}
              aria-label="Lanjutkan"
              type="submit"
            //   disabled={isPending}
            >
              <h5 className="mb-0">Lanjutkan</h5>
            </Button>
          </form>
        </Layout>
      );
}

export default InterbackTfInput;
