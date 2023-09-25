import   {Link}  from 'react-router-dom'


const ItemListContainer = (props) =>{

        return(
                <ul>
                         <li> 
                                <Link to="category/monitores">
                                        {props.itemUno}                
                                </Link>
                        </li>
                        <li> 
                                <Link to="category/componentes">
                                        {props.itemDos}                
                                </Link>
                        </li>
                        <li> 
                                <Link to="category/aperifericos">
                                        {props.itemTres}                
                                </Link>
                        </li>
                </ul>
        )
}

export default ItemListContainer;