import React, { useState, useEffect } from 'react';
import { X, Minus, Plus } from 'lucide-react';

export default function VariantModal({ item, isOpen, onClose, onAdd }) {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen && item?.variants) {
      setSelectedVariant(item.variants[0]); // Default to Half
      setQuantity(1);
    }
  }, [isOpen, item]);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    onAdd(item, selectedVariant, quantity);
    onClose();
  };

  const totalPrice = selectedVariant ? selectedVariant.price * quantity : item.basePrice * quantity;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Bottom Sheet Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-2xl sm:max-w-md sm:mx-auto sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:rounded-2xl overflow-hidden shadow-2xl animate-slide-up sm:animate-fade-in">

        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
          <div>
            <div className={`w-4 h-4 border flex items-center justify-center rounded-sm mb-1 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
              <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              Customise {item.name}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-500 active:scale-95 transition-transform">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <h4 className="font-semibold text-gray-800 mb-3 text-sm">Quantity</h4>

          <div className="space-y-3">
            {item.variants.map((variant) => (
              <label key={variant.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl cursor-pointer active:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedVariant?.id === variant.id ? 'border-brand-red' : 'border-gray-300'}`}>
                    {selectedVariant?.id === variant.id && (
                      <div className="w-2.5 h-2.5 bg-brand-red rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-800">{variant.name}</span>
                </div>
                <span className="font-semibold text-gray-900">₹{variant.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-4 items-center">

          {/* Quantity Controls */}
          <div className="flex items-center justify-between bg-brand-red/10 border border-brand-red/20 rounded-xl w-32 h-12 px-2">
            <button
              className="w-8 h-8 flex items-center justify-center text-brand-red active:scale-90 transition-transform disabled:opacity-50"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-brand-red text-lg w-8 text-center">{quantity}</span>
            <button
              className="w-8 h-8 flex items-center justify-center text-brand-red active:scale-90 transition-transform"
              onClick={() => setQuantity(q => q + 1)}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-brand-red text-white font-bold h-12 rounded-xl flex items-center justify-between px-4 active:scale-[0.98] transition-transform shadow-md shadow-brand-red/20"
          >
            <span>Add item</span>
            <span>₹{totalPrice}</span>
          </button>
        </div>

      </div>
    </>
  );
}
