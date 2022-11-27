import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ProtectedRoute from './components/Helpers/ProtectedRoutes'
import Headers from './components/Headers';
import { UserStorage } from './UserContext'
import Setores from './components/Setores/Setores';
import SuportsIssues from './components/Supports/SuportsIssues';
import GoToTop from './components/Helpers/GoToTop';

import NoticiasRoutes from './components/Notícias/NoticiasRoutes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Headers />
          <Routes>
            <Route path='login/*' element={<Login />}></Route>

            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }></Route>

            <Route
              path='/setores'
              element={
                <ProtectedRoute>
                  <Setores />
                </ProtectedRoute>}></Route>

            <Route
              path='/noticias'
              element={
                <ProtectedRoute>
                  <NoticiasRoutes />
                </ProtectedRoute>}></Route>


            <Route path='/ajuda' element={<ProtectedRoute>
              <SuportsIssues />
            </ProtectedRoute>}></Route>

          </Routes>
          <GoToTop />
          <Footer />
        </UserStorage>
      </BrowserRouter>


    </div>
  );
}

export default App;
