import React from 'react'
import logo from '../Assets/Images/logoS.png'
import { useRef } from 'react';

const Navbar = () => {

    const searchRef = useRef();

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
    };

  return (
    <div>
        <header className='header'>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <nav className='navbar'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <a href='#products'>Products</a>
                <a href='#review'>Review</a>
                <a href='#contact'>Contact</a>
            </nav>
            <div className='icons'>
                <div className='fa fa-search'
                id='search-btn'
                onClick={searchHandler}></div>
                <div className='fa fa-shopping-cart'
                id='cart-btn'></div>
                <div className='fa fa-bars' id='menu-btn'></div>
            </div>
            <div className="search-form" ref={searchRef}>
                <input type="search" id="search-box" placeholder="Search" />
                <label htmlFor="search-box" className="fa fa-search"></label>
            </div>
        </header>
    </div>
  )
}

export default Navbar