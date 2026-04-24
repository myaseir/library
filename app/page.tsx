import Hero from './components/Hero';
import BookCard from './components/BookCard';
import Link from 'next/link';

export default function Home() {
  // Featured books for the landing page
  const featuredBooks = [
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
      price: "PKR 1,250",
      title: "The Silent Forest",
      author: "Elena Thorne",
      category: "Fictional"
    },
    {
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      price: "PKR 2,100",
      title: "Beyond the Septran",
      author: "Julian Vane",
      category: "Septran Novels"
    },
    {
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
      price: "PKR 950",
      title: "The Midnight Alibi",
      author: "Sarah J. Moss",
      category: "Mystery"
    }
  ];

  return (
    <main className="bg-[#fdfcf8]">
      <Hero />

      {/* Section 1: Literary Stats */}
      <section className="py-16 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Original Works", val: "120+" },
            { label: "Master Authors", val: "45+" },
            { label: "Active Readers", val: "10k+" },
            { label: "Awards Won", val: "15+" },
          ].map((stat, i) => (
            <div key={i} className="group">
              <p className="text-4xl font-serif font-bold text-stone-900 mb-1">{stat.val}</p>
              <p className="text-amber-700 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: The Haus Experience */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-700 text-xs tracking-[0.4em] font-bold uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Crafting Immersion</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Boutique Publishing", desc: "We provide a home for unique voices in fiction, ensuring every word finds its purpose.", link: "/about" },
            { title: "Curated Archive", desc: "Browse a selection of Septran novels and classic literature hand-picked by our editors.", link: "/genres" },
            { title: "Writer Workshops", desc: "Bridging the gap between storytelling and technical mastery for aspiring authors.", link: "/authors" }
          ].map((service, i) => (
            <div key={i} className="p-10 bg-white border border-stone-200 rounded-sm hover:border-amber-600/50 transition-all group">
              <div className="w-12 h-[1px] bg-amber-600 mb-6 group-hover:w-24 transition-all duration-500"></div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6">{service.desc}</p>
              <Link href={service.link} className="text-amber-700 font-bold text-[10px] uppercase tracking-widest hover:text-stone-900 transition-colors italic">Explore Service →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Featured Books (The Dark Section) */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Editors' <span className="text-amber-500 italic">Choice</span></h2>
              <p className="text-stone-400 text-lg max-w-xl font-light">The stories we can't stop talking about this month.</p>
            </div>
            <Link href="/genres" className="px-10 py-4 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-stone-900 transition-all">
              The Full Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="py-24 px-6 bg-[#fdfcf8]">
        <div className="max-w-5xl mx-auto text-center py-24 px-6 border border-stone-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-stone-900 mb-8 relative z-10 leading-tight">
            Begin Your Next <br /> <span className="italic text-stone-600">Great Chapter.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/genres" className="px-12 py-5 bg-stone-950 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-amber-600 transition-all">
              Browse Novels
            </Link>
            <Link href="/contact" className="px-12 py-5 border border-stone-950 text-stone-950 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-stone-950 hover:text-white transition-all">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}