import React from 'react';

export default function PhilosophyPage() {
  const values = [
    {
      title: "Curation",
      desc: "We don't believe in infinite scrolls. We believe in hand-selected excellence that respects the reader's time."
    },
    {
      title: "Craftsmanship",
      desc: "From the weight of the paper to the rhythm of the prose, every detail is engineered for immersion."
    },
    {
      title: "Community",
      desc: "StoryHaus is a home for those who still find magic in the turning of a physical page."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-24">
      {/* Narrative Header */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <span className="text-amber-600 text-[10px] tracking-[0.5em] font-bold uppercase mb-6 block">
          Our Philosophy
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-12 leading-tight">
          A Sanctuary for <br />
          <span className="italic font-medium text-stone-700">The Written Word.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            STORYHAUS was born from a simple observation: in a world of digital noise, the soul craves silence and a good story. We are not just a bookstore; we are a boutique publishing house dedicated to the art of the novel.
          </p>
          <p className="text-stone-600 font-light text-lg leading-relaxed">
            Our mission is to bridge the gap between the legendary writers of the past and the avant-garde voices of tomorrow. We specialize in Fictional and Septran works that challenge, comfort, and inspire.
          </p>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="bg-stone-900 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="border-l border-stone-700 pl-8 py-4 hover:border-amber-600 transition-colors duration-500">
                <h3 className="text-amber-600 text-xs tracking-widest uppercase font-bold mb-4">0{index + 1}</h3>
                <h4 className="text-white text-2xl font-serif font-bold mb-4">{value.title}</h4>
                <p className="text-stone-400 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="relative h-[400px] w-full overflow-hidden mb-16 rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2000&auto=format&fit=crop" 
            alt="Philosophy of Reading" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-serif italic text-stone-800 max-w-3xl mx-auto leading-relaxed">
          "A book is a heart that only beats in the chest of another."
        </h2>
        <div className="h-12 w-[1px] bg-amber-600 mx-auto mt-8"></div>
      </section>

      {/* Final Call to Action */}
      <section className="pb-24 pt-12 text-center">
        <p className="text-stone-500 mb-8 uppercase tracking-widest text-[10px] font-bold">Experience the Haus</p>
        <a 
          href="/genres" 
          className="text-stone-900 border-b-2 border-amber-600 pb-2 font-serif text-2xl hover:text-amber-700 transition-all"
        >
          Browse Our Curated Collections →
        </a>
      </section>
    </main>
  );
}