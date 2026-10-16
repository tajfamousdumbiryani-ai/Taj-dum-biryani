import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, MapPin, Phone, User, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, totalAmount, updateQuantity } = useCart();

  const [orderType, setOrderType] = useState('home_delivery');
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  if (!isCartOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!customerName.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(mobileNumber)) newErrors.mobile = "Valid 10-digit mobile number is required";
    if (orderType === 'home_delivery' && !address.trim()) newErrors.address = "Full address is required for delivery";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    let itemsListText = cartItems.map((item, index) => {
      const variantText = item.variant ? `(${item.variant.name})` : '';
      const price = item.variant ? item.variant.price : item.basePrice;
      const subtotal = price * item.quantity;
      return `${index + 1}. ${item.name} ${variantText} x ${item.quantity} = ₹${subtotal}`;
    }).join('\n');

    let message = `*🍕 NEW ORDER - TAJ FAMOUS DUM BIRYANI*\n`;
    message += `------------------------------\n`;
    message += `*Order Type:* ${orderType === 'home_delivery' ? 'Home Delivery' : 'Self Pickup'}\n`;
    message += `*Customer Name:* ${customerName}\n`;
    message += `*Phone:* ${mobileNumber}\n`;
    if (orderType === 'home_delivery') {
      message += `*Address:* ${address}\n`;
    }
    message += `------------------------------\n`;
    message += `*📋 ORDER ITEMS:*\n${itemsListText}\n`;
    message += `------------------------------\n`;
    message += `*💰 TOTAL BILL: ₹${totalAmount}*\n`;

    if (instructions.trim()) {
      message += `*Note:* ${instructions}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919984785099?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-[80] backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-gray-50 z-[90] shadow-2xl flex flex-col animate-slide-left">

        {/* Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-800" />
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
          </div>
          <button onClick={closeCart} className="p-2 bg-gray-50 rounded-full text-gray-500 active:scale-95 transition-transform">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
            <button
              onClick={closeCart}
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-xl active:scale-95 transition-transform"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">

              {/* Added Items List */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
                {cartItems.map((item, index) => {
                  const price = item.variant ? item.variant.price : item.basePrice;
                  return (
                    <div key={`${item.id}-${item.variant?.id || 'base'}`} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-3 h-3 border flex items-center justify-center rounded-sm ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                          </div>
                          <span className="font-semibold text-gray-900 leading-tight">{item.name}</span>
                        </div>
                        {item.variant && (
                          <div className="text-xs text-gray-500 ml-5 mb-1">{item.variant.name}</div>
                        )}
                        <div className="text-sm font-semibold text-gray-700 ml-5">₹{price}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center justify-between bg-brand-red/10 border border-brand-red/20 rounded-lg h-8 px-1">
                          <button
                            className="w-7 h-full flex items-center justify-center text-brand-red"
                            onClick={() => updateQuantity(item.id, item.variant?.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-brand-red text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            className="w-7 h-full flex items-center justify-center text-brand-red"
                            onClick={() => updateQuantity(item.id, item.variant?.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-sm font-bold text-gray-900">₹{price * item.quantity}</div>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={closeCart}
                  className="w-full py-3 mt-2 text-brand-red font-semibold text-sm border border-brand-red/20 rounded-xl bg-brand-red/5"
                >
                  Add more items
                </button>
              </div>

              {/* Order Details Form */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Customer Details</h3>

                {/* Order Type */}
                <div className="flex gap-2 mb-4 bg-gray-50 p-1 rounded-xl border border-gray-200">
                  <button
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${orderType === 'home_delivery' ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500'}`}
                    onClick={() => setOrderType('home_delivery')}
                  >
                    Home Delivery
                  </button>
                  <button
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${orderType === 'self_pickup' ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500'}`}
                    onClick={() => setOrderType('self_pickup')}
                  >
                    Self Pickup
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-red focus:border-brand-red'} bg-gray-50 focus:bg-white focus:outline-none transition-colors text-sm`}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        maxLength="10"
                        className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-red focus:border-brand-red'} bg-gray-50 focus:bg-white focus:outline-none transition-colors text-sm`}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
                  </div>

                  {orderType === 'home_delivery' && (
                    <div>
                      <div className="relative">
                        <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <textarea
                          placeholder="Complete Delivery Address & Landmark *"
                          rows="3"
                          className={`w-full pl-10 pr-3 py-3 rounded-xl border ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-red focus:border-brand-red'} bg-gray-50 focus:bg-white focus:outline-none transition-colors text-sm resize-none`}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      {errors.address && <p className="text-red-500 text-xs mt-1 ml-1">{errors.address}</p>}
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <MessageSquare className="h-4 w-4 text-gray-400" />
                    </div>
                    <textarea
                      placeholder="Any cooking instructions? (e.g. Make it spicy)"
                      rows="2"
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-brand-red focus:border-brand-red transition-colors text-sm resize-none"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Bill Details */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Bill Details</h3>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Item Total</span>
                  <span className="font-semibold text-gray-900">₹{totalAmount}</span>
                </div>
                <div className="w-full h-px bg-gray-100 my-3"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">To Pay</span>
                  <span className="font-black text-lg text-gray-900">₹{totalAmount}</span>
                </div>
              </div>

            </div>

            {/* Bottom Fixed Action */}
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#25D366] text-white font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg shadow-[#25D366]/30"
              >
                <span>Place Order on WhatsApp</span>
                <span className="bg-white/20 px-2 py-1 rounded-lg text-sm">₹{totalAmount}</span>
              </button>
            </div>
          </>
        )}

      </div>
    </>
  );
}
