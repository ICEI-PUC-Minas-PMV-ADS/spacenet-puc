import React from 'react'
import Form from '../Form/Form'
import Button from '../Buttons/Button';
import styles from "./Login.module.css"

const Login = () => {
    return (
        <section className='animeLeftSlow'>
            <div className={styles.login}>
                <div className={styles.backgroundTitle}>
                    <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                        a Spacenet. </h1>
                </div>
                <div>
                    <Form />
                    <div className={styles.register}>
                        <h1 className={styles.registerTitle}>Cadastre-se</h1>
                        <p className={styles.paragraph}>Ainda não possui conta? Cadastre-se no site.</p>
                        <Button buttonText="Faça seu cadastro" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login