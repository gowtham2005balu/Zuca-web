import React, { useState } from "react";
import { Search, ChevronDown, ChevronRight, HelpCircle, MessageCircle, FileText, Phone } from "lucide-react";

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, question: "How do I book an appointment?", answer: "You can book an appointment by navigating to the Home page, selecting your desired service or provider, and picking an available time slot." },
    { id: 2, question: "What is your cancellation policy?", answer: "Cancellations made at least 24 hours in advance are fully refunded. Late cancellations may be subject to a fee." },
    { id: 3, question: "How do I become a provider on Zuca?", answer: "Click the 'Become a Provider' button on our homepage to start the onboarding process. Our team will review your application within 48 hours." },
    { id: 4, question: "Is my payment information secure?", answer: "Yes, we use industry-standard encryption and partner with Stripe to ensure your payment details are completely secure." }
  ];

  return (
    <div className="w-full bg-white pb-20">
      <section className="pt-28 pb-16 bg-gradient-to-t from-white to-[#E0EBFC] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold text-[#1d4ed8] uppercase tracking-widest block mb-4">
            HELP CENTER
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            How can we help <span className="text-[#1d4ed8]">you?</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Search our knowledge base or browse categories below to find answers to your questions.
          </p>
          <div className="mt-10 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 focus:border-[#1d4ed8] bg-white font-medium shadow-sm"
            />
            <Search className="absolute left-5 top-4 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-md transition-all border border-gray-100 cursor-pointer">
            <div className="bg-blue-100 text-[#1d4ed8] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Getting Started</h3>
            <p className="text-sm text-gray-500">Learn the basics of using Zuca.</p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-md transition-all border border-gray-100 cursor-pointer">
            <div className="bg-blue-100 text-[#1d4ed8] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Account & Profile</h3>
            <p className="text-sm text-gray-500">Manage your settings and details.</p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-md transition-all border border-gray-100 cursor-pointer">
            <div className="bg-blue-100 text-[#1d4ed8] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Billing & Payments</h3>
            <p className="text-sm text-gray-500">Information about transactions.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === faq.id && (
                <div className="px-6 pb-5 pt-0 bg-white">
                  <p className="text-gray-500 text-sm font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-24">
        <div className="bg-[#1d4ed8] rounded-3xl p-10 text-center relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left text-white max-w-lg">
            <h2 className="text-3xl font-black mb-3">Still need help?</h2>
            <p className="text-blue-100 text-sm font-medium">
              Our support team is always ready to help you with any questions or issues you might have.
            </p>
          </div>
          <button className="bg-white text-[#1d4ed8] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-black/10 cursor-pointer flex items-center gap-2 shrink-0">
            <Phone className="h-4 w-4" />
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
