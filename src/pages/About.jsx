import React from 'react';
import { Shield, Zap, CreditCard, Heart, ArrowRight, Sparkles } from 'lucide-react';
import heroAbout from '../assets/hero-about.png';

export default function About({ onGetStarted }) {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      desc: 'Verified professionals and genuine reviews ensure you are in safe, experienced hands every single time.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      icon: Zap,
      title: 'Convenience',
      desc: 'Book beauty services in minutes. Home visits or salon appointments at the tap of a button.',
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      icon: CreditCard,
      title: 'Transparency',
      desc: 'Clear, upfront pricing with zero hidden fees. Your card is only charged once the service is complete.',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      icon: Heart,
      title: 'Community',
      desc: 'Supporting local independent beauty professionals to scale their business while pampering clients.',
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-white gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary uppercase tracking-wider">
                About Zuca
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-none">
                Beauty booking, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                  simplified.
                </span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Zuca helps people discover, book, and enjoy beauty services with trusted professionals—whether at home or at a salon.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onGetStarted}
                  className="bg-brand-primary hover:bg-brand-primary/95 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={onGetStarted}
                  className="border-2 border-brand-primary/20 hover:border-brand-primary hover:bg-brand-light/30 text-brand-primary px-8 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer"
                >
                  Become a Provider
                </button>
              </div>
            </div>

            {/* Right Phone Mockups */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px] flex justify-center lg:justify-end">
                <img
                  src={heroAbout}
                  className="w-full max-w-[340px] md:max-w-[400px] h-auto object-contain z-10 relative"
                  alt="About Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story: Why We Built Zuca */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">

              {/* Left Column Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold text-brand-primary uppercase tracking-widest block">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
                  Why We <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                    Built Zuca
                  </span>
                </h2>

                <p className="text-lg font-semibold text-brand-dark leading-relaxed">
                  Finding beauty services shouldn't be complicated.
                </p>

                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>
                    We created Zuca to make booking beauty appointments simple, reliable, and convenient for everyone. We noticed clients struggled with calling back and forth, dealing with unvetted stylists, and transparent billing issues.
                  </p>
                  <p>
                    Whether you need an instant appointment, want to schedule weeks ahead, or prefer visiting a certified local salon, Zuca brings everything together in one place. We empower independent professionals with business tools while delivering top-tier experiences for clients.
                  </p>
                </div>
              </div>

              {/* Right Column Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-[320px] object-cover"
                    alt="Woman holding smartphone and smiling"
                  />
                  <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <p className="text-xs font-extrabold text-brand-primary uppercase tracking-widest">
              Core Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Our Core Values
            </h2>
            <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-bg rounded-3xl p-8 border border-gray-100 shadow-sm text-left flex flex-col justify-between h-[280px] hover:border-brand-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-2 mt-6">
                    <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Boxed Banner */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl p-10 md:p-16 text-white text-center space-y-6 relative overflow-hidden shadow-xl shadow-brand-primary/10">
            {/* Background vector lines */}
            <div className="absolute inset-0 bg-grid-white/[0.03] -z-10" />

            <div className="inline-flex p-3 bg-white/10 rounded-2xl backdrop-blur-md mb-2">
              <Sparkles className="h-6 w-6 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Your beauty. Your schedule. Your way.
            </h2>

            <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">
              Join thousands of clients and beauty professionals using Zuca today to transform how beauty services are discovered and delivered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full max-w-xs sm:max-w-md mx-auto">
              <button
                onClick={onGetStarted}
                className="bg-white hover:bg-brand-light text-brand-primary px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow hover:scale-[1.02] cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={onGetStarted}
                className="border-2 border-white/20 hover:border-white text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
              >
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
