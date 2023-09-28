import React from 'react'
import { Item } from '../Body/Item'
import "../styles/ItemList.css"


const ItemList = ({ Products }) => {
  return (
    <div className='groupList'>
      {Products.map( product => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList ;