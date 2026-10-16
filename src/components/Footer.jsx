import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Utensils } from 'lucide-react';

import { useCart } from "../context/CartContext";

export default function Footer() {
  const { totalItems } = useCart();
  return (
    <footer className="bg-gray-50 pt-12 pb-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2 block">
            Come hungry. Leave happy.
          </span>
          <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
            Your neighbourhood. Your biryani.
          </h2>
          <p className="text-gray-500 font-medium">
            Taj Famous Dum Biryani, Gomti Nagar, Lucknow
          </p>
        </div>

        {/* Contact Info List */}
        <div className="space-y-6 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">

          <div className="flex gap-4">
            <div className="mt-1">
              <MapPin className="text-brand-red w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Find us in Gomti Nagar</h4>
              <a href="https://maps.google.com/?q=Taj+Famous+Dum+Biryani+Gomti+Nagar+Lucknow" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-brand-red transition-colors block">
                LG-6, LDA Market, Vibhav Khand-4, Gomti Nagar, Near Mantri Awas, Food Safety Zone-17, Lucknow, Uttar Pradesh - 226010
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex gap-4">
            <div className="mt-1">
              <Phone className="text-brand-red w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Give us a call</h4>
              <a href="tel:+919984785099" className="text-gray-600 text-sm font-semibold hover:text-brand-red transition-colors block">
                +91 99847 85099
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex gap-4">
            <div className="mt-1">
              <Clock className="text-brand-red w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Opening hours</h4>
              <p className="text-gray-600 text-sm">
                Mon–Sun, 12:00 PM – 11:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* FSSAI Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-8 opacity-70">
          <div className="border-2 border-gray-300 rounded px-3 py-1 mb-2 inline-flex items-center gap-2">
             <span className="font-bold text-gray-500 text-lg tracking-wide">fssai</span>
          </div>
          <p className="text-xs font-semibold text-gray-500 tracking-wider">
            FSSAI Reg. No.: 22726746000789
          </p>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      {totalItems === 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">

          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center shrink-0 hidden sm:flex">
              <Utensils className="text-white w-5 h-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight tracking-tight text-black">
                TAJ FAMOUS
              </span>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wide leading-none">
                Dum Biryani
              </span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919984785099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp →</span>
          </a>

        </div>
      </div>
      )}
    </footer>
  );
}
