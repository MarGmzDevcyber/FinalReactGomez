import React from 'react';
import ReactDOM from 'react-dom';
import  CartProvider  from './components/Header/ProviderCart'; // Importa tu proveedor de contexto
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
