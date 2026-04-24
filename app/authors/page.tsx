import React from 'react';

export default function AuthorsPage() {
  // Curated list of writers for STORYHAUS
  const authors = [
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      name: "Julian Vane",
      genre: "Septran Novels / Sci-Fi",
      bio: "Award-winning author of the Septran Chronicles."
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
      name: "Elena Thorne",
      genre: "Fictional / Mystery",
      bio: "Specializing in atmospheric psychological thrillers."
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      name: "Marcus Sterling",
      genre: "Classic Literature",
      bio: "Modernizing the classics for the 21st century."
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      name: "Sarah J. Moss",
      genre: "Romance / Drama",
      bio: "Exploring the depth of human emotion through prose."
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      name: "Robert Blackwood",
      genre: "Historical Fiction",
      bio: "Bringing history to life with meticulous detail."
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
      name: "Aisha Khan",
      genre: "Poetry / Contemporary",
      bio: "A voice for modern cultural intersections."
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-24">
      {/* Editorial Header */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto border-b border-stone-200">
        <span className="text-amber-600 text-[10px] md:text-xs tracking-[0.6em] font-bold uppercase mb-6 block">
          The Master Minds
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-stone-900 mb-8 tracking-tight">
          Our Writers.
        </h1>
        <p className="text-stone-500 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
          Meet the architects of imagination. Each writer at <span className="text-stone-900 font-bold not-italic">STORYHAUS</span> is hand-selected for their unique voice and literary depth.
        </p>
      </section>

      {/* Authors Portrait Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {authors.map((writer, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm">
                <img 
                  src={writer.src} 
                  alt={writer.name} 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                />
                
                {/* Elegant Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-amber-500 text-[9px] tracking-[0.3em] uppercase mb-2 font-bold">
                    {writer.genre}
                  </span>
                  <h3 className="text-white text-3xl font-serif font-bold mb-2">
                    {writer.name}
                  </h3>
                  <p className="text-stone-300 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {writer.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Booking Call to Action */}
        <div className="mt-32 text-center bg-stone-900 py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 relative z-10">Want to join the Haus?</h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto font-light text-lg">
            We are always looking for fresh voices in Fictional and Septran literature. Submit your manuscript today.
          </p>
          <a 
            href="/contact"
            className="inline-block px-14 py-5 bg-amber-600 hover:bg-white hover:text-stone-950 text-white text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-500 shadow-xl relative z-10"
          >
            Submit Manuscript
          </a>
        </div>
      </section>

      {/* Trust Badge */}
      <div className="pb-12 text-center">
        <p className="text-[10px] tracking-widest uppercase text-stone-400">
          Curated Excellence by <span className="text-stone-900 font-bold">STORYHAUS PUBLISHING</span>
        </p>
      </div>
    </main>
  );
}