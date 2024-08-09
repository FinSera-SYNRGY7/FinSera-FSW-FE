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
    <div style={{ height: "auto", margin: "0 auto", maxWidth: "80%", width: "100%" }}>
      <QRCode
        size={256}
        style={{ height: "300px", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
    </Layout>
  )
}