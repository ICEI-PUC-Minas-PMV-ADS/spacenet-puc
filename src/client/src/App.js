import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='login/*' element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
