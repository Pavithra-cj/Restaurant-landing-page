import React from 'react'
import logo from '../Assets/Images/logoS.png'
import { useRef } from 'react';
import { cart } from '../Data';

const Navbar = () => {

    const navbarRef = useRef();
    const searchRef = useRef();
    const cartRef = useRef();

    const navbarHandler = () => {
    navbarRef.current.classList.toggle('active');
    searchRef.current.classList.remove('active');
    cartRef.current.classList.remove('active');
    };

    const searchHandler = () => {
    searchRef.current.classList.toggle('active');
    navbarRef.current.classList.remove('active');
    cartRef.current.classList.remove('active');
     };
    const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
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
                id='cart-btn'
                onClick={cartHandler}></div>
                <div className='fa fa-bars' 
                id='menu-btn'
                onClick={navbarHandler}></div>
            </div>
            <div className="search-form" ref={searchRef}>
                <input type="search" id="search-box" placeholder="Search" />
                <label htmlFor="search-box" className="fa fa-search"></label>
            </div>
            <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
        </header>
    </div>
  )
}

export default Navbar