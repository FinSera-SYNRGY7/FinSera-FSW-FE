import { useState } from 'react'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Button from './components/Button';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h2>Welcome to FinSera</h2>
          <p>This is the content of the main page.</p>
          <Button />
        </main>
        <div className="card footer-card" >
          <Footer />

        </div>
      </div>
    </>
  )
}

export default App
