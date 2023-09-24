import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ContainerCardItems from './components/ContainerItems/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App( ) {
        return (
                <BrowserRouter>
                <NavBar />
                <Routes>
                        <Route path='/' element={<ContainerCardItems />} />
                        <Route path='/item/:id' element={ <ContainerCardItems />} />
                        <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
                        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                </BrowserRouter>
        );
}

export default App;
