import React from 'react'
import Form from '../Form/Form'
import styles from "./Login.module.css"

const Login = () => {
    return (
        <section>
            <div className={styles.login}>
                <div className={styles.backgroundTitle}>
                    <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                        a Spacenet. </h1>
                </div>
                <div className='animeLeftSuperSlow'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Login