// import "../styles/itemCart.css"
import deleteIcon from "../img/delete.svg";
 import {useContext} from "react";
import {ContextListaCart} from "../../ContextListCart/ContextListCart"


const CartItem = ({id,name,image,price,stock}) =>{

    const { removeFromCart } = useContext(ContextListaCart)
    
    return (
        <div className="itemCart">

            <div className="img">
                <img src={image} alt="CartImg"></img>
            </div>

            <div className="descripStock">
                <span className="title">{name}</span>
                <span className="inStock">{`cantidad: ${stock}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * stock}</span>
            </div>

            <button className="remove" onClick={ () => removeFromCart(id) }>
                <img src={deleteIcon} alt="removeIcon"></img>
            </button>
        </div>
    )
}

export default CartItem