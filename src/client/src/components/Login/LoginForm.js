import React from 'react'
import styles from './LoginForm.module.css'
import Form from '../Form/Form'

const LoginForm = () => {
    return (
        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>
            <div className='animeLeftSuperSlow'>
                <Form />
            </div>
        </div>
    )
}

export default LoginForm