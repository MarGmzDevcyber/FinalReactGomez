import cart from '../resources/shop.svg'

const CartWidget = ( ) => {
        return(
                <div className="cCart">
                        <img src={cart} alt="cart"></img>
                        <span className="cantCart">
                        7
                        </span>
                </div>
        )
}

export default CartWidget;