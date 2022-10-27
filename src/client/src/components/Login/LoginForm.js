import React from 'react'
import styles from './LoginForm.module.css'

import { Link } from 'react-router-dom';

import Input from '../Form/Input';
import Error from '../Helpers/Error';
import Button from '../Buttons/Button';

import useForm from '../../Hooks/useForm';

import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const email = useForm();
    const password = useForm();
    const { userLogin, loading, error } = React.useContext(UserContext);


    const Login = async (e) => {
        e.preventDefault()

        if (email.validate() && password.validate()) {
            userLogin(email.value, password.value);
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>

            <div className='animeLeftSuperSlow'>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Login</h1>
                    <form onSubmit={Login}>
                        <Input
                            label='Usuário / E-mail'
                            type="text"
                            name="username"
                            {...email}
                        />
                        <Input
                            label='Senha'
                            type="password"
                            name="password"
                            {...password}
                        />
                        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
                        {error && <Error error={error} />}
                    </form>
                    <div className={styles.forgotContainer}>
                        <Link to='/login/esqueceu' className={styles.forgot}>Esqueceu sua senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm