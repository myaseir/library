import React from 'react';

interface BookProps {
  image: string;
  category: string; // e.g., "Fictional", "Septran Novel"
  title: string;
  author: string;
  price: string;
}

export default function BookCard({ image, category, title, author, price }: BookProps) {
  return (
    <div className="group bg-white overflow-hidden transition-all duration-500 border border-stone-200 hover:border-amber-600/50">
      {/* Book Cover Container */}
      <div className="relative aspect-[2/3] overflow-hidden bg-stone-100">
        <div className="absolute top-3 left-3 z-10 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1">
          {category}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        {/* Subtle Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>

      {/* Book Info */}
      <div className="p-5 text-center">
        <h3 className="text-stone-900 font-serif font-bold text-lg leading-tight mb-1 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <p className="text-stone-500 text-xs italic mb-3">
          by {author}
        </p>
        <div className="h-[1px] w-8 bg-stone-200 mx-auto mb-3"></div>
        <p className="text-amber-700 font-bold text-sm tracking-widest">
          {price}
        </p>
        
        <button className="w-full mt-5 py-3 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition-all duration-300">
          Read Synopsis
        </button>
      </div>
    </div>
  );
}