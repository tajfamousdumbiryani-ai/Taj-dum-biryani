import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import FloatingCartBar from './components/FloatingCartBar';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <>
        <Navbar />

          <Hero />
          <Menu />

        <Footer />
        <FloatingCartBar />
        <CartDrawer />
      </>
    </CartProvider>
  );
}

export default App;
