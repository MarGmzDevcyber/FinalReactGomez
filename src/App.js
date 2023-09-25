import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ContainerCardItems from './components/ContainerItems/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetails from './components/ItemDetails/ItemDetails';
// import { createContext, useState } from 'react';
// import ProviderContextListCart from './components/'


function App( ) {
        return (
                // <ProviderContextListCart>
                        <BrowserRouter>
                                <NavBar />
                                        <Routes>
                                                <Route path='/' element={<ContainerCardItems />} />
                                                <Route path='/item/:idItem' element={ <ItemDetails />} />
                                                <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
                                                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                                        </Routes>
                        </BrowserRouter>
                // </ProviderContextListCart>
        );
}

export default App;
