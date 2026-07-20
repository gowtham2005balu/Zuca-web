import React from 'react';
import { Briefcase, ArrowRight, PlayCircle, Users, Zap, Sprout, Heart, Gift, PenTool, Code2, Headphones, Megaphone, BarChart2, MapPin } from 'lucide-react';

export default function Providers() {
  const providerPerks = [
    {
      icon: Users,
      title: 'People First',
      desc: 'Work with kind, supportive, and passionate people.'
    },
    {
      icon: Zap,
      title: 'Make an Impact',
      desc: 'Your work helps thousands of people look and feel their best.'
    },
    {
      icon: Sprout,
      title: 'Grow Together',
      desc: 'Learn, grow and build your career with us.'
    },
    {
      icon: Heart,
      title: 'Flexible & Balanced',
      desc: 'We respect your time and promote a healthy work-life balance.'
    },
    {
      icon: Gift,
      title: 'Perks & Benefits',
      desc: 'Enjoy exciting perks, exclusive discounts and more.'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'UI/UX Designer',
      dept: 'Design',
      type: 'Full-time',
      location: 'Bangalore, India',
      desc: 'Design beautiful and intuitive experiences for our web and mobile platforms.',
      icon: PenTool
    },
    {
      id: 2,
      title: 'Frontend Developer',
      dept: 'Engineering',
      type: 'Full-time',
      location: 'Bangalore, India',
      desc: 'Build fast, responsive and scalable features that power Zuca.',
      icon: Code2
    },
    {
      id: 3,
      title: 'Customer Support Specialist',
      dept: 'Support',
      type: 'Full-time',
      location: 'Bangalore, India',
      desc: 'Help our users and partners with care, empathy and quick solutions.',
      icon: Headphones
    },
    {
      id: 4,
      title: 'Marketing Executive',
      dept: 'Marketing',
      type: 'Full-time',
      location: 'Bangalore, India',
      desc: 'Create and execute campaigns that help more people discover Zuca.',
      icon: Megaphone
    },
    {
      id: 5,
      title: 'Product Manager',
      dept: 'Product',
      type: 'Full-time',
      location: 'Bangalore, India',
      desc: 'Drive product strategy and build solutions our users will love.',
      icon: BarChart2
    }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6 relative z-10">
              <span className="inline-block bg-[#f0f5ff] text-[#4f46e5] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                PROVIDERS AT ZUCA
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#1a1a2e] tracking-tight leading-[1.1]">
                Grow your <br />
                <span className="text-[#4f46e5]">beauty</span> business with us
              </h1>
              <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-[420px] font-medium">
                At Zuca, we're on a mission to empower beauty professionals with simple, seamless booking tools.<br/><br/>
                Join a passionate network that's transforming the way people look good and feel great.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#join-network"
                  className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
                >
                  Join the Network
                  <ArrowRight size={18} />
                </a>
                <button 
                  onClick={() => alert("Learn more about joining Zuca's provider network!")}
                  className="border-[1.5px] border-indigo-200 text-[#4f46e5] hover:bg-indigo-50 px-7 py-3 rounded-full font-bold text-sm transition-all bg-white flex items-center justify-center gap-2 shadow-sm"
                >
                  Learn More
                  <PlayCircle size={18} className="text-[#4f46e5]" />
                </button>
              </div>
            </div>

            {/* Right Side Collage */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
              {/* Dot Pattern Background */}
              <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[radial-gradient(#dbeafe_3px,transparent_3px)] [background-size:16px_16px] opacity-70 rounded-full" />
              <div className="absolute -right-8 -top-12 w-48 h-48 bg-[radial-gradient(#dbeafe_3px,transparent_3px)] [background-size:16px_16px] opacity-70 rounded-full" />
              
              {/* Image Container */}
              <div className="relative w-full max-w-[540px] z-10">
                <img 
                  src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784529133/6ba4c334dbeaf4fb53b5c034758c8b5c965aff2c_hupv9p.png" 
                  className="w-full h-auto object-cover rounded-3xl shadow-xl border border-gray-100"
                  alt="Zuca providers team collaborating"
                />
                
                {/* Floating Briefcase Icon */}
                <div className="absolute -top-6 left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center justify-center">
                  <Briefcase size={28} className="text-[#4f46e5]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY YOU'LL LOVE IT HERE Section */}
      <section className="py-24 bg-[#fafafa]/40 border-t border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black text-[#4f46e5] tracking-[0.2em] uppercase mb-4">
              WHY YOU'LL LOVE IT HERE
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] tracking-tight">
              More than a job. A place to grow.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {providerPerks.map((perk, idx) => {
              const IconComponent = perk.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] text-center hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
                >
                  <div className="bg-[#f0f5ff] text-[#4f46e5] h-[52px] w-[52px] rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-[22px] w-[22px]" />
                  </div>
                  <h4 className="text-[15px] font-bold text-[#1a1a2e] mb-3">{perk.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS Section */}
      <section className="py-24 bg-[#f8fafe] border-t border-gray-100/50">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <div>
              <h2 className="text-[11px] font-black text-[#4f46e5] tracking-[0.2em] uppercase mb-3">
                OPEN POSITIONS
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a2e] tracking-tight">
                Find your next opportunity
              </h3>
            </div>
            <a href="#view-all" className="text-[#4f46e5] text-[13px] font-bold flex items-center gap-1.5 hover:text-[#4338ca] transition-colors mt-4 sm:mt-0">
              View all openings <ArrowRight size={15} />
            </a>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => {
              const IconComp = job.icon;
              return (
                <div 
                  key={job.id} 
                  className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                >
                  <div className="flex gap-6 items-start md:items-center w-full">
                    {/* Icon */}
                    <div className="bg-[#f0f5ff] text-[#4f46e5] h-[64px] w-[64px] rounded-2xl flex items-center justify-center shrink-0 border border-[#e0e7ff]/50">
                      <IconComp size={26} strokeWidth={2} />
                    </div>
                    
                    {/* Job Details */}
                    <div className="flex-1">
                      <h4 className="text-[17px] font-black text-[#1a1a2e] mb-2">{job.title}</h4>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2.5 text-[12px] font-bold">
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                          {job.dept}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <MapPin size={13} className="text-gray-400" />
                          {job.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-500 text-[13px] font-medium leading-relaxed max-w-2xl">
                        {job.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t border-gray-50 md:border-t-0 shrink-0">
                    <span className="bg-[#f0f5ff] text-[#4f46e5] px-4 py-1.5 rounded-full text-[12px] font-bold hidden sm:block border border-[#e0e7ff]">
                      {job.type}
                    </span>
                    <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-7 py-3 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20 group-hover:shadow-lg group-hover:shadow-indigo-500/30 w-full md:w-auto">
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="bg-[#f8f9ff] rounded-[32px] px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            
            {/* Left Content */}
            <div className="flex-1 max-w-lg md:pl-4">
              <h3 className="text-[28px] sm:text-[34px] font-black text-[#1a1a2e] mb-4 tracking-tight leading-[1.2]">
                Don't see the right role?<br/>
                We'd love to hear from you.
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed mb-8 max-w-[360px]">
                We're always looking for talented people who are passionate about building great experiences.
              </p>
              <button className="border-[1.5px] border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white px-8 py-3 rounded-full font-bold text-[14px] flex items-center justify-center gap-2.5 transition-all bg-transparent w-fit">
                Send Your Resume <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img 
                src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784529133/4e5fd013c31a555f347becf66cd5a6022bf4dfc2_dmisvj.png" 
                alt="Send Resume Illustration" 
                className="w-full max-w-[460px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
