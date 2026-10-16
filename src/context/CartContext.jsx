import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load from localStorage or default to empty array
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('tajCart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tajCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, variant = null, quantity = 1) => {
    setCartItems(prev => {
      // Find exact item (matching ID, and if variant provided, matching variant ID)
      const existingItemIndex = prev.findIndex(i =>
        i.id === item.id && (variant ? i.variant?.id === variant.id : true)
      );

      if (existingItemIndex >= 0) {
        // Update quantity
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new
        return [...prev, { ...item, variant, quantity }];
      }
    });
  };

  const updateQuantity = (cartItemId, variantId, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === cartItemId && (variantId ? item.variant?.id === variantId : true)) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  // Get total quantity of a specific item (across all variants)
  const getItemTotalQuantity = (itemId) => {
    return cartItems.filter(i => i.id === itemId).reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmount = cartItems.reduce((acc, curr) => {
    const price = curr.variant ? curr.variant.price : curr.basePrice;
    return acc + (price * curr.quantity);
  }, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      getItemTotalQuantity,
      totalItems,
      totalAmount,
      isCartOpen,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
