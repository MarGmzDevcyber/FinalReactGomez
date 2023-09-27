import React from 'react'
import brand from "../img/brand.svg"
import  CartWidget  from '../Header/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

export const NavBar = () => {
    return (

        <nav className="navbar" >

            <div className="brandcontainer">
                <Link to='/' className='brand-page'>
                    <img className='brand-img' src={brand} alt='logo' />
                </Link>
                <span className='brand-txt'>Digital Sky</span>
            </div>

            <div className='Search'>
                <input type="text" placeholder='Buscador' className='InputSearch' />
            </div>

            <div className='Categories'>
                <div className='sub-Category'>
                    <NavLink to={`/category/disparo`} className="Ancla">
                        Disparo
                    </NavLink>
                </div>
                <div className='sub-Category'>
                    <NavLink to={`/category/monitores`} className="itemList">
                        Monitores
                    </NavLink>
                </div>
                <div className='sub-Category'>
                    <NavLink to={`/category/componentes`} className="itemList">
                        Componentes
                    </NavLink>
                </div>
                <div className='subCate'>
                    <NavLink to={`/category/periferico`} className="itemList">
                        Perifericos
                    </NavLink>
                </div>
            </div>

            <div className="Cart-container">
                <CartWidget />
            </div>
        </nav >
    )
}