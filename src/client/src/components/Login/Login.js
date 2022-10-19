import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
            </Routes>
        </section>
    )
}

export default Login