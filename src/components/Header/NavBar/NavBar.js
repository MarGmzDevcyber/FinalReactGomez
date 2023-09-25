import Brand from '../Brand/Brand'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartWidget from '../CartWidget/CartWidget'
// import CartContainer from './CartContainer';
// import CartContext from './CartContext';

const NavBar= ( ) => {


        return (
                // <CartContext>
                <header>
                        <div className="containerBrand">
                                <Brand/>
                        </div>

                        <nav className="navList">
                                <ItemListContainer 
                                        itemUno="Monitores"
                                        itemDos="Componentes"
                                        itemTres="Perifericos"
                                />
                        </nav>

                        <div className="cartContainer">
                                <CartWidget />
                        </div>

                        {/* <CartContainer /> */}
                </header>
                // </CartContext>
        )
}

export default NavBar;