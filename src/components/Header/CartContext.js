import { createContext, useContext } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  total: 0,
  isInCart: () => false,
});

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un proveedor de CartContext');
  }
  return context;
}
