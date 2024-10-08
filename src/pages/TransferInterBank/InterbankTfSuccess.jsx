import React from "react";
import Layout from "@/layout/Layout";
import { useLocation, Link } from "react-router-dom";
import { CardVerticalAlt } from "@/components/Card";
import { CardVertical } from "@/components/Card/index";

const InterbankTfSuccess = () => {
  const { state } = useLocation();

  return (
    <div>
      <Layout type={"necktie"} className={"haveStyle"}>
        <div style={{ marginTop: "-20vh" }}></div>
        <CardVerticalAlt
          className={"shadow p-0 border-0 mb-5 px-1 px-md-5 success"}
          data={{
            transaction_date: state.transaction_date,
            transaction_num: state.transaction_num,
            accountnum_recipient: state.accountnum_recipient,
            name_recipient: state.name_recipient,
            type_transaksi: "Transfer Antar Bank",
            nominal: state.nominal,
            nominal_admin: state.admin_fee,
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
        </CardVerticalAlt>
      </Layout>
    </div>
  );
};
export default InterbankTfSuccess;
