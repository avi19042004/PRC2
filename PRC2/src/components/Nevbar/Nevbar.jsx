import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'
import account from '../assets/account.png'
import search from '../assets/search.png'
import heart from '../assets/heart.png'
import cart from '../assets/cart.png'


const Nevbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="" />
            <p>MyFurniture</p>
        </div>
        <div className="navbar-link">
            <Link to='/' className='link'><div className="home-link">Home</div></Link>
            <Link to="/shop" className='link'><div className="shop-link">Shop</div></Link>
            <div className="about-link">About</div>
            <div className="contect-link">Contect</div>
        </div>
        <div className="navbar-cart">
            <img src={account} alt="" />
            <img src={search} alt="" />
            <img src={heart} alt="" />
            <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default Nevbar