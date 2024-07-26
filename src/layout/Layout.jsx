import React, { Children } from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import Back from './Back'
import SumberRekening from '@/components/sumberrekening/SumberRekening'
import Footer from './Footer'

export default function Layout({ children, type, className}) {
  const mainClass = className === 'haveStyle' ? `mx-5 ${type === 'necktie' ? '' : 'my-5'}` : '';
  
  return (
    <div className="App">
      <Header type={type} />
      <main className={mainClass}>
        {children}
      </main>
      <div className="card footer-card">
        <Footer />
      </div>
    </div>
  );
}
