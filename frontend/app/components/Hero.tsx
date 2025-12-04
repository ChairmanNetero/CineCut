"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // Navigate to your generation page or handle logic here
      console.log("Generating response for:", prompt);
      // Example: router.push(`/generate?prompt=${encodeURIComponent(prompt)}`);
    }
  };

  const handlePillClick = (text: string) => {
    setPrompt(text);
  };

  const suggestions = [
    "Horror Japanese movies between 1990 and 2000",
    "Cyberpunk sci-fi with a dystopian tone",
    "Underrated comedies from the 80s",
    "Movies directed by Christopher Nolan",
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      
      {/* Background Effects (Spotlight & Grid) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
            }}
        ></div>
        {/* Central Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center space-y-8">
        
        {/* Headlines */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Find the perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Cut.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Describe the mood, era, or genre. CineCut's AI will curate the ultimate watchlist for you.
          </p>
        </div>

        {/* AI Prompt Input */}
        <form onSubmit={handleGenerate} className="w-full max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center bg-[#111] border border-gray-800 rounded-2xl p-2 shadow-2xl">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Give me a list of horror Japanese movies..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 text-lg px-4 py-3 outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <span>Generate</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c5.22 0 9.5 4 8 8" />
                <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
              </svg>
            </button>
          </div>
        </form>

        {/* Suggestions / Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="text-sm text-gray-500">Try asking:</span>
          {suggestions.map((item, index) => (
            <button
              key={index}
              onClick={() => handlePillClick(item)}
              className="text-sm px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;