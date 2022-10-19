import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginForgot from './LoginForgot';

const Login = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
                <Route path='esqueceu' element={<LoginForgot />}/>
            </Routes>
        </section>
    )
}

export default Login