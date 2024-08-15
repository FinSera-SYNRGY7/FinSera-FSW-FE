import React from "react"
import Layout from "@/layout/Layout"
import CardInfoSaldo from "@/components/cardinfosaldo/CardInfoSaldo"
import { ServiceMenu } from "@/components/Menu"
import { CardTransaction } from "@/components/Card"
import ticket from "@/assets/logo/Ticket Star.svg"
import document from "@/assets/logo/Document.svg"
import tfbank from "@/assets/logo/Vector1.svg"
import tfinterbank from "@/assets/logo/Vector.svg"
import vAccount from "@/assets/logo/Folder.svg"
import wallet from "@/assets/logo/Wallet.svg"
import investation from "@/assets/logo/Activity.svg"
import styles from "@/assets/css/Homepage.module.css"
import Spinner from "react-bootstrap/Spinner"
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount"
import { formatRupiah } from "@/lib/utils"
import { useMutationBank } from "@/features/mutationBank/useMutationBank"

const Home = () => {
  const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount()
  
  const { data: dataMutation, isLoading: isLoadingMutation } = useMutationBank({}, true)

  return (
    <Layout>
      <div
        style={{
          background:
            "linear-gradient(to bottom, #E9F5FE, #0066AE) no-repeat, white",
          backgroundSize: "100% 65%, 100% 35%",
          // margin: "0",
        }}
      >
        <div className={`${styles.containerHome} d-flex flex-column z-1`}>
        {isLoadingAmount ? (
          <div className="text-center w-100">
              <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
          </div>
        ) : (
          <CardInfoSaldo
            profile={dataAmount.username}
            norek={dataAmount.accountNumber}
            saldo={formatRupiah(dataAmount.amount.amount)}
            aria-label="Informasi Saldo Akun"
          />
        )}
        </div>
      </div>
      <div className={`d-flex ${styles.titleServiceMenu}`}>
        <h1>Menu</h1>
      </div>
      <div
        className={styles.cardsMenu}
        role="navigation"
        aria-label="Menu Layanan"
      >
        <ServiceMenu
          navigation="/info-saldo"
          icon={ticket}
          label="Info Saldo"
        />
        <ServiceMenu
          navigation="/mutasi-rekening"
          icon={document}
          label="Mutasi"
        />
        <ServiceMenu
          navigation="/transfer-sesama-bank"
          icon={tfbank}
          label="Transfer Sesama Bank"
        />
        <ServiceMenu
          navigation="/transfer-antar-bank"
          icon={tfinterbank}
          label="Transfer Antar Bank"
        />
        <ServiceMenu icon={vAccount} label="Virtual Account" navigation="/virtual-account" />
        <ServiceMenu icon={wallet} label="E - Wallet" />
        <ServiceMenu icon={investation} label="Investasi" />
      </div>
      <div
        className={`d-flex flex-column align-items-start ${styles.containerCardsTXN}`}
        aria-labelledby="riwayat-transaksi"
      >
        <div className="d-flex flex-row justify-content-between mb-4 w-100 align-items-center">
          <h1 id="riwayat-transaksi" className="m-0">
            Riwayat Transaksi
          </h1>
          <a
            href="/mutasi-rekening"
            style={{
              fontSize: "16px",
              color: "black",
              textDecoration: "none",
            }}
            aria-label="Lihat Semua Riwayat Transaksi"
          >
            Lihat Semua
          </a>
        </div>
        <div className={styles.cardsTXN} role="list">
        {
          isLoadingMutation ?   
          <>
          <CardTransaction
              titleTXN=""
              typeTXN=""
              priceTXN=""
              isLoading={isLoadingMutation}
            />
            <CardTransaction
              titleTXN=""
              typeTXN=""
              priceTXN=""
              isLoading={isLoadingMutation}
            />
            <CardTransaction
              titleTXN=""
              typeTXN=""
              priceTXN=""
              isLoading={isLoadingMutation}
            />
          </> : 
          dataMutation.map((value, index) => (
            value.transactionsType == 'SESAMA_BANK' ?
            <CardTransaction
              key={index}
              titleTXN="Transfer Sesama Bank"
              typeTXN={value.destinationBankName}
              priceTXN={formatRupiah(value.amountTransfer.amount)}
            /> : 
            value.transactionsType == 'ANTAR_BANK' ? 
            <CardTransaction
              key={index}
              titleTXN="Transfer Antar Bank"
              typeTXN={value.destinationBankName}
              priceTXN={formatRupiah(value.amountTransfer.amount)}
            /> : 
            value.transactionsType == 'VIRTUAL_ACCOUNT' ?
            <CardTransaction
              key={index}
              titleTXN="Transfer VA"
              typeTXN={value.destinationBankName}
              priceTXN={formatRupiah(value.amountTransfer.amount)}
            /> :
            <CardTransaction
              key={index}
              titleTXN="TopUp E-Wallet"
              typeTXN={value.destinationBankName}
              priceTXN={formatRupiah(value.amountTransfer.amount)}
            />
          ))
        }
        </div>
      </div>
    </Layout>
  )
}

export default Home
