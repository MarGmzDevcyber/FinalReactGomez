import {createContext, useState} from 'react';

export const controlShowCart= createContext();

const CartContext = ({child}) => {
        const [ showCart, setShowCart]= useState("none")

        return(
                <controlShowCart.Provider value={{showCart,setShowCart}}>
                    {child}
                </controlShowCart.Provider>
        )
}

export default CartContext;