import React, { useContext, useState, useEffect } from 'react';
import carrito from '../img/cartii.svg';
import { CartContext } from './CartContext';
import {Cart} from '../Header/Cart';
import '../style/CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cart ? cart.length : 0);
  }, [cart]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='CartWidget-container'>
      <span className='Number'>{cartLength}</span>
      <img className='Cart-img' src={carrito} alt="carrito" onClick={toggleCart} />
      {isCartOpen && <Cart />}
    </div>
  );
};

export default CartWidget;
