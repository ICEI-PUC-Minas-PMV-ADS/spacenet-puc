import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginForgot from './LoginForgot';
import LoginCreate from './LoginCreate';

const Login = () => {

    return (
        <section>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='esqueceu' element={<LoginForgot />} />
                <Route path='criar' element={<LoginCreate />} />
            </Routes>
        </section>
    )
}

export default Login