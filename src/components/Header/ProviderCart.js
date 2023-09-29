import React, { useState } from 'react';
import { CartContext } from './CartContext';

 const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const addItem = (Products, quantity) => {
    if (!isInCart(Products.id)) {
      setCart((prev) => [...prev, { ...Products, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (ProductsId) => {
    const cartUpdate = Cart.filter((product) => product.id !== ProductsId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (ProductId) => {
    return Cart.some((prod) => prod.id === ProductId);
  };

  const total = Number.parseFloat(
    Cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  ).toFixed(2);

  const contextValue = {
    Cart,
    addItem,
    removeItem,
    clearCart,
    total,
    isInCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider