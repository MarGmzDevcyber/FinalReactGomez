import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css';

export const Item = ({ id, name, image, stock, price }) => {
    return (
        <article className='CardItem'>
            <div className='HeaderItem'>
                <img src={image} alt={name} className='ItemImg' />
            </div>

            <section>
                <div className='Title'>
                    <h5 >
                        {name}
                    </h5>
                </div>

                <p className='info-item'>
                    Disponibles: {stock}
                </p>

                <p className='price-item'>
                    Precio: ${price}
                </p>
            </section>

            <footer className='Item-footer'>
                <Link to={`/item/${id}`} className='OptionDetails'>
                    <button>Ver detalles</button>
                </Link>
            </footer>

        </article>
    )
}