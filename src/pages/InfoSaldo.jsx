import React from 'react'
import Layout from '../layout/Layout'
import { Button } from 'react-bootstrap'
import Back from '../layout/Back'
import SumberRekening from '../components/SumberRekening'

export default function InfoSaldo() {
    return (
        <Layout>
            <>
                <h3>Informasi Saldo</h3>
                <button>
                    Beranda
                </button>
                <p>This is the content of the main page.</p>
                <Button />
                <Back />
                <SumberRekening />
            </>
        </Layout>
    )
}
