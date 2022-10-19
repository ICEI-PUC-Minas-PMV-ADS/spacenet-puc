import React from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Buttons/Button';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>

            <div className='animeLeftSuperSlow'>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Login</h1>
                    <Input
                        label='Usuário / E-mail'
                        type="text"
                        name="username"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                    <Input
                        label='Senha'
                        type="password"
                        name="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                    <Button>Entrar</Button>
                    <div className={styles.forgotContainer}>
                        <Link to='/login/esqueceu' className={styles.forgot}>Esqueceu sua senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm