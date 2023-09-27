import React, { useContext } from 'react'
import CartImg from '../img/cartii.svg'
import '../styles/Cart.css'
import  CartContext  from '../Body/CartContext'
import { Link } from 'react-router-dom'

 const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link to='/cart' className='Cart-container' >
      <span className='Cart-number'>{cart.length}</span>
      <img className='Cart-img' src={CartImg} alt="carrito" />
    </Link>
  )
}

export default CartWidget