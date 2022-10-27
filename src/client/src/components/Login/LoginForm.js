import React from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Input from '../Form/Input';
import Error from '../Helpers/Error';
import Button from '../Buttons/Button';
import { TOKEN_POST } from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { request, error, loading } = useFetch()

    const Login = async (e) => {
        e.preventDefault()
        const { url, options } = TOKEN_POST({
            
        })

        const { json, response } = await request(url, options);
        console.log(json);
        console.log(response)

        setEmail('');
        setPassword('');
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
                            value={email}
                            onChange={({ target }) => setEmail(target.value)} />
                        <Input
                            label='Senha'
                            type="password"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
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