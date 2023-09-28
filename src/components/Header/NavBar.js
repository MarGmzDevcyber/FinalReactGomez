import React from 'react'
import brand from "../img/brand.svg"
import  {CartWidget}  from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

export const NavBar = () => {
    return (

        <nav className="navbar" >

            <div className="brandcontainer">
                <Link to='/' className='brand-page'>
                    <img className='brand-img' src={brand} alt='logo' />
                </Link>
            </div>
            <div className='Categories'>
                <div className='sub-Category'>
                    <NavLink to={`/category/monitores`} className="itemList">
                        Monitores
                    </NavLink>
                    <NavLink to={`/category/components`} className="itemList">
                        Componentes
                    </NavLink>
                
                    <NavLink to={`/category/perifericos`} className="itemList">
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