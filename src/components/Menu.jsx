import React, { useState } from 'react';
import { Search } from 'lucide-react';
import MenuItem from './MenuItem';
import { menuItems, categories } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu-section" className="py-8 bg-white max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2 block">
          Freshly made. Happily shared.
        </span>
        <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
          A little dum. A lot of delicious.
        </h2>
        <p className="text-gray-500 font-medium">
          Find your favourite. We'll take care of the cravings.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-colors sm:text-sm"
          placeholder="Search for a dish"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg font-semibold text-sm transition-colors border ${
              activeCategory === category
                ? 'bg-brand-red text-white border-brand-red shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* List Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          The full spread ({filteredItems.length} items)
        </h3>
      </div>

      {/* Menu Items List */}
      <div className="flex flex-col">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No items found.
          </div>
        )}
      </div>
    </section>
  );
}
