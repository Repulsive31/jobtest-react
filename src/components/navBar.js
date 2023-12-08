import React from 'react'
import logo from '../imgs/playShop_Logo.svg'
import logoCart from '../imgs/cart.svg'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="nav-logo">
            <img src={logo} alt="Logo"/>
        </div>
        <ul className='nav-menu'>
            <li>Home <hr/></li>
            <li>Products</li>
            <li>About Us</li>
            <li>Help</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <div className="nav-cart-logo">
                <a href="#">
                    <img src={logoCart} alt="Cart"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar