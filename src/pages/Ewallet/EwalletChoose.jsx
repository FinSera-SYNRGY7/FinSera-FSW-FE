import React from "react";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { ServiceMenu } from "@/components/Menu";
import logoOvo from "@/assets/logo/logoOvo.svg";
import logoDana from "@/assets/logo/logoDana.svg";
import logoGopay from "@/assets/logo/logoGopay.svg";
import logoPaypal from "@/assets/logo/logoPaypal.svg";
import logoShopeePay from "@/assets/logo/logoShopeePay.svg";

function EwalletChoose() {
  const navigate = useNavigate();
  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-arrow-left" />
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="E-wallet">
            E-wallet
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
          navigate(-1);
        }}
      >
        <i className="fa fa-arrow-left" />
        <span className="ms-20">Back</span>
      </Button>
      <div
        className="d-flex flex-wrap gap-3"
        aria-label="pilih e-wallet"
        role="menu"
      >
        <ServiceMenu color="ovo-color" icon={logoOvo} label="OVO" />
        <ServiceMenu color="dana-color" icon={logoDana} label="DANA" />
        <ServiceMenu color="gopay-color" icon={logoGopay} label="GOPAY" />
        <ServiceMenu color="paypal-color" icon={logoPaypal} label="PAYPAL" />
        <ServiceMenu
          color="spay-color"
          icon={logoShopeePay}
          label="SHOPEE PAY"
        />
      </div>
    </Layout>
  );
}

export default EwalletChoose;
