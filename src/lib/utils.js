import { useNavigate } from "react-router-dom"

const checkIfLogin = (url, func) => {
  if(localStorage.getItem('auth_token') !== null) {
    func(url)
  }
}

let globalNavigate

const GlobalHistory = () => {
  globalNavigate = useNavigate()

  return null
}

const formatRupiah = (currency) => {
  return new Intl.NumberFormat('id-ID', { minimumFractionDigits:0 }).format(currency)
}

const formatDateIndo = (date) => {
  const newDate = new Date(date)
  const formatter = new Intl.DateTimeFormat('id-ID', { 
    year:'numeric',
    month:'long',
    day:'numeric',
    timeZone:'Asia/Makassar',
    // hour:'numeric',
    // minute: 'numeric',
    // hour12:false
  })
  return formatter.format(newDate)
}

const formatTimeIndo = (date) => {
  const newDateTime = new Date(date)
  const formatter = new Intl.DateTimeFormat('id-ID', { 
    hour:'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone:'Asia/Jakarta',
    timeZoneName: "short",
    hour12:false
  })
  return formatter.format(newDateTime)
}


const checkTypeTransaction = (typeTransaction) => {
  if(typeTransaction == 'UANG_MASUK') {
    return 'Uang Masuk'
  } else {
    return 'Uang Keluar'
  }
}

const minusOneMonth = () => {
  const now = new Date()
  const currentMonth = now.getMonth()
  const prevYear = currentMonth - 1 // kurangin 1 bulan

  now.setFullYear(now.getFullYear())
  now.setMonth(prevYear)
  now.setDate(now.getDate())

  return new Date(now.getTime() - (now.getTimezoneOffset() * 60000 ))
  .toISOString()
  .split("T")[0]
}

const minusOneWeek = () => {
  const now = new Date()
  const currentDate = now.getDate()
  const prevDate = currentDate - 7 // kurangin 7 hari

  now.setFullYear(now.getFullYear())
  now.setMonth(now.getMonth())
  now.setDate(prevDate)

  return new Date(now.getTime() - (now.getTimezoneOffset() * 60000 ))
  .toISOString()
  .split("T")[0]
}

const formatDateYMD = (date) => {
  const dateFormatYmd = new Date(date)
  dateFormatYmd.setFullYear(dateFormatYmd.getFullYear())
  dateFormatYmd.setMonth(dateFormatYmd.getMonth())
  dateFormatYmd.setDate(dateFormatYmd.getDate())

  return new Date(dateFormatYmd.getTime() - (dateFormatYmd.getTimezoneOffset() * 60000 ))
  .toISOString()
  .split("T")[0]

}

export {
  checkIfLogin,
  globalNavigate,
  GlobalHistory,
  formatRupiah,
  formatDateIndo,
  formatTimeIndo,
  formatDateYMD,
  checkTypeTransaction,
  minusOneMonth,
  minusOneWeek,
}