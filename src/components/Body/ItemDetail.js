import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Header/CartContext';
import ItemCount from './ItemCount'; // Asegúrate de importar ItemCount correctamente
import '../style/ItemDet.css';

const ItemDetail = ({ id, image, name, category, description, price, stock }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [showFinalizarCompra, setShowFinalizarCompra] = useState(false);

  const handleOnAdd = (quantity) => {
    const product = {
      id,
      name,
      price,
      image,
    };

    addItem(product, quantity);
    setQuantityAdded(quantity); // Actualiza la cantidad local
    setShowFinalizarCompra(true); // Muestra el botón "Finalizar compra" después de agregar al carrito
  };

  const handleIncrement = () => {
    if (quantityAdded < stock) {
      setQuantityAdded(quantityAdded + 1);
    }
  };

  const handleDecrement = () => {
    if (quantityAdded > 0) {
      setQuantityAdded(quantityAdded - 1);
    }
  };

  return (
    <article className='DetailContainer'>
      <div className='ImgContainer'>
        <img src={image} alt={name} className='DetailImg' />
      </div>
      <div className='headerDetail'>
        <h2 className='desc-title'>{name}</h2>
        <div className='Body-details'>
          <p className='Detail-cat'>Categoria: {category}</p>
          <p className='Descrip-cont'>{description}</p>
          <p className='Price-cont'>${price}</p>
          <p className='ItemDispo'>Cantidad disponible: {stock}</p>
        </div>
        <footer className='Item-footer'>
          <div className="OptionDetails">
            <div className="Counter">
              <button className="Buttons" onClick={handleDecrement}>
                -
              </button>
              <h4 className="number">{quantityAdded}</h4>
              <button className="Buttons" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className='buttonAdd' onClick={() => handleOnAdd(quantityAdded)}>
              Agregar al carrito
            </button>
          </div>
          {showFinalizarCompra && (
            <Link to='/cart' className='End-bttn'>
              Finalizar compra
            </Link>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
