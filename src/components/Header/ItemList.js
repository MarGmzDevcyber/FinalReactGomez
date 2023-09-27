import React from 'react'
import { Item } from '../Body/Item'
import "../styles/ItemList.css"


const ItemList = ({ products }) => {
  return (
    <div className='groupList'>
      {products.map( productt => <Item key={productt.id} {...productt} />)}
    </div>
  )
}

export default ItemList ;