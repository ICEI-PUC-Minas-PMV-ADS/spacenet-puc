import React from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Buttons/Button';
import { USER_POST } from '../../api';

const LoginCreate = () => {
    const [name, setName] = React.useState('')
    const [cpf, setCPF] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [district, setDistrict] = React.useState('')
    const [city, setCity] = React.useState('')
    const [cep, setCEP] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [birthday, setBirthday] = React.useState('');

    const UserPost = async (e) => {
        e.preventDefault()
        // const { url, options } = USER_POST({
        //     name: name,
        //     cpf_Cnpj: cpf,
        //     addres: address,
        //     city: city,
        //     district: district,
        //     cep: cep,
        //     email: email,
        //     password: password,
        //     telephone: phone,
        //     birth_Date: birthday
        // })

        // const request = await fetch(url, options)
        // const response = await request.json();
        // console.log(response)

        console.log('clicou')

    }

    // React.useEffect(() => {
    //     const getAPIData = async () => {
    //         const request = await fetch('https://apispacenet.azurewebsites.net/',
    //             {
    //                 method: 'GET',
    //                 mode: 'no-cors',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },

    //             })
    //         const response = await request.json();
    //         console.log(response)
    //     }

    //     getAPIData()
    // }, [])


    return (
        <div className={styles.login}>
            <div className={styles.backgroundTitle}>
                <h1 className={`animeLeftSlow ${styles.title}`}><span className={styles.span}>Seja bem-vindo </span><br />
                    a Spacenet. </h1>
            </div>

            <div className='animeLeftSuperSlow'>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Login</h1>
                    <form onSubmit={UserPost} >
                        <Input
                            label='Nome'
                            type="text"
                            name="name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <Input
                            label='CPF no formato: xxxxxxxxxxx'
                            type="text"
                            name="cpf"
                            value={cpf}
                            onChange={({ target }) => setCPF(target.value)}
                        />
                        <Input
                            label='Endereço'
                            type="text"
                            name="address"
                            value={address}
                            onChange={({ target }) => setAddress(target.value)}
                        />
                        <Input
                            label='District'
                            type="text"
                            name="district"
                            value={district}
                            onChange={({ target }) => setDistrict(target.value)}
                        />
                        <Input
                            label='Cidade'
                            type="text"
                            name="city"
                            value={city}
                            onChange={({ target }) => setCity(target.value)}
                        />
                        <Input
                            label='CEP no formato: xxxxxxx'
                            type="text"
                            name="cep"
                            value={cep}
                            onChange={({ target }) => setCEP(target.value)}
                        />
                        <Input
                            label='E-mail'
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
                        <Button>Criar usuário</Button>
                    </form>

                    <div className={styles.forgotContainer}>
                        <Link to='/login' className={styles.forgot}>Esqueceu sua senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCreate