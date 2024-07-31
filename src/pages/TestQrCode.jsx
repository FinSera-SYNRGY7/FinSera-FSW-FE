import QRCode from "react-qr-code";
import Layout from '@/layout/Layout'

export default function TestQrCode() {
  const data = [{
    time:(new Date()),
    name:'Hafiidh Luqman',
    bank_account:'123020320230230',
    bank_name:'MANDIRI'
  }]
  const value = JSON.stringify(data)
  
  return(
    <Layout>
    <QRCode
      size={200}
      style={{ height: "auto", maxWidth: "50%", width: "50%" }}
      value={value}
      viewBox={`0 0 256 256`}
    />
    </Layout>
  )
}