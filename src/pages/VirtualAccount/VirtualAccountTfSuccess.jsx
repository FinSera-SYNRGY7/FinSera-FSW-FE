import Layout from "@/layout/Layout";
import { useLocation, Link } from "react-router-dom";
import { CardVirtualAccountSuccess } from "@/components/Card";
import { formatRupiah } from "@/lib/utils";


const VASuccess = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <Layout type={"necktie"} className={"haveStyle"}>
      <div style={{ marginTop: "-20vh" }}></div>
      <CardVirtualAccountSuccess
          className={"shadow p-0 border-0 mb-5 px-1 px-md-5 success"}
          data={{
            transaction_date: state.transactionDate,
            transaction_num: state.transactionNum,
            name_recipient: state.recipientName,
            type_transaksi: "Virtual Account",
            nominal: formatRupiah(state.nominal),
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
      </CardVirtualAccountSuccess>
    </Layout>
  )
};

export default VASuccess;