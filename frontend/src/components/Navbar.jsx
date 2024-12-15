import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
  return (
    <>
        <header className="header__desktop">
            <div className="header__left">
               <Link to={"/"}>Shopping</Link>
            </div>
            <div className="header__middle">
                <nav className='nav__desktop'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Shop</Link>
                    <Link to={"/"}>Blog</Link>
                    <Link to={"/"}>About</Link>
                    <Link to={"/"}>Contact</Link>
                </nav>
            </div>
            <div className="header__right">
                <form action="" className='search__form'>
                    <input type="text" placeholder="Search ...." />
                    <button type="submit">S</button>
                </form>
            </div>
        </header>
        <header className="header__mobile">

        </header>
    </>
  )
}

export default Navbar