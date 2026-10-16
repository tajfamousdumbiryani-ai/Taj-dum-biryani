import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { menuItems, categories } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesToShow = activeCategory === 'All'
    ? categories.filter(c => c !== 'All' && filteredItems.some(i => i.category === c))
    : [activeCategory];

  return (
    <main id="menu" className="menu-section">
      <div className="menu-heading">
        <div>
          <span className="section-eyebrow">FRESHLY MADE. HAPPILY SHARED.</span>
          <h2>A little dum.<br className="mobile-break" /> A lot of delicious.</h2>
          <p>Find your favourite. We’ll take care of the cravings.</p>
        </div>
        <label className="menu-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" aria-hidden="true">
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          <input
            type="search"
            placeholder="Search for a dish"
            aria-label="Search dishes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      <div className="menu-navigation">
        <div className="category-tabs" role="tablist" aria-label="Menu categories">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {categoriesToShow.map((category) => {
          const itemsInCategory = filteredItems.filter(item => item.category === category);

          if (itemsInCategory.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="menu-list-heading">{category}</h3>
              <div className="space-y-4">
                {itemsInCategory.map((item) => (
                  <div key={item.id} style={{ opacity: 1, transform: 'none' }}>
                    <MenuItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No dishes found matching your search.</p>
            <button
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-4 text-brand-red font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      <p className="menu-footnote">A taste of Lucknow. Every order gets 10% off.</p>
    </main>
  );
}
