import { NavBar } from "./components/Header/NavBar";
import  ItemListContainer  from "./components/Header/ItemListContainer";
import  ItemDetailContainer  from "./components/Body/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import './styles.css'
import  Cart  from './components/Header/Cart';
import Checkout from './components/Body/Checkout';
import '../src/components/services/firebase/firebaseConfig'
import  CartProvider  from "./components/Header/ProviderCart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} greeting={'Bienvenidos a Digital Sky '} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
          <Footer />
    </div>
  );
}

export default App;