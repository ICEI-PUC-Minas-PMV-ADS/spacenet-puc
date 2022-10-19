import React from 'react'
import styles from './Form.module.css'
import Button from '../Buttons/Button'
import Input from './Input'

const Form = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className={styles.container}>
            <form>
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
            </form>
            <div className={styles.forgotContainer}>
                <a href='/' className={styles.forgot}>Esqueceu sua senha?</a>
            </div>
        </div>
    )
}

export default Form;