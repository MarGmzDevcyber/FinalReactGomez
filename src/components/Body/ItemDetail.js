import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import "../styles/ItemDetail.css"
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

 const ItemDetail = ({ id, image, name, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const products = {

            id, name, price, image
        }

        addItem(products, quantity)
    }

    return (
        <article className='DetailContainer'>
            <div className='ImgContainer'>
                <img src={image} alt={name} className='DetailImg' />
            </div>
            <div className='headerDescrip'>
                <h2 className='desc-title'>
                    {name}
                </h2>
                <div className='Body-details'>
                    <p className='Info-cont'>
                        Categoria: {category}
                    </p>
                    <p className='Descrip-cont'>
                        Descripcion: {description}
                    </p>
                    <p className='Price-cont'>
                        Precio: ${price}
                    </p>
                    <p className='ItemDispo'>
                        Cantidad disponible: {stock}
                    </p>
                </div>
                <footer className='Item-footer'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Finalizar-bttn' >Finalizar compra</Link>
                        ) : (

                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    )
}
export default ItemDetail;
