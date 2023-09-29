import React, { useContext, useState } from 'react';
import carrito from '../img/cartii.svg';
import '../styles/Cart.css';
import { CartContext } from './CartContext';
import Cart from './Cart';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='CartWidget-container'>
      <span className='Number'>{cart.length}</span>
      <img className='Cart-img' src={carrito} alt="carrito" onClick={toggleCart} />
      {isCartOpen && <Cart />}
    </div>
  );
};

export default CartWidget;
