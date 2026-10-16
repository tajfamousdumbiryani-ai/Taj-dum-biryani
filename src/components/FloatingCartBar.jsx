import React from 'react';
import { useCart } from '../context/CartContext';

export default function FloatingCartBar() {
  const { totalItems, totalAmount, openCart } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-40 animate-slide-up pointer-events-none">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={openCart}
          className="pointer-events-auto w-full bg-brand-red text-white rounded-xl shadow-lg shadow-brand-red/30 flex items-center justify-between p-4 active:scale-[0.98] transition-transform"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold text-white/90 tracking-wide">
              {totalItems} ITEM{totalItems > 1 ? 'S' : ''} ADDED
            </span>
            <span className="text-lg font-bold">
              ₹{totalAmount}
            </span>
          </div>
          <div className="flex items-center gap-2 font-bold text-lg">
            View Cart <span>→</span>
          </div>
        </button>
      </div>
    </div>
  );
}
