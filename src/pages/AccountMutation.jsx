import React, { useState } from "react"
import moment from 'moment'
import Layout from "@/layout/Layout"
import { CardMutation } from "@/components/Card"
import FilterDate from "@/components/FilterDate"
import imgEmptyData from "@/assets/img/No data-pana 1.png"
import styles from "@/assets/css/AccountMutation.module.css"
import { ButtonAlt, ButtonIcon } from "@/components/ButtonAlt"
import { useNavigate } from "react-router-dom"
import DropdownSumberRekening from "@/components/dropdownSumberRekening/Dropdown"
import Spinner from "react-bootstrap/Spinner"
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount"
import { useQuery } from "@tanstack/react-query";
import { httpServer } from "@/lib/server";
import { formatRupiah, formatDateYMD, formatDateIndo, formatTimeIndo, checkTypeTransaction, minusOneMonth, minusOneWeek } from "@/lib/utils"

const AccountMutation = () => {
  const [startRangeDate, setStartRangeDate] = useState("");
  const [endRangeDate, setEndRangeDate] = useState("");
  const [dataFilterDate, setDataFilterDate] = useState({})
  const [selectedOption, setSelectedOption] = useState("");
  const [emptyData, setEmptyData] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (value) => {
    setSelectedOption(value)
    console.log("Selected option:", value)
  }

  const handleEmptyData = () => {
    setEmptyData(true)
  }

  const handleStartDate = (date) => {
    setStartRangeDate(formatDateYMD(date));
    if(startRangeDate != "" && endRangeDate != "") {
      setDataFilterDate({
        startDate: startRangeDate,
        endDate: endRangeDate,
        page: 1,
        size: 20
      })
      // console.log("filter Start Range Date", startRangeDate)
      // console.log("filter End Range Date", endRangeDate)
      // console.log("cek data FilterDate", dataFilterDate)
      refetchAccountMutation()
    }
  };

  const handleEndDate = (date) => {
    setEndRangeDate(formatDateYMD(date));
    if(startRangeDate != "" && endRangeDate != "") {
      setDataFilterDate({
        startDate: startRangeDate,
        endDate: endRangeDate,
        page: 1,
        size: 20
      })
      // console.log("filter Start Range Date", startRangeDate)
      // console.log("filter End Range Date", endRangeDate)
      // console.log("cek data FilterDate", dataFilterDate)
      refetchAccountMutation()
    }
  };

  const handleButtonBack = () => {
    navigate("/home")
  }

  const handleFilterHariIni = () => {
    // setFilterDate({})
    setDataFilterDate({
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("filter hari ini", moment().format("YYYY-MM-DD"))
    // console.log("cek data FilterDate", dataFilterDate)
    refetchAccountMutation()
  }

  const handleFilterSeminggu = () => {
    // setFilterDate({})
    setDataFilterDate({
      startDate: minusOneWeek(),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("kurangin 7 hari", minusOneWeek())
    // console.log("cek data FilterDate", dataFilterDate)
    refetchAccountMutation()
  }

  const handleFilterSebulan = () => {
    // setFilterDate({})
    setDataFilterDate({
      startDate: minusOneMonth(),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("kurangin 1 bulan", minusOneMonth())
    // console.log("cek data FilterDate", dataFilterDate)
    refetchAccountMutation()
  }

  const options = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
    { value: "action3", label: "Action 3" },
  ]

  const fetchAccountMutation = async() => {
    const request = await httpServer.get('/api/v1/mutasi',{
      params: dataFilterDate
    })
    
    return request.data.data
  }
  
  const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount()
  const { data: dataAccountMutation, isLoading: isLoadingMutation, refetch: refetchAccountMutation, isError: isErrorMutation, isRefetching: isRefetchingMutation} = useQuery({
    queryFn: fetchAccountMutation,
    queryKey: ['fetchAccountMutation']
  })


  const renderDataMutation = () => {          
    return dataAccountMutation?.map((row, key) => {
      let color
      let nominal
      const typeTransaction = checkTypeTransaction(row.transactionInformation)

      if(typeTransaction == 'Uang Masuk') {
        color = '#12D79C'
        nominal = `+ Rp. ${row.amountTransfer.amount}`
      } else {
        color = 'red'
        nominal = `- Rp. ${row.amountTransfer.amount}`
      }

      return (
        <>
          <CardMutation
            color={color}
            dateTXN={formatDateIndo(row.transactionDate)}
            noTXN={row.noTransaction}
            nominal={nominal}
            time={formatTimeIndo(row.transactionDate)}
            typeTXN={typeTransaction}
            key={key}
          />
        </>
      )
    })
  }

  return (
    <Layout>
      <div className={`d-flex flex-column ${styles.containerMutation}`}>
        <div className={`d-flex flex-row ${styles.titleMutation}`}>
          <div className={styles.buttonAdroid}>
            <ButtonIcon
              label="Beranda"
              onClick={() => handleButtonBack()}
              variant="btnBack"
            />
          </div>
          <h1 aria-label="Mutasi Rekening">Mutasi Rekening</h1>
        </div>
        <div
          className={`d-flex flex-row w-100 justify-content-between ${styles.btnSection}`}
        >
          <div className={styles.buttonWeb}>
            <ButtonIcon
              label="Beranda"
              onClick={() => handleButtonBack()}
              variant="btnBack"
            />
          </div>
          {isLoadingAmount ? (
              <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
          ) : (
          <DropdownSumberRekening
            options={options}
            onOptionSelect={handleOptionSelect}
            title="Sumber Rekening"
            subtitle={dataAmount.accountNumber}
            className="dropdownSumberRekening"
          />
          )}
        </div>
        <div
          className={`d-flex flex-row w-100 justify-content-between ${styles.containerFilter}`}
        >
          <div
            className={`${styles.section1} justify-content-between w-50 d-flex flex-row`}
          >
            <ButtonAlt
              label="Hari ini"
              onClick={() => handleFilterHariIni()}
              variant="btnAltSecondary"
              aria-label="Filter Hari Ini"
            />
            <ButtonAlt
              label="7 Hari"
              onClick={() => handleFilterSeminggu()}
              variant="btnAltSecondary"
              aria-label="Filter 7 Hari"
            />
            <ButtonAlt
              label="1 Bulan"
              onClick={() => handleFilterSebulan()}
              variant="btnAltSecondary"
              aria-label="Filter 1 Bulan"
            />
            <FilterDate
              startDate={startRangeDate}
              endDate={endRangeDate}
              onStartDateChange={handleStartDate}
              onEndDateChange={handleEndDate}
            />
          </div>
          <div className={`${styles.section2}`}>
            {!isErrorMutation ? (
              <>
                <ButtonIcon
                  label="Download"
                  onClick={() => console.log("Solid Download Clicked")}
                  variant="btnDownload2nd"
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={`d-flex flex-column w-100 align-items-center ${styles.containerCard}`}>
          {isLoadingMutation || isRefetchingMutation ? (
            <div className="text-center w-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          ) : (
            !isErrorMutation ? (
               // <>
            //   <CardMutation
            //     color="red"
            //     dateTXN="7 juli 2024"
            //     noTXN="121313112343111 DBT4"
            //     nominal="- Rp. 200.000"
            //     time="11:12:21 WIB"
            //     typeTXN="Uang Keluar"
            //   />
            //   <CardMutation
            //     color="red"
            //     dateTXN="5 juli 2024"
            //     noTXN="12142332343111 DBT4"
            //     nominal="- Rp. 100.000"
            //     time="11:12:21 WIB"
            //     typeTXN="Uang Keluar"
            //   />
            //   <CardMutation
            //     color="#12D79C"
            //     dateTXN="1 juli 2024"
            //     noTXN="531313112343111 DBT4"
            //     nominal="+ Rp. 2.100.000"
            //     time="11:12:21 WIB"
            //     typeTXN="Uang Masuk"
            //   />
            //   <div className={styles.btnDownloadAndro}>
            //     <ButtonAlt
            //       label="Download"
            //       onClick={() => console.log("Download")}
            //       variant="btnAltPrimary"
            //     />
            //   </div>
            // </>
              renderDataMutation()
              // <h1>render Mutation</h1>
            ) : (
              <div className={styles.emptyData}>
                <img
                  src={imgEmptyData}
                  alt="Data Kosong"
                  aria-hidden="true"
                ></img>
                <p aria-label="Oops! Riwayat mutasi kosong">
                  Oops! Riwayat mutasi kosong
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AccountMutation
