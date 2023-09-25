import {useContext } from "react";
import cart from '../resources/shop.svg'
import {listCartContext} from "../ListCartContext/listCartContext"
import {controlCartShow} from   "../CartContext/CartContext"


const CartWidget = ( ) => {
        const {setShowCart,showCart} = useContext(controlCartShow)
        const {listCart} = useContext(listCartContext)

        const cartShow = () => {
                setShowCart(( showCart === "none") ? "flex": "none")
        }

        return(
                <div className="containerLength" onClick={cartShow}>
                        <img src={cart} alt="cart"></img>
                        <span className="cantCart">
                        {listCart.length}
                        </span>
                </div>
        )
}

export default CartWidget;