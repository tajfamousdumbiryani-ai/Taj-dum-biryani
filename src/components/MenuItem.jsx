import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import VariantModal from './VariantModal';
import { Minus, Plus } from 'lucide-react';

export default function MenuItem({ item }) {
  const scrollPosition = React.useRef(0);

  const { addToCart, updateQuantity, getItemTotalQuantity, cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalQuantityInCart = getItemTotalQuantity(item.id);

  // For non-customisable items, we can find the exact cart item to handle +/- directly
  const cartItem = !item.customisable ? cartItems.find(i => i.id === item.id) : null;

  const handleAddClick = () => {
    if (item.customisable) {
      setIsModalOpen(true);
    } else {
      addToCart(item, null, 1);
    }
  };

  const handleModalAdd = (itemData, variantData, qty) => {
    addToCart(itemData, variantData, qty);
  };

  return (
    <>
      <div className="flex justify-between gap-4 py-6 border-b border-gray-200 last:border-0">
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-4 h-4 border flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
              <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
            </div>
            {item.isSignature && (
              <span className="text-brand-red text-xs font-bold bg-brand-red/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                🔥 Signature
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
            {item.name}
          </h3>

          <div className="text-[13px] font-medium text-gray-800 mb-1.5">
            {item.priceText}
          </div>

          <p className="text-gray-500 text-sm leading-snug line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Right Image & Button */}
        <div className="relative w-32 h-32 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-2xl shadow-sm"
          />

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28">
            {totalQuantityInCart === 0 ? (
              <button
                onClick={handleAddClick}
                className="w-full bg-white text-brand-red font-bold py-1.5 px-4 rounded-lg shadow-sm border border-gray-200 uppercase text-sm hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center gap-1"
              >
                ADD <span className="text-lg leading-none">+</span>
              </button>
            ) : (
              <div className="w-full bg-white border border-brand-red rounded-lg shadow-md flex items-center justify-between h-[38px] overflow-hidden">
                {item.customisable ? (
                   // If customisable, clicking +/- should probably open modal or redirect to cart.
                   // Zomato usually opens modal for customisable again, or shows a simplified view.
                   // We'll open the modal for simplicity so they can add another variant.
                   <button
                     onClick={handleAddClick}
                     className="w-full h-full text-brand-red font-bold text-sm bg-brand-red/5 flex items-center justify-center gap-2"
                   >
                     <span>{totalQuantityInCart} Added</span>
                     <Plus className="w-4 h-4" />
                   </button>
                ) : (
                  // Non customisable counter
                  <>
                    <button
                      onClick={() => updateQuantity(item.id, null, -1)}
                      className="w-8 h-full flex items-center justify-center text-brand-red hover:bg-brand-red/10 active:bg-brand-red/20 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-brand-red text-sm">{cartItem?.quantity || totalQuantityInCart}</span>
                    <button
                      onClick={() => updateQuantity(item.id, null, 1)}
                      className="w-8 h-full flex items-center justify-center text-brand-red hover:bg-brand-red/10 active:bg-brand-red/20 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            )}

            {item.customisable && (
              <div className="text-[10px] text-gray-400 text-center mt-0.5 font-medium">
                customisable
              </div>
            )}
          </div>
        </div>
      </div>

      <VariantModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleModalAdd}
      />
    </>
  );
}
