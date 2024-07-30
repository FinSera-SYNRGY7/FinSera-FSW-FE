import React from "react";
import Layout from "../layout/Layout";
import InputForm from "../components/Input/index";
import Button from "../components/Button/index";

function Transfer() {
  const data = [
    { label: "data 1", value: 1 },
    { label: "data 2", value: 2 },
    { label: "data 3", value: 3 },
  ];

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <i className="fa fa-arrow-left" />
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Transfer Sesama Bank">
            Transfer Sesama Bank
          </span>
        </h1>
      </div>
      <Button
        className={"d-none d-sm-block col-sm-12 base-color text-sm-start mb-5"}
        type="button"
        aria-label="kembali ke halaman sebelumnya"
      >
        <i className="fa fa-arrow-left" />
        <span className="ms-20">Back</span>
      </Button>
      <InputForm className={"my-4"}>
        <InputForm.Label to="rek" id="rek-label">
          <h1 className="fw-bold mb-3">
            <span role="input" aria-label="nomor rekening">
              Nomor Rekening
            </span>
          </h1>
        </InputForm.Label>
        <InputForm.Input
          className="py-3 ps-5 fz-input"
          type="number"
          name="rek"
          placeholder="Masukkan nomor rekening"
          aria-labelledby="rek-label"
          required
        />
      </InputForm>
      <InputForm className={"my-4"}>
        <InputForm.Label to="nominal" id="nominal-label">
          <h1 className="fw-bold mb-3">
            <span role="input" aria-label="Nominal transfer">
              Nominal
            </span>
          </h1>
        </InputForm.Label>
        <InputForm.Input
          className="py-3 ps-5 fz-input"
          type="number"
          name="nominal"
          placeholder="Masukkan nominal transfer"
          aria-labelledby="nominal-label"
          required
        />
      </InputForm>
      <InputForm className={"my-4"}>
        <InputForm.Label to="catatan" id="catatan-label">
          <h1 className="fw-bold mb-3">
            <span role="input" aria-label="Masukkan catatan">
              Catatan
            </span>
          </h1>
        </InputForm.Label>
        <InputForm.TextArea
          className="fz-input"
          name="catatan"
          placeholder="Masukkan catatan"
          rows="6"
          aria-labelledby="catatan-label"
          required
        />
      </InputForm>
      <InputForm className={"d-flex my-4 form-check"}>
        <InputForm.Input
          className="form-check-input me-2 p-0 border-black border-2"
          name="remember"
          type="checkbox"
          aria-labelledby="remember-label"
          required
        />
        <InputForm.Label to="remember" id="remember-label">
          <h5 className="form-check-label">
            <span role="checkbox" aria-label="Tambahkan ke daftar tersimpan">
              Tambahkan ke daftar tersimpan
            </span>
          </h5>
        </InputForm.Label>
      </InputForm>
      <Button
        className={"btn base-color col-12 mb-5"}
        aria-label="Lanjutkan"
        type="submit"
      >
        <h5>Lanjutkan</h5>
      </Button>
    </Layout>
  );
}

export default Transfer;
