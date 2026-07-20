import React, { useState, useRef } from 'react';
import {
  ArrowRight, ShieldCheck, CreditCard, Sparkles,
  Calendar, MapPin, Star, UserCheck, Smartphone,
  Zap, User, Search, Smile, MessageSquare, Quote
} from 'lucide-react';
import hero from '../assets/hero.png';
import unionBg from '../assets/Union.png';
import group44 from '../assets/Group 44.png';
import appDownloadBanner from '../assets/app-download-banner.png';
import containerPortrait1 from '../assets/Container-portrait 1.png';

export default function Home({ onGetStarted }) {
  const [activeStep, setActiveStep] = useState(1);
  const testimonialSliderRef = useRef(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const handleTestimonialScroll = () => {
    if (testimonialSliderRef.current) {
      const scrollLeft = testimonialSliderRef.current.scrollLeft;
      const scrollAmount = 344; // Card width + gap
      const index = Math.round(scrollLeft / scrollAmount);
      setActiveTestimonialIndex(index);
    }
  };

  const scrollTestimonials = (direction) => {
    if (testimonialSliderRef.current) {
      const scrollAmount = 344; // Card width (320px) + gap (24px)
      testimonialSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      city: "Chennai",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      text: "Found an amazing stylist near me in under 5 minutes. The booking process was super easy and hassle-free!"
    },
    {
      name: "Ananya Rao",
      city: "Bangalore",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      text: "Scheduling appointments has never been easier. I love how I can choose my preferred time and beautician."
    },
    {
      name: "Meera",
      city: "Mumbai",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      text: "The beauty professional arrived on time and was very professional. Absolutely loved the experience!"
    },
    {
      name: "Neha Verma",
      city: "Delhi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      text: "Best platform to book beauty services at home. Very reliable and the customer support is amazing!"
    },
    {
      name: "Kavya Krishnan",
      city: "Hyderabad",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      text: "Loved the salon search feature! Found a premium spa nearby and got a booking slot instantly."
    },
    {
      name: "Rohan Mehta",
      city: "Pune",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      text: "Very professional service. The app is clean, fast, and the booking confirmation takes just a few seconds."
    }
  ];

  const PhoneMockup = () => (
    <div className="w-[250px] h-[460px] bg-slate-950 rounded-[40px] shadow-2xl p-2.5 border-4 border-[#cfa55b] relative flex flex-col justify-between overflow-hidden shrink-0 select-none">
      {/* Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

      {/* Gold Side Buttons */}
      <div className="absolute left-[-2px] top-[100px] w-[2px] h-10 bg-[#cfa55b] rounded-l" />
      <div className="absolute left-[-2px] top-[150px] w-[2px] h-10 bg-[#cfa55b] rounded-l" />
      <div className="absolute right-[-2px] top-[120px] w-[2px] h-14 bg-[#cfa55b] rounded-r" />

      {/* Screen container */}
      <div className="w-full h-full bg-[#1e1e1e] rounded-[30px] overflow-hidden flex flex-col relative text-left">
        {/* Salon Banner B&W */}
        <div className="h-[200px] w-full relative">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale brightness-90 contrast-110"
            alt="Hair Salon combing session"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

          {/* Top Left Back Arrow */}
          <button className="absolute top-7 left-3.5 h-6 w-6 rounded-full bg-white/20 hover:bg-white/45 backdrop-blur-md text-white flex items-center justify-center text-xs font-bold transition-all border border-white/20 select-none cursor-pointer">
            ‹
          </button>

          {/* Top Right Heart Icon */}
          <button className="absolute top-7 right-3.5 h-6 w-6 rounded-full bg-white/20 hover:bg-white/45 backdrop-blur-md text-white flex items-center justify-center text-xs font-bold transition-all border border-white/20 select-none cursor-pointer">
            <svg className="h-3 w-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {/* Bottom Left Available Badge */}
          <span className="absolute bottom-6 left-3 text-[7.8px] font-bold text-white tracking-wide bg-black/40 border border-white/10 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse"></span>
            Available Today
          </span>
        </div>

        {/* Profile Card Overlay */}
        <div className="flex-1 bg-white p-3.5 flex flex-col rounded-t-[20px] -mt-5 relative z-10 border-t border-gray-100 overflow-hidden">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 leading-tight">Sophia Chen</h4>
                <p className="text-[8px] text-gray-400 font-semibold mt-0.5">Senior Hair Stylist • Lumière Studio</p>
              </div>
              <div className="flex items-center gap-0.5 text-[8px] font-bold text-gray-900 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md shrink-0">
                <span className="text-amber-500 text-[10px] leading-none -mt-0.5">★</span> 4.9 <span className="text-gray-400 font-semibold text-[7px]">({248})</span>
              </div>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="text-[7.5px] font-bold text-gray-500 bg-white border border-gray-150 px-2 py-0.5 rounded-full">Balayage</span>
              <span className="text-[7.5px] font-bold text-gray-500 bg-white border border-gray-150 px-2 py-0.5 rounded-full">Color Expert</span>
              <span className="text-[7.5px] font-bold text-gray-500 bg-white border border-gray-150 px-2 py-0.5 rounded-full">Precision Cut</span>
            </div>
          </div>

          {/* Action Tabs Bar */}
          <div className="flex bg-[#f1f5f9] rounded-full p-0.5 mt-3 border border-gray-100 select-none">
            <span className="text-[9.5px] font-extrabold text-center py-1 flex-1 rounded-full bg-[#87d3f8] text-gray-800 shadow-sm cursor-pointer">About</span>
            <span className="text-[9.5px] font-bold text-center py-1 flex-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">Services</span>
            <span className="text-[9.5px] font-bold text-center py-1 flex-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">Reviews</span>
          </div>

          {/* About Tab Content Box (Top Edge) */}
          <div className="mt-3 border border-gray-150/60 rounded-t-2xl p-3 flex-1 bg-gray-50/10 min-h-[50px] border-b-0">
            <div className="h-2 w-16 bg-gray-200 rounded mb-2" />
            <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
            <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-t from-[#ffffff] to-[#E0EBFC]">
        {/* Background Union.png pattern in top-right corner of the section */}
        <img
          src={unionBg}
          alt="Top-right background pattern"
          className="pointer-events-none absolute top-0 right-0 -z-10 w-[320px] h-auto opacity-70"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24">

            {/* Left Content */}
            <div className="w-full lg:w-[48%] space-y-6 text-left">
              <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-blue">
                BEAUTY BOOKING, SIMPLIFIED
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900">
                Beauty Booking,
                <br />
                <span className="text-brand-blue">Simplified</span>
              </h1>

              <p className="max-w-md text-lg text-gray-500">
                Book beauty professionals instantly, schedule appointments for
                later, or visit trusted providers near you.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onGetStarted}
                  className="flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 font-bold text-xs text-white shadow-md transition hover:bg-brand-blue-dark cursor-pointer"
                >
                  Get Started →
                </button>
                <button
                  onClick={onGetStarted}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 font-bold text-xs text-gray-900 transition hover:bg-gray-50 cursor-pointer"
                >
                  Become a Provider <User className="h-3.5 w-3.5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="w-full lg:w-[48%] relative flex justify-center lg:justify-end select-none">
              {/* Circular dot background behind the woman using Union.png */}
              <img
                src={unionBg}
                alt="Dot grid pattern background"
                className="pointer-events-none absolute -z-10 w-[360px] h-auto opacity-100 top-[10%] left-[8%]"
              />

              <img
                src={hero}
                alt="Woman booking a beauty appointment on her phone"
                className="w-[560px] h-[640px] object-contain z-10 relative"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2nd SECTION: THREE WAYS TO BOOK */}
      <section className="pt-14 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-32">
            <h2 className="text-2xl font-extrabold text-brand-blue tracking-widest uppercase">
              Three Ways To Book
            </h2>
          </div>

          <div className="space-y-36">

            {/* Card 1: Instant Booking */}
            <div className="bg-[#E0EBFC] rounded-[32px] p-8 lg:py-0 lg:px-12 border border-blue-100 shadow-sm relative lg:h-[350px]">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full relative z-10 gap-8">
                <div className="w-full lg:w-[50%] text-left space-y-4 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white shrink-0">
                      01
                    </span>
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Instant Booking</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-base max-w-md">
                    Need a service right away? Connect with available beauty professionals nearby.
                  </p>
                </div>

                {/* Mockup Right */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end h-full items-end relative">
                  {/* background dot pattern Group 44 */}
                  <img
                    src={group44}
                    alt="Background pattern"
                    className="pointer-events-none absolute -z-10 w-[360px] h-auto opacity-75 top-[10%] left-[5%]"
                  />
                  {/* Girl cutout image (portrait 1) */}
                  <img
                    src={containerPortrait1}
                    className="w-[378px] h-auto object-contain z-10 bottom-0 relative"
                    alt="Woman booking service" />
                </div>
              </div>
            </div>

            {/* Card 2: Schedule Ahead */}
            <div className="bg-[#E0EBFC] rounded-[32px] p-8 lg:py-0 lg:px-12 border border-blue-100 shadow-sm relative lg:h-[350px]">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full relative z-10 gap-8">
                {/* Mockup Left */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start h-full items-end relative">
                  {/* background dot pattern Group 44 */}
                  <img
                    src={group44}
                    alt="Background pattern"
                    className="pointer-events-none absolute -z-10 w-[360px] h-auto opacity-75 top-[10%] right-[-12%]"
                  />
                  {/* Girl cutout image (portrait 2) */}
                  <img
                    src={containerPortrait1}
                    className="w-[378px] h-auto object-contain z-10 bottom-0 relative"
                    alt="Woman booking service"
                  />
                </div>

                {/* Content Right */}
                <div className="w-full lg:w-[45%] text-left space-y-4 flex flex-col justify-center h-full lg:ml-auto">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white shrink-0">
                      02
                    </span>
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Schedule Ahead</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-base max-w-md">
                    Choose your preferred date and time and book appointments that fit your schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Visit a Provider */}
            <div className="bg-[#E0EBFC] rounded-[32px] p-8 lg:py-0 lg:px-12 border border-blue-100 shadow-sm relative lg:h-[350px]">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full relative z-10 gap-8">
                <div className="w-full lg:w-[50%] text-left space-y-4 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white shrink-0">
                      03
                    </span>
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Visit a Provider</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-base max-w-md">
                    Explore salons and beauty experts near you and book directly at their location.
                  </p>
                </div>

                {/* Mockup Right - aligned to bottom */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end h-full items-end relative">
                  {/* background dot pattern Group 44 */}
                  <img
                    src={group44}
                    alt="Background pattern"
                    className="pointer-events-none absolute -z-10 w-[360px] h-auto opacity-100 top-[10%] left-[0%]"
                  />
                  <img
                    src={containerPortrait1}
                    className="w-[378px] h-auto object-contain z-10 bottom-0 relative"
                    alt="Woman booking service"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3rd SECTION: WHY CHOOSE ZUCA */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-36">
            <h2 className="text-2xl font-extrabold text-brand-blue tracking-widest uppercase">
              Why Choose Zuca
            </h2>
          </div>

          {/* Equal-sized top cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-end">
            {/* Left Card */}
            <div className="bg-[#E0EBFC] rounded-[32px] p-6 md:p-10 text-left border border-blue-100 shadow-sm flex flex-col justify-center h-[340px]">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Everything <br />
                you need for a <br />
                <span className="text-brand-blue italic font-black">better beauty <br />experience</span>
              </h3>
              <p className="text-gray-500 text-sm mt-6 leading-relaxed max-w-sm font-medium">
                Zuca brings together trusted professionals, smart technology, and personalized care — all in one place.
              </p>
            </div>

            {/* Right Card with Cutout Photo */}
            <div className="relative h-[340px] flex items-end justify-center overflow-visible">
              {/* Card Background card shape */}
              <div className="absolute bottom-0 left-0 right-0 h-[340px] bg-[#F9F9FF] rounded-[32px] border border-blue-50 -z-10" />

              {/* Girl2 cutout image popping out of the top */}
              <img
                src="/girl2.png"
                className="absolute bottom-0 right-[5%] h-[390px] w-auto object-contain z-10 pointer-events-none select-none"
                alt="Woman in silk bathrobe looking at smartphone"
              />

              {/* Floating Tag */}
              <div className="absolute top-[40%] left-[12%] bg-white rounded-2xl p-3 shadow-xl border border-gray-100/50 flex items-center gap-3 z-20">
                <div className="bg-blue-50 p-2.5 rounded-xl text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold text-gray-900 leading-tight">Visit a Provider</p>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">Near you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

            {/* Card 1: Trusted Professionals */}
            <div className="bg-[#F0F4FF] rounded-[32px] p-8 text-left border border-blue-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#E0EBFC] text-brand-blue h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Trusted Professionals</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  We verify every professional to ensure quality, safety, and reliability you can count on.
                </p>
              </div>
            </div>

            {/* Card 2: Flexible Scheduling */}
            <div className="bg-[#FFFDF0] rounded-[32px] p-8 text-left border border-amber-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#FEF3C7] text-amber-600 h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Flexible Scheduling</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  Book when and where it suits you. Choose your preferred date and time with ease.
                </p>
              </div>
            </div>

            {/* Card 3: Transparent Pricing */}
            <div className="bg-[#F0FFF4] rounded-[32px] p-8 text-left border border-emerald-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#DCFCE7] text-emerald-600 h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Transparent Pricing</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  Know exactly what you'll pay before you book. No hidden charges, ever.
                </p>
              </div>
            </div>

            {/* Card 4: Secure Payments */}
            <div className="bg-[#F0F9FF] rounded-[32px] p-8 text-left border border-sky-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#E0F2FE] text-blue-600 h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Secure Payments</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  Enjoy safe and secure transactions with multiple trusted payment options.
                </p>
              </div>
            </div>

            {/* Card 5: Personalized Experience */}
            <div className="bg-[#FFF5F5] rounded-[32px] p-8 text-left border border-rose-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#FFE4E6] text-rose-500 h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <User className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Personalized Experience</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  Get recommendations and services tailored to your preferences and style.
                </p>
              </div>
            </div>

            {/* Card 6: Seamless Booking */}
            <div className="bg-[#F5F3FF] rounded-[32px] p-8 text-left border border-purple-50/50 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 lg:w-[392px] lg:h-[246px] flex flex-col justify-center">
              <div className="bg-[#EDE9FE] text-purple-600 h-11 w-11 rounded-2xl flex items-center justify-center shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Seamless Booking</h3>
                <p className="text-gray-500 text-md leading-relaxed font-medium">
                  From discovery to appointment, we make every step simple and hassle-free.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Banner: Everything in One Place */}
          <div className="mt-8 bg-gradient-to-r from-[#FFFDF0] via-[#F4F3FF] to-[#E0EBFC] rounded-[32px] p-6 border border-blue-50/50 flex items-center gap-6 text-left shadow-sm">
            <div className="bg-[#5f39f8] text-white font-extrabold h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 text-xl shadow-lg shadow-purple-600/20">
              Z
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-base">Everything in One Place</h4>
              <p className="text-gray-500 text-md font-medium leading-relaxed">
                Discover, book, pay, and manage your appointments — everything you need, all in one seamless experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4th SECTION: Book in 4 simple steps */}
      <section className="pt-20 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-md font-bold text-[#1d4ed8] tracking-widest uppercase">
            How It Works
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Book in <span className="text-[#1d4ed8] font-bold">4 simple steps</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 relative">
            {/* Horizontal connecting line for desktop */}
            <div className="hidden lg:block absolute top-[104px] left-[12%] right-[12%] h-[1px] border-t-2 border-dashed border-gray-200 z-0 pointer-events-none" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 relative group z-10">
              <div className="relative">
                <div className="h-28 w-28 rounded-full border border-gray-150 flex items-center justify-center bg-white shadow-sm z-10 relative">
                  <Search className="h-8 w-8 text-[#1d4ed8]" />
                </div>
                {/* Step number badge */}
                <span className="absolute top-0 left-0 bg-[#1d4ed8] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white z-20 shadow-sm">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Choose Your Service</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] font-medium">
                Pick the service you need and tell us your preferences.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 relative group z-10">
              <div className="relative">
                <div className="h-28 w-28 rounded-full border border-gray-150 flex items-center justify-center bg-white shadow-sm z-10 relative">
                  <User className="h-8 w-8 text-[#1d4ed8]" />
                </div>
                <span className="absolute top-0 left-0 bg-[#1d4ed8] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white z-20 shadow-sm">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Select a Professional</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] font-medium">
                Browse and choose from trusted beauty experts near you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 relative group z-10">
              <div className="relative">
                <div className="h-28 w-28 rounded-full border border-gray-150 flex items-center justify-center bg-white shadow-sm z-10 relative">
                  <Calendar className="h-8 w-8 text-[#1d4ed8]" />
                </div>
                <span className="absolute top-0 left-0 bg-[#1d4ed8] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white z-20 shadow-sm">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Book & Confirm</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] font-medium">
                Choose your date and time, review the details and confirm your booking.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4 relative group z-10">
              <div className="relative">
                <div className="h-28 w-28 rounded-full border border-gray-150 flex items-center justify-center bg-white shadow-sm z-10 relative">
                  <Smile className="h-8 w-8 text-[#1d4ed8]" />
                </div>
                <span className="absolute top-0 left-0 bg-[#1d4ed8] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white z-20 shadow-sm">
                  4
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Relax & Enjoy</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] font-medium">
                Sit back, relax and enjoy your professional beauty experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4th SECTION: Everything you need for every beauty moment */}
      <section className="pt-20 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center">
            <button className="border border-purple-100 hover:border-purple-200 text-gray-500 font-bold text-[10px] py-1.5 px-4 rounded-full flex items-center gap-1.5 cursor-pointer bg-[#faf5ff] shadow-sm uppercase tracking-wider">
              <Sparkles className="h-3 w-3 text-[#5E3BDB]" /> Why Choose Zuca
            </button>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Everything you need for every <br />
            <span className="text-[#5E3BDB]">beauty moment</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            From last-minute appointments to planned self-care sessions, Zuca helps you book beauty services the way you want.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">

            {/* Card 1: Instant Booking */}
            <div className="bg-[#F3E8FF] rounded-[32px] p-8 hover:shadow-md transition-all duration-300 text-left relative flex flex-col justify-between h-[410px] group">
              <button className="absolute top-8 right-8 h-9 w-9 rounded-full bg-white text-gray-900 border border-gray-100 flex items-center justify-center hover:scale-105 shadow-sm transition-transform cursor-pointer">
                <ArrowRight className="h-4 w-4 text-gray-700" />
              </button>
              <div className="space-y-5">
                <h3 className="text-[28px] font-extrabold text-gray-900 pt-2 leading-tight tracking-tight">
                  Instant <br />Booking
                </h3>
                <div className="h-[150px] w-full rounded-[140px_70px_120px_80px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Makeup session"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-medium pt-3">
                Need a makeup artist, hairstylist, or beauty professional right now? Connect with available experts
              </p>
            </div>

            {/* Card 2: Planned Self-Care */}
            <div className="bg-[#ECFDF5] rounded-[32px] p-8 hover:shadow-md transition-all duration-300 text-left relative flex flex-col justify-between h-[410px] group">
              <button className="absolute top-8 right-8 h-9 w-9 rounded-full bg-white text-gray-900 border border-gray-100 flex items-center justify-center hover:scale-105 shadow-sm transition-transform cursor-pointer">
                <ArrowRight className="h-4 w-4 text-gray-700" />
              </button>
              <div className="space-y-5">
                <h3 className="text-[28px] font-extrabold text-gray-900 pt-2 leading-tight tracking-tight">
                  Planned <br />Self-Care
                </h3>
                <div className="h-[150px] w-full rounded-[60px_140px_80px_120px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Planned care"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-medium pt-3">
                Need a makeup artist, hairstylist, or beauty professional right now? Connect with available experts
              </p>
            </div>

            {/* Card 3: Find Salons */}
            <div className="bg-[#EFF6FF] rounded-[32px] p-8 hover:shadow-md transition-all duration-300 text-left relative flex flex-col justify-between h-[410px] group">
              <button className="absolute top-8 right-8 h-9 w-9 rounded-full bg-white text-gray-900 border border-gray-100 flex items-center justify-center hover:scale-105 shadow-sm transition-transform cursor-pointer">
                <ArrowRight className="h-4 w-4 text-gray-700" />
              </button>
              <div className="space-y-5">
                <h3 className="text-[28px] font-extrabold text-gray-900 pt-2 leading-tight tracking-tight">
                  Find <br />Salons
                </h3>
                <div className="h-[150px] w-full rounded-[140px_70px_120px_80px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Salon mirrors"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-medium pt-3">
                Need a makeup artist, hairstylist, or beauty professional right now? Connect with available experts
              </p>
            </div>

            {/* Card 4: Verified Professionals */}
            <div className="bg-[#FFF1F2] rounded-[32px] p-8 hover:shadow-md transition-all duration-300 text-left relative flex flex-col justify-between h-[410px] group">
              <button className="absolute top-8 right-8 h-9 w-9 rounded-full bg-white text-gray-900 border border-gray-100 flex items-center justify-center hover:scale-105 shadow-sm transition-transform cursor-pointer">
                <ArrowRight className="h-4 w-4 text-gray-700" />
              </button>
              <div className="space-y-5">
                <h3 className="text-[28px] font-extrabold text-gray-900 pt-2 leading-tight tracking-tight">
                  Verified <br />Professionals
                </h3>
                <div className="h-[150px] w-full rounded-[60px_140px_80px_120px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Hairstylist styling hair"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-medium pt-3">
                Need a makeup artist, hairstylist, or beauty professional right now? Connect with available experts
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5th SECTION: APP DOWNLOAD BANNER */}
      <section className="bg-[#E0EBFC] py-14 mb-20 relative overflow-hidden">
        {/* Large dashed background circles */}
        <div className="absolute right-[35%] top-[-10%] w-[500px] h-[500px] border-[2px] border-dashed border-blue-300/40 rounded-full pointer-events-none -z-10" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[550px] h-[550px] border-[2px] border-dashed border-blue-300/40 rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">

            {/* Left Content */}
            <div className="text-left space-y-6 max-w-md z-10">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Your Beauty. <span className="text-brand-blue">Your Way.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-medium">
                Whether it's now or later, Zuca makes beauty booking simple and convenient.
              </p>
              {/* App badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-block hover:scale-[1.02] transition-transform">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    className="h-11"
                    alt="Download on App Store"
                  />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-block hover:scale-[1.02] transition-transform">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    className="h-11"
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[537.5px] lg:h-[382.5px] z-10 shrink-0 w-full max-w-[320px] lg:max-w-none flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
              <img
                src={appDownloadBanner}
                className="w-full h-full object-contain pointer-events-none select-none block"
                alt="Smiling woman with serene face touching face"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6th SECTION: TESTIMONIALS */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center">
              <button className="border border-blue-100 hover:border-blue-200 text-brand-blue font-bold text-[10px] py-1.5 px-4 rounded-full flex items-center gap-1.5 cursor-pointer bg-[#f0f7ff] shadow-sm uppercase tracking-wider">
                <MessageSquare className="h-3.5 w-3.5 text-brand-blue fill-brand-blue/10" /> Testimonials
              </button>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Loved by thousands <br />
              of <span className="text-brand-blue">beauty clients</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed font-medium">
              Real experiences from people who book and trust Zuca for their beauty needs.
            </p>
            <div className="flex items-center justify-center gap-2 pt-1 text-sm font-semibold">
              <span className="flex text-amber-500">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </span>
              <span className="text-gray-900 font-bold ml-1">4.9/5 Rating</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium">Based on 10,000+ bookings</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* Left Column: Title & Navigation */}
            <div className="text-left flex flex-col justify-center space-y-4 lg:pr-4 lg:w-[25%] shrink-0">
              <Quote className="h-10 w-10 text-gray-900 fill-gray-900 transform rotate-180" />
              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                What our <br />
                clients are <br />
                saying
              </h3>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => scrollTestimonials('left')}
                  className="h-9 w-9 rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer select-none"
                >
                  <ArrowRight className="h-4 w-4 transform rotate-180" />
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 mx-1">
                  {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (testimonialSliderRef.current) {
                          testimonialSliderRef.current.scrollTo({
                            left: i * 344,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonialIndex === i ? 'w-5 bg-brand-blue' : 'w-2 bg-gray-200 hover:bg-gray-300'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scrollTestimonials('right')}
                  className="h-9 w-9 rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer select-none"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Sliding Cards Row */}
            <div className="lg:w-[75%] overflow-hidden relative">
              <div
                ref={testimonialSliderRef}
                onScroll={handleTestimonialScroll}
                className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-smooth pb-4"
              >
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="snap-start shrink-0 w-[295px] md:w-[320px] bg-white rounded-[32px] p-6 border border-gray-150/70 hover:shadow-md transition-all duration-300 text-left flex flex-col h-[320px]"
                  >
                    <div className="flex-1 space-y-4">
                      <Quote className="h-6 w-6 text-brand-blue fill-brand-blue/10 transform rotate-180" />
                      <p className="text-gray-600 text-s leading-relaxed font-regular">
                        {item.text.split(' ').length > 18
                          ? item.text.split(' ').slice(0, 18).join(' ') + '...'
                          : item.text}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-50 mt-auto">
                      <div className="flex gap-0.5 text-brand-blue">
                        <Star className="h-3 w-3 fill-current text-current" />
                        <Star className="h-3 w-3 fill-current text-current" />
                        <Star className="h-3 w-3 fill-current text-current" />
                        <Star className="h-3 w-3 fill-current text-current" />
                        <Star className="h-3 w-3 fill-current text-current" />
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          className="h-10 w-10 rounded-full object-cover border border-blue-50"
                          alt={item.name}
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold mt-0.5">{item.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8th SECTION: CTA BANNER */}
      <section className="pt-8 pb-4 bg-white">
        <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#DBE9FB]  pb-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-12 relative z-10">

            {/* Top part: Text + Buttons stacked vertically */}
            <div className="flex flex-col text-left space-y-6 relative z-10 max-w-3xl">
              {/* Star + Tag */}
              <div className="flex items-center gap-2 text-[11px] font-extrabold text-[#2563eb] tracking-widest uppercase">
                <span>★</span> GET STARTED WITH ZUCA
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 tracking-tight leading-[1.1]">
                Your beauty, your schedule, <br />
                <span className="text-[#2563eb]">your way.</span>
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed font-medium">
                Book instantly, schedule ahead, or visit top salons and professionals near you. Beauty booking made simple.
              </p>

              {/* Buttons below the description */}
              <div className="flex flex-row gap-4 pt-2">
                <button
                  onClick={onGetStarted}
                  className="bg-[#2563eb] hover:bg-[#2563eb]/95 text-white px-8 py-3.5 rounded-full font-extrabold text-xs transition-all duration-300 shadow-md shadow-blue-600/10 hover:scale-[1.01] cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  Book Now <span>→</span>
                </button>
                <button
                  onClick={onGetStarted}
                  className="border border-[#2563eb]/30 hover:bg-blue-50/30 text-[#2563eb] px-8 py-3.5 rounded-full font-extrabold text-xs transition-all duration-300 cursor-pointer text-center bg-white flex items-center justify-center gap-1.5"
                >
                  Explore Services <span>→</span>
                </button>
              </div>
            </div>

            {/* Bottom part: 3 values bullets centered */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 pt-10 border-t border-blue-100/50">
              {/* Bullet 1 */}
              <div className="flex items-center gap-3 w-fit">
                <div className="bg-[#EBF3FF] text-[#2563eb] h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 fill-[#2563eb]/10" />
                </div>
                <div className="text-left">
                  <p className="text-[16px] font-bold text-gray-900">Instant Booking</p>
                  <p className="text-[14px] text-gray-400 font-medium mt-0.5">Book in minutes</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-center gap-3 w-fit">
                <div className="bg-[#EBF3FF] text-[#2563eb] h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5 fill-[#2563eb]/10" />
                </div>
                <div className="text-left">
                  <p className="text-[16px] font-bold text-gray-900">Trusted Professionals</p>
                  <p className="text-[14px] text-gray-400 font-medium mt-0.5">Verified & reviewed</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-center gap-3 w-fit">
                <div className="bg-[#EBF3FF] text-[#2563eb] h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 fill-[#2563eb]/10" />
                </div>
                <div className="text-left">
                  <p className="text-[16px] font-bold text-gray-900">Secure & Easy</p>
                  <p className="text-[14px] text-gray-400 font-medium mt-0.5">Safe payments</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
