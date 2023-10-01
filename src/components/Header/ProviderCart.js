import React, { createContext, useContext, useState } from 'react';


import CartContext from './CartContext';


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCart((prev) => [...prev, { ...product, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };


  const removeItem = (productId) => {
    const cartUpdate = cart.filter((product) => product.id !== productId);
    setCart(cartUpdate);
  };


  const clearCart = () => {
    setCart([]);
  };


  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };


  const total = Number.parseFloat(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  ).toFixed(2);


  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    total,
    isInCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
