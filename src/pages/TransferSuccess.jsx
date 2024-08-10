import React from "react";
import Layout from "@/layout/Layout";
import { CardVertical } from "@/components/Card/index";
import { useLocation, Link } from "react-router-dom";

function TransferSuccess() {
  const { state } = useLocation();

  return (
    <Layout type={"necktie"} className={"haveStyle"}>
      <div style={{ marginTop: "-20vh" }}></div>
      <CardVertical
        className={"shadow p-0 border-0 mb-5 px-1 px-md-5 success"}
        data={{
          transaction_date: state.transaction_date,
          transaction_num: state.transaction_num,
          accountnum_recipient: state.accountnum_recipient,
          name_recipient: state.name_recipient,
          nominal: state.nominal,
          note: state.note,
        }}
      >
        <div className="d-flex justify-content-end mb-3 mb-sm-5">
          <Link
            to="/home"
            className="m-0"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            role="button"
            aria-label="kembali ke halaman home"
          >
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </Link>
        </div>
      </CardVertical>
    </Layout>
  );
}

export default TransferSuccess;
