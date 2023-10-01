import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Header/CartContext'
import  CartItem  from '../Header/ItemCart'
import { Link } from 'react-router-dom'
import '../style/Cart.css'

export const Cart = () => {

    const { cart, clearCart, totalQuantity} = useContext(CartContext)
    

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>
                    No hay productos seleccionados
                </h1>
                <Link to='/' className='Option' > Todos los productos</Link>
            </div>
        )
    }

    return (
        <div className='CartVew'>
            {cart.map(produc => <CartItem key={produc.id} {...produc} />)}
            <div className='contenedorBotones'>
                <div className='LimpiarCarrito'>
                <button onClick={() => clearCart()} className='CartFooter'>Limpiar carrito</button>
                </div>
                <div className='BotonChek'>
                <Link className='Check' to='/checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    )

}

