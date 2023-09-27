import React from 'react'
import { useContext } from 'react'
import  CartContext  from '../Body/CartContext'
import  ItemCart  from './ItemCart'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'

 const Cart = () => {

    const { cart, clearCart, totalQuantity} = useContext(CartContext)
    

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>
                    No hay elementos seleccionados
                </h1>
                <Link to='/' className='Option' > Productos</Link>
            </div>
        )
    }

    return (
        <div className='Cart-products'>
            {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
            <div className='bttn-container'>
                <div className='vaciar-carrito'>
                <button onClick={() => clearCart()} className='clear'>Vaciar carrito :C</button>
                </div>
                <div className='check-bttn'>
                <Link className='Check-out' to='/checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    )

}
export default Cart