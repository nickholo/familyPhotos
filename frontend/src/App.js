import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hologroski-Tipney Family Through The Years</h1>
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}
