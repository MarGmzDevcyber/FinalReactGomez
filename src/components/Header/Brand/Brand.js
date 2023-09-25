import  brand  from '../resources/brand.svg'
import {Link} from 'react-router-dom'

const Brand = ( ) => {
        return(
                <Link to="/">
                        <img src={brand} alt="Tienda online" ></img>
                </Link>)
}

export default Brand;