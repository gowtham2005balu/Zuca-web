import React from 'react';
import { Search, BookOpen, Calendar, User, CreditCard, Shield, Headphones, FileText, ChevronRight, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function HelpCenter({ onGetStarted }) {
  const topics = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Getting Started",
      description: "Learn the basics of using Zuca."
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Bookings",
      description: "Manage appointments, schedules and more."
    },
    {
      icon: <User className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Providers",
      description: "Information for beauty professionals."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Payments",
      description: "Billing, refunds and payment support."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Account & Security",
      description: "Account settings and security help."
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#3b5bdb]" />,
      title: "Troubleshooting",
      description: "Fix common issues and errors."
    }
  ];

  const popularArticles = [
    {
      title: "How to book an appointment on Zuca",
      description: "A step-by-step guide to booking your favorite services."
    },
    {
      title: "How to reschedule or cancel a booking",
      description: "Learn how to modify or cancel your appointments easily."
    },
    {
      title: "How payments and refunds work",
      description: "Everything you need to know about payments and refunds."
    },
    {
      title: "How to become a provider on Zuca",
      description: "Join our community of beauty professionals."
    },
    {
      title: "I can't log in to my account. What should I do?",
      description: "Troubleshoot login issues quickly."
    }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <div className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            How can we <br className="hidden md:block" />
            <span className="text-[#3b5bdb]">help you</span> today?
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
            Find answers, step-by-step guides, and support for everything related to Zuca.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-md relative flex items-center bg-white border border-gray-200 rounded-xl shadow-sm p-1">
            <div className="pl-3 pr-2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for articles, topics or keywords..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 py-3 px-1 w-full"
            />
            <button className="bg-[#3b5bdb] hover:bg-[#3b5bdb]/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm h-full whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Right Content - 3D Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <img
            src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784524950/194aa3c798cccf8e39c31e3f0fe7de1bfa6f206d_qgsd6u.png"
            alt="3D Help Center Illustration"
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Browse By Topic Section */}
      <div className="pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h3 className="text-[#3b5bdb] text-xs font-bold tracking-widest uppercase mb-4">
          Browse by Topic
        </h3>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-12">
          What can we help you with?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-start p-6 border border-gray-100 rounded-[20px] hover:shadow-xl hover:border-transparent transition-all duration-300 cursor-pointer group bg-white shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f4ff] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-[15px] mb-2">{topic.title}</h4>
              <p className="text-gray-500 text-[13px] text-center leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles & Support Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Popular Articles */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-[#3b5bdb] text-xs font-bold tracking-widest uppercase mb-2">
                Popular Articles
              </h3>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Top articles people are reading
              </h2>
            </div>
            <button className="text-[#3b5bdb] font-semibold text-sm flex items-center hover:underline whitespace-nowrap cursor-pointer">
              View all articles <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
            {popularArticles.map((article, index) => (
              <div 
                key={index} 
                className={`p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group ${
                  index !== popularArticles.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5 text-[#3b5bdb]" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[15px] mb-1 group-hover:text-[#3b5bdb] transition-colors">{article.title}</h4>
                    <p className="text-gray-500 text-[13px]">{article.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#3b5bdb] flex-shrink-0 ml-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Still need help? */}
        <div className="w-full lg:w-[400px] bg-[#f8f9fc] rounded-[24px] p-8 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#eef2ff] flex items-center justify-center mb-6">
            <Headphones className="w-7 h-7 text-[#3b5bdb]" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-3">Still need help?</h3>
          <p className="text-gray-500 text-[15px] mb-8 max-w-[250px] leading-relaxed">
            Our support team is here for you.
          </p>

          <div className="w-full flex flex-col gap-3 mb-8">
            {/* Contact Options */}
            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow text-left group cursor-pointer border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-[#f0f4ff] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#3b5bdb]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#3b5bdb] transition-colors">Chat with us</h4>
                <p className="text-gray-500 text-xs mt-0.5">Start a conversation</p>
              </div>
            </button>

            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow text-left group cursor-pointer border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-[#f0f4ff] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-[#3b5bdb]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#3b5bdb] transition-colors">Email us</h4>
                <p className="text-gray-500 text-xs mt-0.5">support@zuca.com</p>
              </div>
            </button>

            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow text-left group cursor-pointer border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-[#f0f4ff] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-[#3b5bdb]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#3b5bdb] transition-colors">Call us</h4>
                <p className="text-gray-500 text-xs mt-0.5">+91 98765 43210</p>
              </div>
            </button>
          </div>

          <p className="text-gray-600 font-medium text-[13px] mt-auto">
            Response time: Within 24 hours
          </p>
        </div>

      </div>

    </div>
  );
}
