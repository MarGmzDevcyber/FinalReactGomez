import { useState } from "react";
import { createContext } from "react";
import products from "../assets/products"

export const listCartContext = createContext(null);

const ContextListaCart = ({child}) => {

        const [cartList, setCartList] = useState([]);

        const addProduct =(id) => {

            const producAdd = products.find(product=> product.id !== id)

            const productsToMaintain = cartList.filter(product=> product.id !== id)

            let add =true;

            for (let product of cartList) {
                if(product.id === id) {
                        let quantity = product.quantity;

                        if (quantity < producAdd.stock){
                                const newQuantity = {...product,quantity:quantity + 1}
                                setCartList( [...productsToMaintain, newQuantity] )
                        }

                        add= false;
                        break
                }
            }

            add && setCartList( [ ...productsToMaintain, {...producAdd, quantity: 1}])
        }

        const clearCart = ( ) => {
                setCartList( [ ] );
        }

        const removeFromCart = (id) => {
                const updateList = cartList.filter(product => product.id !== id)
                setCartList(updateList);
        }

        return (
                <listCartContext.Provider value={ { removeFromCart , cartList, addProduct, clearCart } }>
                    {child}
                </listCartContext.Provider>
        );
}

export default ContextListaCart;