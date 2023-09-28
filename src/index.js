import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import {CartProvider} from './components/Header/CartContext';

const ds = document.getElementById("root");
const root = createRoot(ds);

root.render(
    <CartProvider>
          <App />
    </CartProvider>
);
