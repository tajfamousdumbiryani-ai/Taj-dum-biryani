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
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative pb-20">
        <Navbar />
        <main>
          <Hero />
          <Menu />
        </main>
        <Footer />
        <FloatingCartBar />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
