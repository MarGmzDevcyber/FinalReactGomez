import React, { useContext } from 'react'
import { CartContext } from '../Body/CartContext'
import '../styles/ItemCart.css'


 const ItemCart = ({ id, name, image, price, quantity }) => {

  const { removeItem, total } = useContext(CartContext)

  return (

    <article className='Cart-Item'>
      <header className='Cart-header'>
        <div className='Container-img'>
          <img src={image} alt={name} className='ItemImgFinal' />
        </div>
      </header>

      <section className='det-container'>
        <h5 className='headerItem'>
          {name}
        </h5>
      </section>
      <section>
        <p className='Info-Cart'>
          Precio: ${price}
        </p>
        <p className='Info-Cart'>
          Cantidad: {quantity}
        </p>
        <p className='Info-Cart'>
          Subtotal: ${price * quantity}
        </p>
        <h5>Total a pagar: ${total}</h5>
      </section>
      <section>
        <button className='btn btn-danger ' onClick={() => removeItem(id)}>Eliminar</button>
      </section>
    </article>

  )
}
export default ItemCart