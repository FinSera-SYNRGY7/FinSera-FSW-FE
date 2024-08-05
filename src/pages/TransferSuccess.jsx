import React from "react";
import Layout from "@/layout/Layout";
import { CardVertical } from "@/components/Card/index";
import { useLocation } from "react-router-dom";

function TransferSuccess() {
  
  const {state} = useLocation()
  
  console.log(state)
  
  return (
    <Layout type={"necktie"} className={"haveStyle"}>
      <div style={{ marginTop: "-20vh" }}></div>
      <CardVertical
        className={"shadow p-0 border-0 mb-5 px-1 px-md-5 success"}
        data={{
          transaction_date:state.transaction_date,
          transaction_num:state.transaction_num,
          accountnum_recipient:state.accountnum_recipient,
          name_recipient:state.name_recipient,
          nominal:state.nominal,
          note:state.note
        }}
      ></CardVertical>
    </Layout>
  );
}

export default TransferSuccess;
