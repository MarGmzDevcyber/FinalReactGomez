import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  total: 0,
  isInCart: () => false,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregamos un producto al carrito
  const addItem = (Products, quantity) => {
    if (!isInCart(Products.id)) {
      setCart((prev) => [...prev, { ...Products, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  // Removemos un producto del carrito
  const removeItem = (ProductsId) => {
    const cartUpdate = cart.filter((product) => product.id !== ProductsId);
    setCart(cartUpdate);
  };

  // Limpiamos el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para no repetir productos en el carrito
  const isInCart = (ProductId) => {
    return cart.some((prod) => prod.id === ProductId);
  };

  // Variable para calcular el total de la compra
  const total = Number.parseFloat(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  ).toFixed(2);

  // Objeto con todas las funciones y estados que deseas proporcionar en el contexto
  const contextValue = {
    cart,
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
