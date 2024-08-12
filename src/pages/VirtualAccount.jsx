import { CardHorizontalAlt } from "../components/Card";
import VaIcon from "../assets/img/VaIcon.svg";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/layout/Layout";
import Button from "@/components/Button/index";
import styles from "@/assets/css/InterbankTransfer.module.css";

const VirtualAccount = () => {
  return (
    <Layout className="haveStyle">
      <div className="d-flex align-items-baseline pt-5">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button"
        >
          <Button
            className="d-sm-none p-0"
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <i className="fa fa-arrow-left" />
          </Button>
        </Link>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Virtual Account">
            Virtual Account
          </span>
        </h1>
      </div>
      <div className="d-flex justify-content-end justify-content-sm-between gap-5 mb-sm-4">
        <Link
          to="/home"
          className={styles.backButton}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button"
        >
          <Button
            className={
              "d-none d-sm-block flex-grow-1 base-color w-100 text-sm-start d-flex shadow-hover"
            }
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <i className="fa fa-arrow-left"></i>
            <span className="ms-20">Beranda</span>
          </Button>
        </Link>
        <Link
          to="/virtual-account/form-input"
          className="m-0"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          role="button"
          aria-label="Tambah penerima baru"
        >
          <Button
            className={"d-flex align-items-center btn-outline-base-color"}
            type="button"
            role="button"
            aria-label="Tambah penerima baru"
          >
            <i className="fa fa-plus me-2"></i>
            {/* <p className="m-0">Tambah Penerima Baru</p> */}
            Tambah Penerima Baru
          </Button>
        </Link>
      </div>
      <h4 className="fw-bold mb-3 pt-3">
        <span role="label" aria-label="Transfer Terakhir">
          Transfer Terakhir
        </span>
      </h4>
      <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-5">
        <div className="flex-fill">
          <CardHorizontalAlt
            img={VaIcon}
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient: "Kusuma Dewi",
              transaction_name: "TransferPay",
              no_transaction: "4257618919010",
            }}
          />
        </div>
        <div className="flex-fill">
          <CardHorizontalAlt
            img={VaIcon}
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient: "Kusuma Dewi",
              transaction_name: "TransferPay",
              no_transaction: "4257618919010",
            }}
          />
        </div>
        <div className="d-none d-md-block flex-fill">
          <CardHorizontalAlt
            img={VaIcon}
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient: "Kusuma Dewi",
              transaction_name: "TransferPay",
              no_transaction: "4257618919010",
            }}
          />
        </div>
        <div className="d-none d-lg-block flex-fill">
          <CardHorizontalAlt
            img={VaIcon}
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient: "Kusuma Dewi",
              transaction_name: "TransferPay",
              no_transaction: "4257618919010",
            }}
          />
        </div>
      </div>
      <h4 className="fw-bold mb-3">Daftar Tersimpan</h4>
      <CardHorizontalAlt
        img={VaIcon}
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient: "Kusuma Dewi",
          transaction_name: "TransferPay",
          no_transaction: "4257618919010",
        }}
      />
      <CardHorizontalAlt
        img={VaIcon}
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient: "Kusuma Dewi",
          transaction_name: "TransferPay",
          no_transaction: "4257618919010",
        }}
      />
      <div className="mb-5"></div>
    </Layout>
  );
};
export default VirtualAccount;
