import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import VariantModal from './VariantModal';

export default function MenuItem({ item }) {
  const { addToCart, updateQuantity, getItemTotalQuantity, cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalQuantityInCart = getItemTotalQuantity(item.id);
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
      <article className="menu-item">
        <div className="dish-copy">
          <div className="dish-topline">
            <span className={`food-badge ${item.isVeg ? 'veg' : ''}`} role="img" aria-label={item.isVeg ? "Vegetarian" : "Non-vegetarian"}>
              <span></span>
            </span>
            {item.isSignature && (
              <span className="dish-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame" aria-hidden="true">
                  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                </svg>
                Signature
              </span>
            )}
          </div>
          <h3>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 dish-name-button" aria-label={`View ${item.name}`}>
              {item.name}
            </button>
          </h3>
          <div className="dish-price">
            ₹{item.basePrice}
            <span> {item.customisable ? 'onwards' : `· ${item.priceText.split('· ')[1]}`}</span>
          </div>
          <p>{item.description}</p>
        </div>

        <div className="dish-visual">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 dish-photo-button" aria-label={`View photo of ${item.name}`}>
            <img src={item.image} alt={item.name} width="180" height="180" loading="lazy" />
          </button>

          <div className="dish-add">
            {totalQuantityInCart === 0 ? (
              <button onClick={handleAddClick} className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 add-button ${item.isVeg ? 'veg-add' : ''}`} aria-label={`Add ${item.name}`}>
                ADD
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            ) : (
              <div style={{display:'flex', alignItems:'center', background:'white', border:'1px solid var(--brand-red, #E23744)', borderRadius:'8px', overflow:'hidden', height:'36px', width:'100%'}}>
                {item.customisable ? (
                   <button
                     onClick={handleAddClick}
                     style={{width:'100%', height:'100%', background:'rgba(226,55,68,0.05)', color:'var(--brand-red, #E23744)', fontWeight:'bold', fontSize:'12px', border:'none', cursor:'pointer'}}
                   >
                     {totalQuantityInCart} Added +
                   </button>
                ) : (
                  <>
                    <button
                      onClick={() => updateQuantity(item.id, null, -1)}
                      style={{flex:1, height:'100%', background:'transparent', border:'none', color:'var(--brand-red, #E23744)', cursor:'pointer', display:'flex', alignItems:'center', justifyItems:'center', justifyContent:'center'}}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus" aria-hidden="true"><path d="M5 12h14"></path></svg>
                    </button>
                    <span style={{fontWeight:'bold', color:'var(--brand-red, #E23744)', fontSize:'14px'}}>{cartItem?.quantity || totalQuantityInCart}</span>
                    <button
                      onClick={() => updateQuantity(item.id, null, 1)}
                      style={{flex:1, height:'100%', background:'transparent', border:'none', color:'var(--brand-red, #E23744)', cursor:'pointer', display:'flex', alignItems:'center', justifyItems:'center', justifyContent:'center'}}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          {item.customisable && <small>customisable</small>}
        </div>
      </article>

      <VariantModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleModalAdd}
      />
    </>
  );
}
