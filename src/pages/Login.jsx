import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useLogin } from "@/features/auth/useLogin"
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import logoWhite from '@/assets/logo/logoWhite.svg'
import logoBlue from '@/assets/logo/logoBlue.svg'
import login from '@/assets/img/login.svg'
import { FormInput } from '@/components/FormInput.jsx'
import Button from 'react-bootstrap/Button'
import Alert from "react-bootstrap/Alert"
import styles from "@/assets/css/Login.module.css"

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isError, setIsError] = useState(false) 
    const [errorMessage, setErrorMessage] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }
    
    const { mutate, isPending } = useLogin({
        onSuccess: (data) => {
            localStorage.setItem("auth_token", data.data.accessToken)
            localStorage.setItem("auth_refresh_token", data.data.refreshToken)
            const getPinAppLock = localStorage.getItem('pin_applock')
            if(getPinAppLock == null) {
              navigate('/setup-pin')
            } else {
              navigate("/home")
            }
        },
        onError: (error) => {
            setIsError(true)
            setErrorMessage(error.response.data.message)
            if (error.response.data.field === 'username') {
                setUsernameError(true)
                setErrorMessage("Username yang Anda masukkan salah!")
            } else if (error.response.data.field === 'password') {
                setPasswordError(true)
                setErrorMessage("Password yang Anda masukkan salah!")
            } else {
                setUsernameError(true)
                setPasswordError(true)
                setErrorMessage("Username dan password yang Anda masukkan salah!")
            }
        },
    })

    const onSubmit = (data) => {
        setUsernameError(false)
        setPasswordError(false)
        setIsError(false)
        const dataLogin = {
          ...data
        }
    
        mutate(dataLogin)
    }

    return (
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
                            alt="login image"
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
                        <h1 className={styles.loginTitle} aria-label="Login">
                            Login
                        </h1>
                        <Form aria-label="Login form" onSubmit={handleSubmit(onSubmit)}>
                            {/* {isError ? (
                                <div className="mb-4">
                                    <Alert
                                        variant="danger"
                                        onClose={() => setIsError(false)}
                                        dismissible
                                        aria-label="Validation"
                                    >
                                    <p>
                                        <span aria-label={errorMessage} role="validation"></span>
                                        {errorMessage}
                                    </p>
                                    </Alert>
                                </div>
                            ) : (
                            ""
                            )} */}
                            <FormInput className={`${styles.formInputFirst} mb-5`} aria-label="Username">
                                <Form.Label htmlFor="username" className={styles.formLabel}>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    placeholder="masukkan username"
                                    className={`${styles.formControl} ${usernameError ? styles.errorInput : ''}`}
                                    {...register("username")}
                                />
                            </FormInput>

                            <FormInput className="mb-3 position-relative" aria-label="Password">
                                <Form.Label htmlFor="password" className={styles.formLabel}>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    placeholder="masukkan password"
                                    className={`${styles.formControl} ${passwordError ? styles.errorInput : ''}`}
                                    {...register("password")}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className={styles.passwordToggle}
                                    role="button"
                                    aria-label={passwordVisible ? 'Sembunyikan password' : 'Tampilkan password'}
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </FormInput>

                            <div className={styles.forgotPassword}>
                                <a href="#" className={styles.forgotPasswordLink} aria-label="Lupa Password?">Lupa Password?</a>
                            </div>
                            {
                                isPending ?
                                <Button
                                    aria-label="Tombol Login"
                                    className={styles.loginButton}
                                    type="submit"
                                    >
                                    <div className="spinner-border text-white" role="status"></div>
                                </Button>
                                :
                                <Button
                                aria-label="Tombol Login"
                                className={styles.loginButton}
                                type="submit"
                                >
                                    Login
                                </Button>
                            }
                            {isError && (
                                <div className={styles.errorMessage}>
                                    {errorMessage}
                                </div>
                            )}
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login