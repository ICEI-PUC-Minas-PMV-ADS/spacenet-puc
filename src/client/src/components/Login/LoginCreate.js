import React from 'react'
import styles from './LoginForm.module.css'

import Input from '../Form/Input';
import Button from '../Buttons/Button';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import { UserContext } from '../../UserContext';

import useForm from '../../Hooks/useForm'

const LoginCreate = () => {
    const name = useForm()
    const document = useForm('cpf')
    const phone = useForm('phone')
    const email = useForm('email')
    const password = useForm()
    const birthday = useForm()

    const { loading, userPost, error } = React.useContext(UserContext)

    const UserPost = async (e) => {
        e.preventDefault()

        if (
            name.validate()
            && document.validate()
            && phone.validate()
            && email.validate()
            && password.validate()
            && birthday.validate()
        ) {
            userPost(
                name.value,
                email.value,
                password.value,
                document.value,
                phone.value,
                birthday.value
            );
        }

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
                            placeholder="Insira seu nome"
                            {...name}
                        />
                        <Input
                            label='CPF / RG'
                            type="text"
                            name="cpf / rg"
                            placeholder="000.000.000-00"
                            {...document}
                        />
                        <Input
                            label='Email'
                            type="text"
                            name="email"
                            placeholder="usuário@email.com"
                            {...email}
                        />
                        <Input
                            label='Senha'
                            type="password"
                            name="password"
                            placeholder="******"
                            {...password}
                        />
                        <Input
                            label='Telefone'
                            type="text"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            {...phone}
                        />
                        <Input
                            label='Data de nascimento'
                            type="date"
                            name="nascimento"
                            placeholder="00/00/0000"
                            {...birthday}
                        />
                        {loading ? <Button disabled ><Loading style={{ height: '16px', width: '16px' }} /></Button> : <Button>Cadastrar</Button>}
                        {error && <Error error={error} />}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginCreate;