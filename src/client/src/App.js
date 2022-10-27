import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import { UserStorage } from './UserContext'
import Setores from './components/Setores/Setores';
import SuportsIssues from './components/Supports/SuportsIssues';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='login/*' element={<Login />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/setores' element={<Setores />}></Route>
            <Route path='/ajuda' element={<SuportsIssues />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>


    </div>
  );
}

export default App;
