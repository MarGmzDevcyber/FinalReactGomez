import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ isCartOpen }) => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className={`CartContainer ${isCartOpen ? 'open' : ''}`}>
      <div className="CartContents">
        {cart.map((product) => (
          <ItemCart key={product.id} {...product} />
        ))}
        <div className="CartButtons">
          <button onClick={() => clearCart()}>Limpiar carrito</button>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;