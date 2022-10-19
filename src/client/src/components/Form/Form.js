import React from 'react'
import styles from './Form.module.css'
import Button from '../Buttons/Button'
import Input from './Input'

const Form = () => {
    return (
        <div className={styles.container}>
            <form>
                <h1 className={styles.h1}>Login</h1>
                <Input />
                <Button buttonText="Entrar" />
            </form>
            <div className={styles.forgotContainer}>
                <a href='/' className={styles.forgot}>Esqueceu sua senha?</a>
            </div>
        </div>
    )
}

export default Form;