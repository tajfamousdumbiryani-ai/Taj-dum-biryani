import React from 'react';

export default function MenuItem({ item }) {
  return (
    <div className="flex justify-between gap-4 py-6 border-b border-gray-100 last:border-0">
      {/* Left Content */}
      <div className="flex-1">
        {/* Veg / Non-Veg Icon */}
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

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
          {item.name}
        </h3>

        {/* Price Text */}
        <div className="text-sm font-semibold text-gray-800 mb-2">
          {item.priceText}
        </div>

        {/* Description */}
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

        {/* Add Button */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24">
          <button className="w-full bg-white text-brand-red font-bold py-2 px-4 rounded-lg shadow-md border border-gray-100 uppercase text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
            ADD <span className="text-lg leading-none">+</span>
          </button>
          {item.customisable && (
            <div className="text-[10px] text-gray-500 text-center mt-1 font-medium bg-white/90 rounded px-1">
              customisable
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
