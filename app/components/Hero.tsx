"use client";

import React from 'react';

export default function Hero() {
  const EXPLORE_LINK = "/genres";
  // Using a beautiful, moody library image
  const HERO_IMAGE = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-stone-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="StoryHaus Elegant Library" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Literary Overlay: Deep browns and blacks for a sophisticated look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight tracking-tight mb-6 animate-fade-in">
            Every Page <br />
            <span className="text-amber-600 italic font-medium">A New World.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 font-light mb-10 max-w-xl leading-relaxed">
            Welcome to <span className="font-bold text-white">STORYHAUS</span>. Discover a curated collection of fictional masterpieces and timeless novels designed for the modern reader.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={EXPLORE_LINK}
              className="px-10 py-5 bg-amber-600 text-white text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-white hover:text-stone-900 transition-all shadow-2xl text-center"
            >
              Explore Collection
            </a>
            <a 
              href="/authors"
              className="px-10 py-5 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-white/10 backdrop-blur-sm transition-all text-center"
            >
              Meet the Writers
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .animate-fade-in { animation: fadeIn 1.2s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}