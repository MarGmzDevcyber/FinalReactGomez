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
    throw new Error('error');
  }
  return context;
}
