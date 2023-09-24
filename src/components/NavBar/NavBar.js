import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const NavBar= ( ) => {
        return (
                <header>
                        <div className="containerBrand">
                                <Brand/>
                        </div>
                        <nav className="navList">
                                <ItemListContainer 
                                        itemUno="Procesador"
                                        itemDos="Perifericos"
                                        itemTres="Accesorios"
                                />
                        </nav>
                        <div className="containerCart">
                                <CartWidget />
                        </div>
                </header>
        )

}

export default NavBar 