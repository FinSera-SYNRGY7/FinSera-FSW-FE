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
    <Layout>
      <h3 className="fw-bold mb-3">Transfer Sesama Bank</h3>
      <Button
        className={"col-md-12 btn-primary align-text-left"}
        style={{ textAlign: "left" }}
        type="button"
      >
        <i className="fa fa-arrow-left"></i> Back
      </Button>
      <InputForm className={"mb-3 mt-3"}>
        <InputForm.Label to="rek">
          <h3 className="fw-bold mb-3">No. Rekening</h3>
        </InputForm.Label>
        <InputForm.Input
          type="number"
          name="rek"
          placeholder="Masukkan no. rekening"
          required
        />
      </InputForm>
      <InputForm className={"mb-3 mt-3"}>
        <InputForm.Label to="nominal">
          <h3 className="fw-bold mb-3"> Nominal</h3>
        </InputForm.Label>
        <InputForm.Input
          type="number"
          name="nominal"
          placeholder="Masukkan nominal transfer"
          required
        />
      </InputForm>
      <InputForm className={"mb-3 mt-3"}>
        <InputForm.Label to="catatan">
          <h3 className="fw-bold mb-3"> Catatan</h3>
        </InputForm.Label>
        <InputForm.TextArea
          name="catatan"
          placeholder="Masukkan catatan"
          rows="6"
          required
        />
      </InputForm>
      <InputForm className={"mb-3 mt-3 form-check"}>
        <InputForm.Input
          className="form-check-input me-2"
          name="remember"
          type="checkbox"
          required
        />
        <InputForm.Label to="remember">
          <p className="form-check-label"> Catatan</p>
        </InputForm.Label>
      </InputForm>
      <Button className={"btn btn-primary col-md-12"} type="button">
        Lanjutkan
      </Button>
    </Layout>
  );
}

export default Transfer;
