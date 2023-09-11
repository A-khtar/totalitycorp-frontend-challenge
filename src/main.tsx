
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './components/CartContext'; // Import the CartProvider
import './index.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
     <CartProvider>
        <App />
      </CartProvider>
    
  </React.StrictMode>,
);