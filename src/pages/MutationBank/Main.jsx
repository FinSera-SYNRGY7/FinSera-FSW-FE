import moment from 'moment'
import Layout from "@/layout/Layout"
import styles from "@/assets/css/AccountMutation.module.css"
import DropdownSumberRekening from "@/components/dropdownSumberRekening/Dropdown"
import imgEmptyData from "@/assets/img/No data-pana 1.png"
import { useState } from "react"
import { PopupDate } from "@/components/PopUp"
import { httpServer } from "@/lib/server";
import { useNavigate } from "react-router-dom"
import { CardMutation } from "@/components/Card"
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount"
import { useMutationBank } from '@/features/mutationBank/useMutationBank'
import { ButtonAlt, ButtonIcon } from "@/components/ButtonAlt"
import { formatRupiah, formatDateIndo, formatTimeIndo, checkTypeTransaction, minusOneMonth, minusOneWeek } from "@/lib/utils"

const AccountMutation = () => {
  const [dataFilterDate, setDataFilterDate] = useState({})
  const [isLoadingDownload, setIsLoadingDownload] = useState(false)
  const [showDateRangePopup, setShowDateRangePopup] = useState(false);
  const navigate = useNavigate();

  const handleButtonBack = () => {
    navigate("/home")
  }

  const handleFilterHariIni = () => {
    setDataFilterDate({})
    setDataFilterDate({
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("filter hari ini", moment().format("YYYY-MM-DD"))
    // console.log("cek data FilterDate", dataFilterDate)
    
  }

  const handleFilterSeminggu = () => {
    setDataFilterDate({})
    setDataFilterDate({
      startDate: minusOneWeek(),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("kurangin 7 hari", minusOneWeek())
    // console.log("cek data FilterDate", dataFilterDate)
    
  }

  const handleFilterSebulan = () => {
    setDataFilterDate({})
    setDataFilterDate({
      startDate: minusOneMonth(),
      endDate: moment().format("YYYY-MM-DD"),
      page: 1,
      size: 20
    })
    // console.log("kurangin 1 bulan", minusOneMonth())
    // console.log("cek data FilterDate", dataFilterDate)
    
  }

  const handleDownload = async () => {
    try {
      setIsLoadingDownload(true)
      const requestDownload = await httpServer.get('/api/v1/mutasi/download', {
        responseType: 'blob',
        params: dataFilterDate
      });
  
      const url = window.URL.createObjectURL(new Blob([requestDownload.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Mutasi Rekening ${dataAmount.accountNumber}.pdf`);
      document.body.appendChild(link);
      link.click();
  
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      setIsLoadingDownload(false)
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  
  const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount()
  const { 
    data: dataAccountMutation, 
    isLoading: isLoadingMutation, 
    isError: isErrorMutation, 
  } = useMutationBank(dataFilterDate)

  const renderLoadingDataMutation = () => {
    const loopDataLoading =  [1, 2, 3, 4, 5]
    return loopDataLoading.map((item, index) => {
      return (
        <>
          <CardMutation
            key={index}
            isLoading={isLoadingMutation}
          />
        </>
      )
    })
  }

  const renderDataMutation = () => {          
    return dataAccountMutation?.map((row, key) => {
      let color
      let nominal
      let typeTxn
      const typeTransaction = checkTypeTransaction(row.transactionInformation)

      if(typeTransaction == 'Uang Masuk') {
        color = '#12D79C'
        nominal = `+ ${formatRupiah(row.amountTransfer.amount)}`
        typeTxn = `Terima Uang dari ${row.destinationNameAccountNumber}`
      } else {
        color = 'red'
        nominal = `- ${formatRupiah(row.amountTransfer.amount)}`
        typeTxn = `Transfer Uang ke ${row.destinationNameAccountNumber}`
      }

      return (
        <>
          <CardMutation
            color={color}
            dateTXN={formatDateIndo(row.transactionDate)}
            noTXN={row.noTransaction}
            nominal={nominal}
            time={formatTimeIndo(row.transactionDate)}
            typeTXN={typeTxn}
            key={key}
          />
        </>
      )
    })
  }

  const handlePopupDateRange = (e) => {
    e.preventDefault();
    setShowDateRangePopup(true);
  };

  const handleClosePopupDateRange = () => {
    setShowDateRangePopup(false);
  };

  const BulanOptions = [
    { value: '01', label: 'Januari' },
    { value: '02', label: 'Februari' },
    { value: '03', label: 'Maret' },
    { value: '04', label: 'April' },
    { value: '05', label: 'Mei' },
    { value: '06', label: 'Juni' },
    { value: '07', label: 'Juli' },
    { value: '08', label: 'Agustus' },
    { value: '09', label: 'September' },
    { value: '10', label: 'Oktober' },
    { value: '11', label: 'November' },
    { value: '12', label: 'Desember' }
  ];

  const handleConfirmDateRange = (dateRange) => {
    const startRangeDate = `${dateRange.startYear}-${dateRange.startMonth.value}-${dateRange.startDate}`
    const endRangeDate = `${dateRange.endYear}-${dateRange.endMonth.value}-${dateRange.endDate}`
    setDataFilterDate({})
    setDataFilterDate({
      startDate: startRangeDate,
      endDate: endRangeDate,
      page: 1,
      size: 20
    })
    // console.log("cek startRangeDate", startRangeDate)
    // console.log("cek endRangeDate", endRangeDate)
    // console.log("Selected Date Range:", dateRange);
    
  };

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
          <DropdownSumberRekening
            title="Sumber Rekening"
            subtitle={dataAmount?.accountNumber}
            className="dropdownSumberRekening"
            isLoading={isLoadingAmount}
          />
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
            <ButtonAlt
              label="Tanggal"
              onClick={(e) => handlePopupDateRange(e)}
              variant="btnAltSecondary"
              aria-label="Filter Rentang Tanggal"
            />
          </div>
          <div className={`${styles.section2}`}>
          <ButtonIcon
            label="Download"
            variant="btnDownload2nd"
            onClick={() => handleDownload()}
            isLoading={isLoadingMutation}
            isLoadingDownload={isLoadingDownload}
          />
          </div>
        </div>
        <div className={`d-flex flex-column w-100 align-items-center ${styles.containerCard}`}>
          {isLoadingMutation ? (
            <>
            {renderLoadingDataMutation()}
            <div className={styles.btnDownloadAndro}>
                <ButtonAlt
                  label="Download"
                  variant="btnAltPrimary"
                  isLoading={isLoadingMutation}
                />
              </div>
            </>
          ) : (
            !isErrorMutation ? (
            <>
              {renderDataMutation()}
              <div className={styles.btnDownloadAndro}>
                <ButtonAlt
                  label="Download"
                  variant="btnAltPrimary"
                  onClick={() => handleDownload()}
                  isLoading={isLoadingMutation}
                  isLoadingDownload={isLoadingDownload}
                />
              </div>
            </>
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
      {showDateRangePopup && (
        <PopupDate handleClosePopup={handleClosePopupDateRange} options={BulanOptions} handleConfirmDate={handleConfirmDateRange} />
      )}
    </Layout>
  )
}

export default AccountMutation
