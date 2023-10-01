import React from 'react';
import brand from "../img/brand.svg";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="brand">
                    <Link to='/' >
                        <img src={brand} alt='logo' />
                    </Link>
                </div>
                <div className='nav-links'>
                    <NavLink to={`/category/monitores`} className="cat-link">Monitores</NavLink>
                    <NavLink to={`/category/components`} className="cat-link">Componentes</NavLink>
                    <NavLink to={`/category/perifericos`}className="cat-link">Periféricos</NavLink>
                </div>
                <div className="CartWidget-container">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
