import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import {CartProvider} from './components/Header/ProviderCart';

const ds = document.getElementById("root");
const root = createRoot(ds);

root.render(
    <CartProvider>
          <App />
    </CartProvider>
);
