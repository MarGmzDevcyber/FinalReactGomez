import React, { useState } from 'react'
import '../styles/ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)


    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }


    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Buttons' onClick={decrement}>-</button>
                <h4 className='bttn-number'>{quantity}</h4>
                <button className='Buttons' onClick={increment}>+</button>
            </div>
            <div className='AddToCart'>
                <button className='buttonAdd' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
