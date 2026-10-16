import React from 'react';
import { ChefHat, Flame, ArrowDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-zinc-900 h-[85vh] min-h-[500px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"
          alt="Overhead shot of Chicken Dum Biryani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-4xl mx-auto px-4 flex flex-col justify-between pt-6 pb-8">

        {/* Top Row: Tagline & Badge */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              From our dum to your doorstep
            </span>
          </div>

          <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-2 text-center transform rotate-12">
            <ChefHat className="text-white w-6 h-6 mb-1" />
            <span className="text-white text-[8px] font-bold leading-tight uppercase">
              Good Things Take Dum
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tight">
            Lucknow Ka Dum,<br />Har Bite Mein<span className="text-brand-red">.</span>
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-md mb-8 leading-relaxed">
            Good Things Take Dum. Authentic slow-cooked flavours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToMenu}
              className="bg-brand-red text-white font-bold text-lg px-8 py-4 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30"
            >
              Order Now <span className="text-xl leading-none">→</span>
            </button>
            <a
              href="https://wa.me/919984785099"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-white/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Bottom Row */}
          <div className="flex items-end justify-between border-t border-white/20 pt-6 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Flame className="text-brand-red w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold">Slow-cooked.</span>
                <span className="text-gray-300 text-sm">Full of flavour.</span>
              </div>
            </div>

            <button
              onClick={scrollToMenu}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white active:bg-white/10 transition-colors animate-bounce"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
