import React from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Buttons/Button';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helpers/Error';

const LoginCreate = () => {
    const [name, setName] = React.useState('');
    const [document, setDocument] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [birthday, setBirthday] = React.useState('');

    const { loading, error, request, } = useFetch();

    const UserPost = async (e) => {
        e.preventDefault()

        const { url, options } = USER_POST({
            name: name,
            email:email,
            password: password,
            document: document,
            phone: phone,
            birthdayDate: birthday,
        });

        const {json, response} = await request(url, options);
        console.log(json);
        console.log(response)

        setBirthday('');
        setName('');
        setDocument('')
        setPhone('');
    };

    return (
        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>

            <div className='animeLeftSuperSlow'>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Cadastrar usuário</h1>
                    <form onSubmit={UserPost} >
                        <Input
                            label='Nome'
                            type="text"
                            name="name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <Input
                            label='Documento'
                            type="text"
                            name="district"
                            value={document}
                            onChange={({ target }) => setDocument(target.value)}
                        />
                        <Input
                            label='Email'
                            type="text"
                            name="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Input
                            label='Passoword'
                            type="password"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Input
                            label='Telefone'
                            type="text"
                            name="telefone"
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                        <Input
                            label='Data de nascimento'
                            type="date"
                            name="nascimento"
                            value={birthday}
                            onChange={({ target }) => setBirthday(target.value)}
                        />
                        {loading ? <Button disabled >Cadastrando...</Button> : <Button>Cadastrar</Button>}
                        {error && <Error error={error} />}
                    </form>

                    <div className={styles.forgotContainer}>
                        <Link to='/login' className={styles.forgot}>Esqueceu sua senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCreate;