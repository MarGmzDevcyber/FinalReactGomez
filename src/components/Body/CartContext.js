import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
})


 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);


    const addItem = (products, quantity) => {


        if (!isInCart(products.id)) {
            setCart(prev => [ ...prev, { ...products, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }


    const removeItem = (productsId) => {

        const cartUpdate = cart.filter(produc => produc.id !== productsId)
        setCart(cartUpdate)
    }

 
    const clearCart = () => {

        setCart([])
    }
    

    const isInCart = (productId) => {
        
        return cart.some(prod => prod.id === productId)
    }
    
 
    const total = Number.parseFloat(cart.reduce((acc, product)=> acc + product.price * product.quantity, 0)).toFixed(2)

 
    const value = {
        cart, addItem, removeItem, clearCart, total , isInCart
    }

    return (
        <CartContext.Provider value= {value}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider