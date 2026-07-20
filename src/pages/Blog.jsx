import React, { useState } from "react";
import { Sparkles, Briefcase, Clock, ArrowRight, Zap } from "lucide-react";
import Footer from "../components/Footer";

const TOPIC_TAGS = ["All", "Design", "Engineering", "Marketing", "Customer Success", "Product", "Operations", "Remote", "Internship"];

const TRENDING = [
  { id: 1, tag: "Culture", color: "#1a237e", title: "Life at Zuca: Behind the Scenes", meta: "6 min read • 2.3K views" },
  { id: 2, tag: "Career Tips", color: "#4a148c", title: "5 Tips to Grow Your Career in Beauty Tech", meta: "5 min read • 1.8K views" },
  { id: 3, tag: "Team", color: "#004d40", title: "Meet the Team: Designers Who Care", meta: "4 min read • 1.2K views" },
  { id: 4, tag: "Remote Work", color: "#0d47a1", title: "How We Work Remotely and Stay Connected", meta: "6 min read • 1.5K views" },
  { id: 5, tag: "Diversity", color: "#e65100", title: "Building an Inclusive Beauty Platform", meta: "5 min read • 1.1K views" },
];

const ARTICLES = [
  {
    bg: "#5e35b1",
    topLabel: "Company Updates",
    tag: "Company", tagColor: "#5e35b1",
    title: "Zuca Raises $5M to Expand Beauty Booking Worldwide",
    desc: "We're excited to share how this funding will help us enhance our platform and empower more businesses.",
    author: "Sarah Chen", date: "Jun 1 • 6 min", saves: "2.4K", authorInitial: "SC"
  },
  {
    bg: "#00897b",
    topLabel: "Workplace",
    tag: "Culture", tagColor: "#00897b",
    title: "Our Culture Principles: What Drives Us",
    desc: "The core values that guide our decisions, shape our culture, and keep us moving forward.",
    author: "Aman Mehta", date: "May 28 • 5 min", saves: "1.9K", authorInitial: "AM"
  },
  {
    bg: "#f4511e",
    topLabel: "Career Advice",
    tag: "Career Tips", tagColor: "#f4511e",
    title: "How to Build a Portfolio That Gets You Hired",
    desc: "Practical tips from our hiring team to help you stand out in your next application.",
    author: "Jasmine Thomas", date: "May 26 • 7 min", saves: "3.2K", authorInitial: "JT"
  },
  {
    bg: "#1565c0",
    topLabel: "Life at Zuca",
    tag: "Team", tagColor: "#1565c0",
    title: "A Day in the Life of a Customer Success Manager",
    desc: "Hear from our team about solving problems and creating delightful experiences.",
    author: "Priya R.", date: "May 23 • 6 min", saves: "1.7K", authorInitial: "PR"
  },
  {
    bg: "#afb42b",
    topLabel: "Engineering",
    tag: "Tech", tagColor: "#afb42b",
    title: "Building Scalable Systems for Millions of Users",
    desc: "A look at the technology and architecture behind Zuca's platform.",
    author: "Rohit Kapoor", date: "May 21 • 8 min", saves: "2.8K", authorInitial: "RK"
  },
  {
    bg: "#ad1457",
    topLabel: "Events",
    tag: "Events", tagColor: "#ad1457",
    title: "Zuca Offsite 2026: Moments That Matter",
    desc: "Highlights from our annual offsite filled with learning, fun, and unforgettable memories.",
    author: "Neha Das", date: "May 20 • 5 min", saves: "1.6K", authorInitial: "ND"
  },
];

const TagBadge = ({ text, color }) => (
  <span style={{
    background: color + "15",
    color: color,
    borderRadius: 20,
    padding: "4px 10px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.3,
  }}>{text}</span>
);

export default function Blog() {
  return (
    <div className="bg-white min-h-screen pt-[100px] md:pt-[120px]">
      {/* HERO SECTION */}
      <div className="bg-[#2d1b69] relative px-4 md:px-12 lg:px-[100px] py-16 md:py-24 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Background Gradients */}
        <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5b4fff]/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#3b5bdb]/30 to-transparent blur-3xl pointer-events-none" />

        {/* Left Content */}
        <div className="w-full md:w-[60%] z-10 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-200 mb-6">
            <Sparkles className="w-4 h-4" /> Careers at Zuca
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] mb-6 tracking-tight">
            Build the future<br />of <span className="text-[#8da3ff]">beauty</span> with us
          </h1>
          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
            Join our mission to simplify beauty booking for everyone. Explore career opportunities, learn about our culture, and grow with a passionate team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search roles, teams, or locations..." 
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-blue-200/70 outline-none focus:border-[#8da3ff] transition-colors"
            />
            <button className="bg-[#5b4fff] hover:bg-[#5b4fff]/90 text-white font-bold py-3 px-8 rounded-lg transition-colors text-sm whitespace-nowrap">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {TOPIC_TAGS.map(t => (
              <span key={t} className="bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors rounded-full px-4 py-1.5 text-[11px] font-medium text-white cursor-pointer">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="w-full md:w-[40%] max-w-[400px] z-10 flex flex-col gap-4 mt-8 md:mt-0">
          {/* Top Card */}
          <div className="bg-[#eef2ff] rounded-2xl p-6 shadow-xl relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#3b5bdb]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">We're Hiring!</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">Explore open roles and join our team.</p>
            <div className="text-[#3b5bdb] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-[#3b2b8c]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl cursor-pointer hover:bg-[#3b2b8c] hover:scale-[1.02] transition-all">
            <span className="bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase mb-4 inline-block">
              Culture
            </span>
            <h3 className="text-white font-bold text-lg leading-tight mb-2">
              Life at Zuca: Our People, Our Passion
            </h3>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
              Discover what makes Zuca a great place to work.
            </p>
            <div className="flex items-center gap-1 text-blue-200/60 text-xs">
              <Clock className="w-3.5 h-3.5" /> 5 min read • 2.1K views
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING NOW SECTION */}
      <div className="px-4 md:px-12 lg:px-[100px] py-16 border-b border-gray-100">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Trending Now</h2>
            <p className="text-sm text-gray-500 mt-1">What our community is talking about this week</p>
          </div>
          <button className="text-[#3b5bdb] font-semibold text-sm flex items-center gap-1 hover:underline whitespace-nowrap">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {TRENDING.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all border border-gray-100">
              <div 
                className="h-28 relative flex items-start p-4 transition-transform group-hover:scale-105"
                style={{ backgroundColor: item.color }}
              >
                <span className="absolute top-4 right-4 text-white/50 font-black text-sm">{item.id}</span>
                <span className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-semibold text-white tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 bg-white relative z-10">
                <h4 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#3b5bdb] transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LATEST ARTICLES SECTION */}
      <div className="px-4 md:px-12 lg:px-[100px] py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Latest Articles</h2>
            <p className="text-sm text-gray-500 mt-1">Fresh insights from the Zuca team</p>
          </div>
          <button className="text-[#3b5bdb] font-semibold text-sm flex items-center gap-1 hover:underline whitespace-nowrap">
            See all articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 cursor-pointer group transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="h-40 relative flex flex-col justify-end p-5"
                style={{ backgroundColor: article.bg }}
              >
                <span className="text-white/90 font-semibold text-sm">
                  {article.topLabel}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <TagBadge text={article.tag} color={article.tagColor} />
                </div>
                <h3 className="font-bold text-gray-900 text-[17px] leading-snug mb-3 group-hover:text-[#3b5bdb] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {article.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-bold text-xs">
                      {article.authorInitial}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">{article.author}</div>
                      <div className="text-[11px] text-gray-500">{article.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-semibold">
                    <Zap className="w-3.5 h-3.5 text-red-500 fill-red-500" /> {article.saves}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
