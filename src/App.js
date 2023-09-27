import { NavBar } from "./components/Header/NavBar";
import  ItemListContainer  from "./components/Header/ItemListContainer";
import  ItemDetailsContainer  from "./components/Body/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import  Cart  from './components/Header/Cart'
import  CartProvider  from './components/Body/CartContext'
import Checkout from './components/Body/Checkout'
import './components/services/firebase/firebaseConfig'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} greeting={'Bienvenidos a Digital Sky '} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;