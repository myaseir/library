import React from 'react';
import BookCard from '../components/BookCard';

export default function GenresPage() {
  const genres = [
    {
      src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      title: "The Silent Forest",
      category: "Fictional",
      price: "PKR 1,250",
      author: "Elena Thorne"
    },
    {
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      title: "Beyond the Septran",
      category: "Septran Novels",
      price: "PKR 2,100",
      author: "Julian Vane"
    },
    {
      src: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=800&auto=format&fit=crop",
      title: "Echoes of Time",
      category: "Classic Literature",
      price: "PKR 1,800",
      author: "Marcus Sterling"
    },
    {
      src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
      title: "The Midnight Alibi",
      category: "Mystery",
      price: "PKR 950",
      author: "Sarah J. Moss"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-24">
      {/* Page Header */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto border-b border-stone-200">
        <span className="text-amber-600 text-[10px] tracking-[0.5em] font-bold uppercase mb-4 block">
          The Archive
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
          Explore Genres.
        </h1>
        <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto italic">
          "A room without books is like a body without a soul." Browse our curated selection of fictional masterpieces and contemporary novels.
        </p>
      </section>

      {/* Genres/Books Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((book, index) => (
            <BookCard 
              key={index}
              image={book.src}
              title={book.title}
              category={book.category}
              price={book.price}
              author={book.author}
            />
          ))}
        </div>

        {/* Membership/Newsletter CTA */}
        <div className="mt-20 p-12 bg-stone-900 text-center border border-stone-800">
          <h3 className="text-white font-serif font-bold text-3xl mb-4">Join The StoryHaus Circle</h3>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto font-light">
            Subscribe to our monthly newsletter to get exclusive early access to first-edition novels and writer interviews.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:border-amber-600 w-full sm:w-80"
            />
            <button className="px-10 py-4 bg-amber-600 text-white text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-stone-900 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}