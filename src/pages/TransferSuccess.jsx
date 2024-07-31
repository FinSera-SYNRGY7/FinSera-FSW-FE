import React from "react";
import Layout from "./../layout/Layout";
import { CardVertical } from "./../components/Card/index";

function TransferSuccess() {
  return (
    <Layout type={"necktie"} className={"haveStyle"}>
      <div style={{ marginTop: "-20vh" }}></div>
      <CardVertical
        className={"shadow p-0 border-0 mb-5 px-5"}
        style={{ borderRadius: "70px" }}
      ></CardVertical>
    </Layout>
  );
}

export default TransferSuccess;
