import React from 'react';
import { ShoppingBag, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side: Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center shrink-0">
            <Utensils className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight tracking-tight">
              <span className="text-black">TAJ </span>
              <span className="text-brand-red">FAMOUS</span>
            </h1>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest leading-none">
              Dum Biryani
            </span>
          </div>
        </div>

        {/* Right Side: Cart Button */}
        <button
          onClick={openCart}
          className="relative w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center active:bg-gray-50 transition-colors"
        >
          <ShoppingBag className="text-gray-700 w-5 h-5" />
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-fade-in">
              {totalItems}
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
