"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Book Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulated API call
    setTimeout(() => {
      console.log("StoryHaus Inquiry:", formData);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-20 flex flex-col">
      
      {/* Literary Concierge Header */}
      <section className="bg-stone-900 text-stone-100 py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-amber-600 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-6 block">
            The Concierge
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
            Connect with <span className="italic font-medium text-amber-500">The Haus</span>
          </h1>
          <p className="max-w-2xl mx-auto font-light leading-relaxed text-stone-400 text-lg md:text-xl italic">
            "Whether you are seeking a rare first edition or sharing your own manuscript, our doors are always open to lovers of literature."
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Office Information */}
          <div className="flex flex-col items-start pt-4">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-10">Reach Us</h2>
            
            <div className="mb-12 border-l border-amber-600 pl-8 py-2">
              <h4 className="text-amber-700 text-[10px] tracking-[0.3em] font-bold uppercase mb-4">The Library Office</h4>
              <p className="text-stone-600 font-light text-lg leading-relaxed">
                STORYHAUS Publishing<br />
                Rawalpindi & Islamabad, Pakistan
              </p>
            </div>

            <div className="mb-12 border-l border-amber-600 pl-8 py-2">
              <h4 className="text-amber-700 text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Inquiries</h4>
              <p className="text-stone-600 font-light text-lg mb-2">
                <a href="mailto:hello@storyhaus.com" className="hover:text-amber-600 transition-colors">hello@storyhaus.com</a>
              </p>
              <p className="text-stone-900 font-serif font-bold text-2xl mt-2">
                <a href="tel:03334556777" className="hover:text-amber-600 transition-colors font-sans">0333 4556777</a>
              </p>
            </div>

            <div className="mt-auto bg-stone-100 p-8 rounded-sm w-full border border-stone-200">
              <p className="text-[10px] tracking-widest uppercase text-stone-900 font-bold mb-2">Reading Room Hours</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Mon — Sat: 10:00 AM - 08:00 PM</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Sunday: Closed for Reading</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl border border-stone-100 relative">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Send a Message</h3>
            
            {status === 'success' ? (
              <div className="py-20 text-center animate-fade-in">
                <div className="text-amber-600 text-5xl mb-4">✉</div>
                <h4 className="text-2xl font-serif font-bold text-stone-900">Message Received</h4>
                <p className="text-stone-500 mt-2">Our curators will respond to your story shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-bold">Full Name</label>
                    <input 
                      type="text" id="name" required
                      value={formData.name} onChange={handleChange}
                      className="border-b border-stone-200 py-3 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-stone-900 text-sm" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-bold">Phone</label>
                    <input 
                      type="tel" id="phone" required
                      value={formData.phone} onChange={handleChange}
                      className="border-b border-stone-200 py-3 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-stone-900 text-sm" 
                      placeholder="03XX XXXXXXX" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-bold">Nature of Inquiry</label>
                  <select 
                    id="interest" 
                    value={formData.interest} onChange={handleChange}
                    className="border-b border-stone-200 py-3 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-stone-900 text-sm appearance-none cursor-pointer"
                  >
                    <option>Book Inquiry</option>
                    <option>Manuscript Submission</option>
                    <option>Writer Collaboration</option>
                    <option>Press & Media</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-bold">Your Story</label>
                  <textarea 
                    id="message" rows={3} required
                    value={formData.message} onChange={handleChange}
                    className="border-b border-stone-200 py-3 focus:outline-none focus:border-amber-600 transition-colors bg-transparent text-stone-900 text-sm resize-none" 
                    placeholder="Tell us more..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="mt-6 px-12 py-5 bg-stone-900 hover:bg-amber-600 text-white text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-500 shadow-lg disabled:bg-stone-300"
                >
                  {status === 'sending' ? 'Sending...' : 'Dispatch Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}