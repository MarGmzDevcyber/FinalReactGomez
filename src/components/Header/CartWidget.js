import React, { useContext } from 'react'
import carrito from '../img/cartii.svg'
import '../styles/Cart.css'
import  {CartContext}  from './CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link to='/cart' className='Cart-container' >
      <span className='Number'>{cart.length}</span>
      <img className='Cart-img' src={carrito} alt="carrito" />
    </Link>
  )
}
