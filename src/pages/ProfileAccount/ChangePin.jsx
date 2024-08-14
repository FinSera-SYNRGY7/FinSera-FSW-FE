import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg'
import { PopUpChangePinSuccess } from "@/components/PopUpChangePinSuccess";
import { FormInput } from '@/components/FormInput.jsx'
import Button from 'react-bootstrap/Button'
import styles from "@/assets/css/Login.module.css"

const ChangePin = () => {
    const schema = Joi.object({
        pin_lama: Joi.string().regex(/^[0-9]{6}$/).message('PIN Lama max 6 angka!').required().messages({
            'string.empty': 'Pin Lama wajib diisi!',
          }),
        pin_baru: Joi.string().regex(/^[0-9]{6}$/).message('PIN Baru max 6 angka!').required().messages({
            'string.empty': 'Pin Baru wajib diisi!',
          }),
        konfirmasi_pin_baru: Joi.string().regex(/^[0-9]{6}$/).message('PIN Konfirmasi max 6 angka!').required().messages({
            'string.empty': 'Konfirmasi Pin Baru wajib diisi!',
          }),
    });

    const { register, handleSubmit, formState: { errors: validationErrors }, } = useForm({
        resolver: joiResolver(schema)
    })

    const [pinLamaVisible, setPinLamaVisible] = useState(false)
    const [pinBaruVisible, setPinBaruVisible] = useState(false)
    const [konfirmasiPinVisible, setKonfirmasiPinVisible] = useState(false)
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [isError, setIsError] = useState(false) 
    const [isLoading, setIsLoading] = useState(false) 
    const [errorMessage, setErrorMessage] = useState("")
    const [pinLamaError, setPinLamaError] = useState(false)
    const [pinBaruError, setPinBaruError] = useState(false)
    const [konfirmasiPinError, setKonfirmasiPinError] = useState(false)
    const navigate = useNavigate()

    const togglePinLamaVisibility = () => {
        setPinLamaVisible(!pinLamaVisible)
    }

    const togglePinBaruVisibility = () => {
        setPinBaruVisible(!pinBaruVisible)
    }

    const toggleKonfirmasiPinVisibility = () => {
        setKonfirmasiPinVisible(!konfirmasiPinVisible)
    }

    const handleNavigateHome = () => {
        navigate('/home')
    };

    const onSubmit = (data) => {
        setErrorMessage("")
        setPinLamaError(false)
        setPinBaruError(false)
        setKonfirmasiPinError(false)
        setIsLoading(true)

        const pinAppLockNow = localStorage.getItem("pin_app_lock")
        if(pinAppLockNow === data.pin_lama) {
            if(data.pin_baru === data.konfirmasi_pin_baru) {
                localStorage.removeItem("pin_app_lock")
                localStorage.setItem("pin_app_lock", data.pin_baru)
                setShowLogoutPopup(true)
                setIsLoading(false)
            } else {
                setIsError(true)
                setKonfirmasiPinError(true)
                setErrorMessage("PIN Konfirmasi Anda Berbeda!")
                setIsLoading(false)
            }
        } else {
            setIsError(true)
            setPinLamaError(true)
            setErrorMessage("PIN Lama Anda Salah!")
            setIsLoading(false)
        }
    }
    
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={6} className={styles.leftColumn}>
                        <div className={styles.logoContainer}>
                            <img
                                src={logoWhite}
                                alt="logo"
                                className={styles.logoWhite}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <img
                                src={login}
                                alt="ubah pin image"
                                className={styles.loginImage}
                            />
                        </div>
                    </Col>
                    <Col md={6} className={styles.rightColumn}>
                        <img
                            src={logoBlue}
                            alt="logo"
                            className={styles.logoBlue}
                        />
                        <div className={styles.formContainer}>
                            <h1 className={styles.loginTitle} aria-label="Ubah Pin">
                                Ubah Pin
                            </h1>
                            <Form aria-label="Ubah Pin form" onSubmit={handleSubmit(onSubmit)}>
                                <FormInput className="mb-5 position-relative" aria-label="Pin Lama">
                                    <Form.Label htmlFor="pin_lama" className={styles.formLabel}>
                                        Pin Lama
                                    </Form.Label>
                                    <Form.Control
                                        type={pinLamaVisible ? 'text' : 'password'}
                                        id="pin_lama"
                                        placeholder="masukkan pin lama"
                                        className={`${styles.formControl} ${pinLamaError || validationErrors.pin_lama?.message ? styles.errorInput : ''}`}
                                        {...register("pin_lama")}
                                    />
                                    <span
                                        onClick={togglePinLamaVisibility}
                                        className={styles.passwordToggle}
                                        role="button"
                                        aria-label={pinLamaVisible ? 'Sembunyikan pin lama' : 'Tampilkan pin lama'}
                                    >
                                        {pinLamaVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </FormInput>

                                <FormInput className="mb-5 position-relative" aria-label="Pin Baru">
                                    <Form.Label htmlFor="pin_baru" className={styles.formLabel}>
                                        Pin Baru
                                    </Form.Label>
                                    <Form.Control
                                        type={pinBaruVisible ? 'text' : 'password'}
                                        id="pin_baru"
                                        placeholder="masukkan pin baru"
                                        className={`${styles.formControl} ${pinBaruError || validationErrors.pin_baru?.message ? styles.errorInput : ''}`}
                                        {...register("pin_baru")}
                                    />
                                    <span
                                        onClick={togglePinBaruVisibility}
                                        className={styles.passwordToggle}
                                        role="button"
                                        aria-label={pinBaruVisible ? 'Sembunyikan pin baru' : 'Tampilkan pin baru'}
                                    >
                                        {pinBaruVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </FormInput>

                                <FormInput className="mb-5 position-relative" aria-label="Konfirmasi Pin Baru">
                                    <Form.Label htmlFor="konfirmasi_pin_baru" className={styles.formLabel}>
                                    Konfirmasi Pin Baru
                                    </Form.Label>
                                    <Form.Control
                                        type={konfirmasiPinVisible ? 'text' : 'password'}
                                        id="konfirmasi_pin_baru"
                                        placeholder="masukkan konfirmasi pin baru"
                                        className={`${styles.formControl} ${konfirmasiPinError || validationErrors.konfirmasi_pin_baru?.message ? styles.errorInput : ''}`}
                                        {...register("konfirmasi_pin_baru")}
                                    />
                                    <span
                                        onClick={toggleKonfirmasiPinVisibility}
                                        className={styles.passwordToggle}
                                        role="button"
                                        aria-label={konfirmasiPinVisible ? 'Sembunyikan konfirmasi pin baru' : 'Tampilkan konfirmasi pin baru'}
                                    >
                                        {konfirmasiPinVisible ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </FormInput>

                                {
                                    isLoading ?
                                    <Button
                                        aria-label="Tombol Konfirmasi"
                                        className={`${styles.loginButton} mt-5`}
                                        type="submit"
                                        >
                                        <div className="spinner-border text-white" role="status"></div>
                                    </Button>
                                    :
                                    <Button
                                    aria-label="Tombol Konfirmasi"
                                    className={`${styles.loginButton} mt-5`}
                                    type="submit"
                                    >
                                        Konfirmasi
                                    </Button>
                                }
                                {isError && (
                                    <div className={styles.errorMessage}>
                                        {errorMessage}
                                    </div>
                                )}
                                {validationErrors?.pin_lama && (
                                    <div className={`${styles.errorMessage} mt-4`}>
                                       {validationErrors.pin_lama?.message}
                                    </div>
                                )}
                                {validationErrors?.pin_baru && (
                                    <div className={`${styles.errorMessage} mt-4`}>
                                       {validationErrors.pin_baru?.message}
                                    </div>
                                )}
                                {validationErrors?.konfirmasi_pin_baru && (
                                    <div className={`${styles.errorMessage} mt-4`}>
                                       {validationErrors.konfirmasi_pin_baru?.message}
                                    </div>
                                )}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            {showLogoutPopup && (
                <PopUpChangePinSuccess handleNavigateHome={ handleNavigateHome } />
            )}
        </>
    )
}

export default ChangePin