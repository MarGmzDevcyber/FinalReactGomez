import  closed from '../img/cerrar.svg'
import CartItem from '../CartItem/CartItem';
 import clean from '../img/borrar.svg'
import {useContext } from "react";
import {controlShowCart }   from '../CartContext/CartContext';
import { ContextListaCart } from "../../ContextListCart/ContextListCart";


const CartContainer = ( ) => {

        const {showCart, setShowCart } = useContext(controlShowCart);
        const {listCart, cartReady} = useContext(ContextListaCart);

        const style={
            display:showCart
        }

        const closeCart= ( ) => {
                setShowCart((showCart === "none")? "flex":"none")
        }

        return(

                <div className="cart" style={style}>
                        <div className="cerrar">
                                <button className="exit" onClick={closeCart}>
                                    <img src={closed} alt="Cerrar"></img>
                                </button>
                        </div>
                        <div className="CartItemsContainer">
                            {
                                (listCart.length === 0 ) ? <span className="cartEmpty">Tu carrito está vacío ¡Haz tu primer compra!</span>
                                : listCart.map(product => (
                                    <CartItem
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        image={product.image}
                                        stock={product.stock}
                                        price={product.price}
                                    />
                                ))
                            }
                        </div>

                        <div className="FinalizarCompra">

                            <button className="finalizar">
                                Finalizar compra 
                            </button>

                            <button className="clean" onClick={cartReady}>
                                <img src={clean} alt="clean-btt"></img>
                            </button>
                        </div>
                </div>
        )
}

export default CartContainer;