import React from 'react'
import styles from './LoginForm.module.css'
import { Link} from 'react-router-dom';
import Form from '../Form/Form'

const LoginForm = () => {
    return (

        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>
            
            <div className='animeLeftSuperSlow'>
                <div className={styles.container}>
                    <Form />
                    <div className={styles.forgotContainer}>
                        <Link to='/cadastro' className={styles.forgot}>Esqueceu sua senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm