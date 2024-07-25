import React from "react";
import Layout from "./../layout/Layout";
import Button from "./../components/Button/index";
import { CardVertical } from "./../components/Card/index";
import { BiBorderRadius } from "react-icons/bi";

function TransferSuccess() {
  return (
    <Layout type={"necktie"} className={"haveStyle"}>
      <div style={{ marginTop: "-20vh" }}></div>
      <CardVertical
        className={"shadow p-0 border-0 mb-5 p-5"}
        style={{ borderRadius: "70px" }}
      ></CardVertical>
    </Layout>
  );
}

export default TransferSuccess;
