"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isSubPage = pathname !== "/";
  const shouldShowSolidBg = scrolled || isOpen || isSubPage;

  // STORYHAUS Color Palette
  const textColor = shouldShowSolidBg ? "text-slate-800" : "text-white";
  const brandColor = shouldShowSolidBg ? "text-slate-900" : "text-white";
  const accentColor = "text-amber-600"; 
  const hoverColor = "hover:text-amber-500";

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        shouldShowSolidBg
          ? "bg-[#fdfcf8]/95 backdrop-blur-md py-4 border-b border-stone-200 shadow-sm" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-12">
          
          {/* Left Navigation: Catalog-focused */}
          <div className="hidden md:flex gap-10 items-center flex-1">
            <Link href="/genres" className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-colors ${textColor} ${hoverColor}`}>
              Archive
            </Link>
            <Link href="/authors" className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-colors ${textColor} ${hoverColor}`}>
              Authors
            </Link>
          </div>

          {/* Central Brand: STORYHAUS */}
          <div className="flex-shrink-0 z-50 text-center">
            <Link href="/" onClick={closeMenu} className="flex flex-col items-center group">
              <span className={`text-2xl md:text-3xl font-serif font-black tracking-[-0.02em] transition-colors ${brandColor}`}>
                STORY<span className={accentColor}>HAUS</span>
              </span>
              {/* Minimalist Bauhaus-inspired accent */}
              <div className="h-[2px] w-4 group-hover:w-full bg-slate-900 transition-all duration-500 mt-0.5"></div>
            </Link>
          </div>

          {/* Right Navigation: Community-focused */}
          <div className="hidden md:flex gap-10 items-center justify-end flex-1">
            <Link href="/about" className={`text-[10px] tracking-[0.25em] uppercase font-bold transition-colors ${textColor} ${hoverColor}`}>
              Our Philosophy
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-slate-900 text-white text-[9px] tracking-[0.2em] uppercase font-bold hover:bg-amber-600 transition-all duration-300 rounded-none"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Menu">
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-[2px] transition-all duration-300 ${isOpen ? "bg-slate-900 w-6 rotate-45 translate-y-2" : `w-6 ${shouldShowSolidBg ? 'bg-slate-900' : 'bg-white'}`}`}></span>
                <span className={`h-[2px] bg-amber-600 transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
                <span className={`h-[2px] transition-all duration-300 ${isOpen ? "bg-slate-900 w-6 -rotate-45 -translate-y-2" : `w-5 ${shouldShowSolidBg ? 'bg-slate-900' : 'bg-white'}`}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#fdfcf8] transition-transform duration-500 md:hidden flex flex-col items-center justify-center ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <nav className="flex flex-col items-center gap-8 text-center">
            <span className="text-amber-600 text-[10px] tracking-[0.5em] uppercase font-bold">Menu</span>
            <Link href="/genres" onClick={closeMenu} className="text-3xl font-serif font-black text-slate-900">Archive</Link>
            <Link href="/authors" onClick={closeMenu} className="text-3xl font-serif font-black text-slate-900">Authors</Link>
            <Link href="/about" onClick={closeMenu} className="text-3xl font-serif font-black text-slate-900">Philosophy</Link>
            <div className="h-[2px] w-8 bg-amber-600 my-4"></div>
            <Link href="/contact" onClick={closeMenu} className="text-slate-900 font-bold text-lg uppercase tracking-widest border-b-2 border-slate-900 pb-1">Contact</Link>
          </nav>
      </div>
    </nav>
  );
}