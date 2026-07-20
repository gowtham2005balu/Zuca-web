import React, { useState } from 'react';
import { Search, BookOpen, Calendar, User, CreditCard, Shield, Headphones, ChevronDown, Phone } from 'lucide-react';

export default function HelpCenter({ onGetStarted }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const topics = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#4f46e5]" />,
      title: "Getting Started",
      description: "Learn the basics of using Zuca."
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#4f46e5]" />,
      title: "Bookings",
      description: "Manage appointments, schedules and more."
    },
    {
      icon: <User className="w-6 h-6 text-[#4f46e5]" />,
      title: "Providers",
      description: "Information for beauty professionals."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#4f46e5]" />,
      title: "Payments",
      description: "Billing, refunds and payment support."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4f46e5]" />,
      title: "Account & Security",
      description: "Account settings and security help."
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#4f46e5]" />,
      title: "Troubleshooting",
      description: "Fix common issues and errors."
    }
  ];

  const faqs = [
    { id: 1, question: "How do I book an appointment?", answer: "You can book an appointment by navigating to the Home page, selecting your desired service or provider, and picking an available time slot." },
    { id: 2, question: "What is your cancellation policy?", answer: "Cancellations made at least 24 hours in advance are fully refunded. Late cancellations may be subject to a fee." },
    { id: 3, question: "How do I become a provider on Zuca?", answer: "Click the 'Providers' link to learn more, then click the 'Join the Network' button to start the onboarding process. Our team will review your application within 48 hours." },
    { id: 4, question: "Is my payment information secure?", answer: "Yes, we use industry-standard encryption and partner with Stripe to ensure your payment details are completely secure." }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <div className="pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <div className="bg-[#f0f5ff] text-[#4f46e5] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase border border-[#4f46e5]/10 shadow-sm">
            Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#1a1a2e] leading-[1.15] mb-6 tracking-tight">
            How can we <br className="hidden md:block" />
            <span className="text-[#4f46e5]">help you</span> today?
          </h1>
          <p className="text-gray-600 text-[15px] sm:text-[17px] mb-10 max-w-lg leading-relaxed font-medium">
            Find answers, step-by-step guides, and support for everything related to Zuca.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-md relative flex items-center bg-white border-2 border-gray-100 hover:border-gray-200 focus-within:border-[#4f46e5]/40 focus-within:ring-4 focus-within:ring-[#4f46e5]/10 rounded-2xl shadow-sm p-1.5 transition-all duration-300">
            <div className="pl-4 pr-3 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for articles, topics or keywords..."
              className="flex-1 bg-transparent border-none outline-none text-[15px] text-gray-700 py-3 px-1 w-full font-medium placeholder:font-normal"
            />
            <button className="bg-[#4f46e5] hover:bg-[#4338ca] hover:shadow-md hover:shadow-[#4f46e5]/20 text-white font-bold py-3 px-7 rounded-xl transition-all duration-300 text-sm h-full whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Right Content - 3D Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4f46e5]/5 to-transparent rounded-full blur-3xl -z-10" />
          <img
            src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784524950/194aa3c798cccf8e39c31e3f0fe7de1bfa6f206d_qgsd6u.png"
            alt="3D Help Center Illustration"
            className="w-full max-w-[520px] object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Browse By Topic Section */}
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h3 className="text-[#4f46e5] text-[11px] font-black tracking-[0.2em] uppercase mb-3">
          Browse by Topic
        </h3>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] mb-14 tracking-tight">
          What can we help you with?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-start p-7 border border-gray-100 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#4f46e5]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f5ff] text-[#4f46e5] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300 shadow-sm">
                {topic.icon}
              </div>
              <h4 className="font-bold text-[#1a1a2e] text-[15px] mb-2.5">{topic.title}</h4>
              <p className="text-gray-500 text-[13px] text-center leading-relaxed font-medium">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#4f46e5] text-[11px] font-black tracking-[0.2em] uppercase mb-3">
            Quick Answers
          </h3>
          <h2 className="text-3xl font-black text-[#1a1a2e] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-[#4f46e5]/20 hover:shadow-md hover:shadow-[#4f46e5]/5 transition-all duration-300 bg-white"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-transparent cursor-pointer group"
              >
                <span className="font-bold text-[#1a1a2e] text-[15px] group-hover:text-[#4f46e5] transition-colors">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === faq.id ? 'bg-[#4f46e5] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-[#f0f5ff] group-hover:text-[#4f46e5]'}`}>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {activeFaq === faq.id && (
                <div className="px-6 pb-6 pt-0 bg-transparent">
                  <p className="text-gray-600 text-[15px] leading-relaxed font-medium border-t border-gray-50 pt-4 mt-1">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support Banner */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
        <div className="bg-[#1a1a2e] rounded-[32px] p-10 sm:p-12 text-center relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#4f46e5] opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#c8b8ff] opacity-10 blur-3xl"></div>
          
          <div className="text-left text-white max-w-lg relative z-10">
            <h2 className="text-3xl font-black mb-3 tracking-tight">Still need help?</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
              Our dedicated support team is always ready to assist you with any questions or issues.
            </p>
          </div>
          
          <button className="bg-[#4f46e5] hover:bg-white hover:text-[#4f46e5] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer flex items-center gap-2.5 shrink-0 relative z-10">
            <Phone className="h-4 w-4" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
