import { useState } from "react";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { CardHorizontalAlt } from "@/components/Card";
import { CardInfoSaldo } from "@/components/Card/index";
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import VaIcon from "@/assets/img/VaIcon.svg";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import styles from "@/assets/css/Login.module.css"

const VirtualAccountTfInput = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [savedContact, setSavedContact] = useState(false);

  const { data: dataAmount, isLoading:isLoadingAmount } = useInfoAmount();
  
  const { register, isPending, handleSubmit, setValue } = useForm()

  const saveContactAct = ({
    accountNum,
    accountName,
    typeTranscation,
    nominal
  }) => {
    const getListContacts =
      localStorage.getItem("list_contacts_virtual_account") == null
        ? []
        : JSON.parse(localStorage.getItem("list_contacts_virtual_account"));

    const cloneArr = [...getListContacts];

    if (
      getListContacts.findIndex(
        (elem) => elem.accountNum == accountNum
      ) === -1
    ) {
      cloneArr.push({
        accountNum,
        accountName,
        typeTranscation,
        nominal
      });
    }

    localStorage.setItem("list_contacts_virtual_account", JSON.stringify(cloneArr));
  };

  const submit = (value) => {
    if (savedContact) {
      saveContactAct({
        accountNum: state.accountNum,
        accountName: state.accountName,
        typeTranscation: state.typeTranscation,
        nominal: state.nominal,
      });
    }

    navigate("/transfer-virtual-account/konfirmasi", {
      state: {
        accountNum: state.accountNum,
        accountName: state.accountName,
        typeTranscation: state.typeTranscation,
        nominal: state.nominal,
      },
    });
  };

  return (
    <Layout className="haveStyle">
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <Link
            to="/transfer-virtual-account"
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
          <span role="label" aria-label="Virtual Account">
            Virtual Account
          </span>
        </h1>
      </div>
      <Link
        to="/transfer-virtual-account"
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
        <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-5">
          <div className="flex-fill">
            <CardHorizontalAlt
              img={VaIcon}
              className={"shadow p-0 border-0 outline"}
              aria-label="akun transfer terakhir"
              data={{
                name_recipient: state.accountName,
                transaction_name: state.typeTranscation,
                no_transaction: state.accountNum,
              }}
            />
            <InputForm className={"d-flex my-4 form-check align-items-center"}>
              <InputForm.Input
                className="form-check-input me-2 p-0 border-black border-2"
                name="remember"
                type="checkbox"
                aria-labelledby="remember-label"
                onChange={ (e) => setSavedContact(e.target.checked)}
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
          </div>
        </div>
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
            readOnly
            disabled
            value={state.nominal}
            required
            {...register("nominal")}
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
};

export default VirtualAccountTfInput;
