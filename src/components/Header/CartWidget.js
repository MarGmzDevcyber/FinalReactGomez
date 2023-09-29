import React, { useContext, useState } from 'react';
import carrito from '../img/cartii.svg';
import '../styles/Cart.css';
import { CartContext } from './CartContext';
import Cart from './Cart'; // Importa el componente Cart correctamente

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
      {isCartOpen && <Cart />} {/* Renderiza el componente Cart si isCartOpen es true */}
    </div>
  );
};

export default CartWidget;
