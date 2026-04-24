import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-stone-300 py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
            STORY<span className="text-amber-600">HAUS</span>
          </h3>
          <p className="text-sm leading-relaxed font-light text-stone-400">
            A curated sanctuary for bibliophiles. Delivering the finest fictional masterpieces and contemporary novels to your doorstep.
          </p>
        </div>
        
        {/* Categories Section */}
        <div>
          <h4 className="text-amber-600 text-xs tracking-widest uppercase mb-8 font-bold">Collections</h4>
          <ul className="text-sm font-light space-y-3">
            <li><Link href="/genres" className="hover:text-white transition-colors cursor-pointer">Fictional</Link></li>
            <li><Link href="/genres" className="hover:text-white transition-colors cursor-pointer">Septran Novels</Link></li>
            <li><Link href="/genres" className="hover:text-white transition-colors cursor-pointer">Classic Literature</Link></li>
            <li><Link href="/genres" className="hover:text-white transition-colors cursor-pointer">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-amber-600 text-xs tracking-widest uppercase mb-8 font-bold">The Office</h4>
          <div className="flex flex-col gap-3 text-sm font-light">
            <a href="mailto:hello@storyhaus.com" className="hover:text-amber-500 transition-colors">hello@storyhaus.com</a>
            <p className="text-white font-medium">Contact our Concierge</p>
            <p className="text-stone-500">Rawalpindi, Pakistan</p>
          </div>
        </div>

        {/* Writers Section */}
        <div>
          <h4 className="text-amber-600 text-xs tracking-widest uppercase mb-8 font-bold">Writers</h4>
          <div className="flex flex-col gap-3 text-sm font-light">
            <Link href="/authors" className="hover:text-white">Featured Authors</Link>
            <Link href="/authors" className="hover:text-white">Writer Spotlights</Link>
            <Link href="/submissions" className="hover:text-white">Publish with Us</Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-20 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase">
        <div className="text-stone-500">
          © {currentYear} STORYHAUS. TAILORED TALES.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-amber-600 font-bold tracking-widest">Quality Over Quantity</span>
        </div>
      </div>
    </footer>
  );
}