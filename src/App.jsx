import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Layout from './layout/Layout';
import InfoSaldo from './pages/InfoSaldo';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* <Route path="/"> */}
      {/* <Route index Component={IndexPage} /> ini halaman dashboard */}
      {/* <Route path="info-saldo" Component={<InfoSaldo />} /> */}
      {/* <Route path="cars/rent/:id" Component={RentCarPage} /> */}
      {/* </Route> */}

      <Route path="/info-saldo" element={<InfoSaldo />} />

      {/* <Route path="*" Component={NotFoundPage} /> */}
    </Routes>

    // <>
    //   <div className="App">
    //     <Header />
    //     <main>
    //       <h3>Informasi Saldo</h3>
    //       <button>
    //         Beranda
    //       </button>
    //       <p>This is the content of the main page.</p>
    //       <Button />
    //     </main>
    //     <Back />
    //     <SumberRekening />

    //     <div className="card footer-card" >
    //       <Footer />
    //     </div>
    //   </div>
    // </>
  )
}

export default App
