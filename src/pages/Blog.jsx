import React, { useState } from "react";
import { Search, ChevronRight, Zap } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const TOPIC_TAGS = ["All", "Beauty Trends", "Salons", "Self-Care", "Professionals", "News"];

  const TRENDING = [
    { id: 1, tag: "Beauty Trends", color: "#1d4ed8", title: "Top 5 Summer Skincare Routines", meta: "6 min · 18.2K views", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" },
    { id: 2, tag: "Self-Care", color: "#7c3aed", title: "Why Regular Massages are Essential", meta: "4 min · 14K views", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80" },
    { id: 3, tag: "Salons", color: "#059669", title: "Finding the Best Salon in Your Area", meta: "7 min · 9.8K views", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="w-full bg-white pb-20">
      <section className="pt-28 pb-16 bg-gradient-to-t from-white to-[#E0EBFC] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-widest block mb-4">
            THE ZUCA BLOG
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Discover the latest in <br />
            <span className="text-[#1d4ed8]">beauty & wellness</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Expert advice, industry trends, and inspiration to help you look and feel your absolute best.
          </p>
          <div className="mt-10 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for articles, trends, tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 focus:border-[#1d4ed8] bg-white font-medium shadow-sm"
            />
            <Search className="absolute left-5 top-4 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-100">
        <div className="flex overflow-x-auto gap-4 pb-2 [&::-webkit-scrollbar]:hidden">
          {TOPIC_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tag
                  ? "bg-[#1d4ed8] text-white shadow-md shadow-blue-600/20"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-150"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRENDING.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative h-60 w-full rounded-3xl overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold shadow-sm"
                    style={{ color: article.color }}
                  >
                    {article.tag}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs font-bold mb-2">{article.meta}</p>
              <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#1d4ed8] transition-colors leading-tight">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto px-6 pt-24">
        <div className="bg-[#f8fafc] border border-blue-50 rounded-3xl p-10 text-center relative overflow-hidden">
          <Zap className="h-10 w-10 text-[#1d4ed8] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Never miss an update</h2>
          <p className="text-gray-500 text-sm mb-6">Get the latest beauty tips and Zuca news delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#1d4ed8]"
            />
            <button className="bg-[#1d4ed8] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1d4ed8]/90 transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
