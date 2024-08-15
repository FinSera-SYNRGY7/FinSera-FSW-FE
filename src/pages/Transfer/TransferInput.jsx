import React, { useState, useEffect } from "react";
import { CardHorizontal, CardInfoSaldo } from "@/components/Card/index";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount";
import { formatRupiah } from "@/lib/utils";

function Transfer() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, isPending, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [savedContact, setSavedContact] = useState(false);

  const { data: dataAmount, isLoading:isLoadingAmount } = useInfoAmount();

  const saveContactAct = ({
    accountnum_recipient,
    name_recipient,
    bank_name,
  }) => {
    const getListContacts =
      localStorage.getItem("list_contacts") == null
        ? []
        : JSON.parse(localStorage.getItem("list_contacts"));

    const cloneArr = [...getListContacts];

    if (
      getListContacts.findIndex(
        (elem) => elem.accountnum_recipient == accountnum_recipient
      ) === -1
    ) {
      cloneArr.push({
        accountnum_recipient,
        name_recipient,
        bank_name,
      });
    }

    localStorage.setItem("list_contacts", JSON.stringify(cloneArr));
  };

  const submit = (value) => {
    if (savedContact) {
      saveContactAct({
        accountnum_recipient: state.accountnum_recipient,
        name_recipient: state.name_recipient,
        bank_name: "BCA",
      });
    }

    navigate("/transfer-sesama-bank/konfirmasi", {
      state: {
        accountnum_recipient: state.accountnum_recipient,
        name_recipient: state.name_recipient,
        bank_name: state.bank_name,
        nominal: value.nominal,
        note: value.note,
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
        >
          <Link
            to="/transfer-sesama-bank"
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
          <span role="label" aria-label="Transfer Sesama Bank">
            Transfer Sesama Bank
          </span>
        </h1>
      </div>
      <Link
        to="/transfer-sesama-bank"
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
      <form method="POST" onSubmit={handleSubmit(submit)}>
        <CardHorizontal
          className={"shadow p-0 border-0 outline"}
          aria-label="akun transfer terakhir"
          data={{
            name_recipient: state.name_recipient,
            bank_name: `Bank ${state.bank_name}`,
          }}
        />
        <InputForm className={"d-flex my-4 form-check align-items-center"}>
          <InputForm.Input
            className="form-check-input me-2 p-0 border-black border-2"
            name="remember"
            type="checkbox"
            aria-labelledby="remember-label"
            onChange={(e) => setSavedContact(e.target.checked)}
          />
          <InputForm.Label to="remember" id="remember-label">
            <p className="form-check-label mb-0">
              <span role="checkbox" aria-label="Tambahkan ke daftar tersimpan">
                Tambahkan ke daftar tersimpan
              </span>
            </p>
          </InputForm.Label>
        </InputForm>
        <CardInfoSaldo 
          className={"shadow p-0 border-0 mb-5"}
          first="col-1"
          second="col-2"
          data={{
            amount: isLoadingAmount ? null : dataAmount.amount.amount
          }}
        />
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
            placeholder="Masukkan nominal transfer"
            aria-labelledby="nominal-label"
            type="number"
            onWheel={(e) => e.target.blur()}
            required
            {...register("nominal")}
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
            required
            {...register("note")}
          />
        </InputForm>
        {dataAmount != null ? (
          <Button
            className={"btn base-color col-12 mb-5 shadow-hover"}
            aria-label="Lanjutkan"
            type="submit"
            disabled={isPending}
          >
            <h5 className="mb-0">Lanjutkan</h5>
          </Button>
        ) : (
          <Button
            className={"btn base-color col-12 mb-5 shadow-hover"}
            aria-label="Lanjutkan"
            type="submit"
            disabled
          >
            <h5 className="mb-0">Lanjutkan</h5>
          </Button>
        )}
      </form>
    </Layout>
  );
}

export default Transfer;
