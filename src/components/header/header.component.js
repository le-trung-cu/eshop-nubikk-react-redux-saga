import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Search from '../search/search.component';
import { FaSearch, FaGlobe } from 'react-icons/fa'

import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ toggleMenuHidden, cartHidden }) => {
    const [searchHidden, setSearchHidden] = useState(true)

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <span onClick={() => toggleMenuHidden()}>
                            <FaBars />
                            <span className="nav__text">
                                Menu
                            </span>
                        </span>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Sale</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Men</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Women</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Accessories</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Clothing</NavLink>
                    </li>
                </ul>
                <h1 className="logo">NuBikk</h1>
                <ul className="nav__list">
                    <li className="nav__item search-icon"
                        onClick={() => setSearchHidden(false)}>
                        <span className="search-text">Search</span>
                        <FaSearch />
                    </li>
                    <li className="nav__item">
                        <FaGlobe />
                    </li>
                    <li className="nav__item">
                        <CartIcon />
                    </li>
                </ul>
            </nav>
            <Search hidden={searchHidden} close={() => setSearchHidden(true)} />
        </header>
    )
}

export default Header
