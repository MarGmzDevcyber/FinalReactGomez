import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Item.css';

 const Item = ({ id, name, image, stock, description, price, showDescription = false, onAddToCart }) => {
  return (
    <section id="CardContainer">
      <article className='CardItem'>
        <div className='HeaderItem'>
          <img src={image} alt={name} className='ItemImg' />
        </div>

        <section className="cardDescription">
          <div className='title'>{name}</div>
          {showDescription && <p className="description">{description}</p>}
          <p className='cant'>Disponibles: {stock}</p>
          <p className='price'>${price}</p>
        </section>

        <footer className='Item-footer'>
          <Link to={`/item/${id}`} className='OptionDetails'>
            <button>Ver detalles</button>
          </Link>
        </footer>
      </article>
    </section>
  );
};
export default Item;