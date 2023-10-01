import React from 'react'
import  Item  from '../Body/Item'
import '../style/ItemListC.css'


const ItemList = ({ Products }) => {
  return (
      <div className="ListG">
          {Products.map( product => <Item key={product.id} {...product} />)}
      </div>
  )
}

export default ItemList ;