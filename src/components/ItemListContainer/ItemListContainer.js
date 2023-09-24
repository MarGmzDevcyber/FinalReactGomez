import  {Link}  from 'react-router-dom'
const ItemListContainer = (props) =>{

        return(
                <ul>
                         <li> 
                                <Link to="category/procesador">
                                        {props.itemUno}                
                                </Link>
                        </li>
                        <li> 
                                <Link to="category/perifericos">
                                        {props.itemDos}                
                                </Link>
                        </li>
                        <li> 
                                <Link to="category/accesorios">
                                        {props.itemTres}                
                                </Link>
                        </li>
                </ul>
        )
}

export default ItemListContainer;