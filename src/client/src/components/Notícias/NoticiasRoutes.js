import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Noticias from './Noticias';
import Noticia from './Noticia';

const NoticiasRoutes = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<Noticias />} />
                <Route path='/:id' element={<Noticia />} />
            </Routes>
        </section>
    )
}

export default NoticiasRoutes