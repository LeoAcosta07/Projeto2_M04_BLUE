import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Game from './pages/Game/Game';
import WishList from './pages/WishList/WishList';
import Menu from './components/Navbar/Navbar';
import Store from './pages/Store/Store';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <BrowserRouter>
      <Routes>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={< Profile/>} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


