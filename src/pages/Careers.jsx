import React, { useState } from 'react';
import { 
  Users, TrendingUp, Sparkles, Heart, Gift, 
  Smile, Briefcase, MapPin, Clock, Search, ChevronRight 
} from 'lucide-react';

export default function Careers({ onSelectJob }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  
  // Newsletter Interest State
  const [interestEmail, setInterestEmail] = useState('');
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const perks = [
    {
      icon: Sparkles,
      title: 'Make an impact',
      desc: 'Your work directly impacts a product loved by thousands of beauty professionals.'
    },
    {
      icon: TrendingUp,
      title: 'Grow Together',
      desc: 'We build paths for your professional growth with mentorship & new opportunities.'
    },
    {
      icon: Users,
      title: 'People First',
      desc: 'A supportive, inclusive, and fun environment where you can be your true, best self.'
    },
    {
      icon: Briefcase,
      title: 'Work with Purpose',
      desc: 'Be part of a mission that empowers independent beauty professionals.'
    },
    {
      icon: Gift,
      title: 'Perks & Benefits',
      desc: 'Flexible schedules, health support, wellness perks and a healthy work-life balance.'
    },
    {
      icon: Smile,
      title: 'Celebrate Together',
      desc: 'From small wins to big milestones, we celebrate every step of the journey.'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      dept: 'Design',
      location: 'Remote, India',
      type: 'Full-time',
      experience: '2-4 years'
    },
    {
      id: 2,
      title: 'Flutter Developer',
      dept: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years'
    },
    {
      id: 3,
      title: 'Digital Marketing Executive',
      dept: 'Marketing',
      location: 'Chennai, India',
      type: 'Full-time',
      experience: '1-3 years'
    },
    {
      id: 4,
      title: 'Customer Support Specialist',
      dept: 'Operations',
      location: 'Chennai, India',
      type: 'Full-time',
      experience: '1-2 years'
    }
  ];

  const departments = ['All', 'Design', 'Engineering', 'Marketing', 'Operations'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    if (!interestEmail) return;
    setIsSubmitting(true); // Simulate submitting
    setTimeout(() => {
      setInterestSubmitted(true);
    }, 1000);
  };

  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  return (
    <div className="w-full">
      {/* 3rd HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest block">
                CAREERS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Build the future of <br />
                <span className="text-[#7c3aed] italic font-black">beauty</span> with us
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg font-semibold">
                At Zuca, we're more than a company. We're a passionate team reimagining how people experience beauty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#open-roles"
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-7 py-3 rounded-xl font-bold text-xs transition-colors text-center cursor-pointer shadow-md shadow-purple-600/10"
                >
                  View Open Roles
                </a>
                <button 
                  onClick={() => alert("Life at Zuca: We value remote collaboration, transparent communication, and periodic team retreats!")}
                  className="border border-gray-250 text-gray-700 px-7 py-3 rounded-xl font-bold text-xs transition-colors cursor-pointer bg-white"
                >
                  Life at Zuca
                </button>
              </div>
            </div>

            {/* Right Side Collage */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] flex justify-center lg:justify-end">
                <img 
                  src="/carrers.png" 
                  className="w-full max-w-[450px] md:max-w-[480px] h-auto object-contain z-10 relative"
                  alt="Zuca careers beauty collage"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY JOIN ZUCA Section */}
      <section className="py-20 bg-[#fafafa]/40 border-t border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-[#7c3aed] tracking-widest uppercase">
              Why Join Zuca?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, idx) => {
              const IconComponent = perk.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-8 border border-gray-100/70 shadow-sm text-left hover:border-purple-100 hover:shadow-md transition-all duration-300 space-y-4"
                >
                  <div className="bg-purple-50 text-[#7c3aed] h-11 w-11 rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900">{perk.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-semibold">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS Section */}
      <section id="open-roles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest">
              JOIN OUR TEAM
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Find your next opportunity
            </h2>
            <p className="text-gray-400 text-xs font-semibold max-w-sm mx-auto leading-relaxed">
              Explore open roles and grow with Zuca.
            </p>
          </div>

          {/* Search and Department Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Input */}
            <div className="w-full md:max-w-sm relative">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/10 focus:border-[#7c3aed] bg-white font-medium"
              />
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
            </div>

            {/* Department buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[#7c3aed] text-white shadow-md shadow-purple-600/10'
                      : 'bg-gray-50 text-gray-500 border border-gray-150/70 hover:bg-gray-100'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                // Determine icon and color config based on job id or title
                let iconSvg, colorClasses;
                if (job.id === 1) {
                  colorClasses = { bg: 'bg-purple-50 text-[#7c3aed] border-purple-100/50' };
                  iconSvg = (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M21 12H3m9-9v18" />
                    </svg>
                  );
                } else if (job.id === 2) {
                  colorClasses = { bg: 'bg-emerald-50 text-emerald-600 border-emerald-100/50' };
                  iconSvg = (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  );
                } else if (job.id === 3) {
                  colorClasses = { bg: 'bg-amber-50 text-amber-600 border-amber-100/50' };
                  iconSvg = (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  );
                } else {
                  colorClasses = { bg: 'bg-red-50 text-red-500 border-red-100/50' };
                  iconSvg = (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  );
                }

                return (
                  <div 
                    key={job.id} 
                    className="bg-white rounded-2xl p-5 border border-gray-100/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-purple-100 hover:shadow-sm transition-all text-left animate-in fade-in duration-200"
                  >
                    <div className="flex items-center gap-4">
                      {/* Left Role icon */}
                      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border ${colorClasses.bg} shrink-0`}>
                        {iconSvg}
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                          {job.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 font-bold">
                          {job.dept} <span className="text-gray-200 px-1">•</span> {job.type} <span className="text-gray-200 px-1">•</span> {job.location}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => onSelectJob(job)}
                      className="text-[#7c3aed] hover:text-[#6d28d9] font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer self-end sm:self-center bg-transparent border-0 py-1"
                    >
                      View Details <span className="text-[13px] leading-none">→</span>
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 border border-dashed border-gray-200 rounded-3xl">
                <Briefcase className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-brand-dark">No open roles found</h4>
                <p className="text-xs text-gray-500 mt-1">Try resetting your filters or search keywords.</p>
              </div>
            )}
          </div>
          
          {/* View All Open Roles Button */}
          <div className="text-center mt-10">
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedDept('All');
              }}
              className="border border-[#7c3aed] hover:bg-purple-50/50 text-[#7c3aed] px-6 py-2.5 rounded-full font-bold text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5 bg-white"
            >
              View All Open Roles <span className="text-[13px] leading-none">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* LET'S STAY CONNECTED Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f5f3ff]/50 border border-purple-50 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="text-left space-y-3 max-w-xl">
              <span className="text-[10px] font-extrabold text-[#7c3aed] uppercase tracking-widest block">
                DON'T SEE THE RIGHT ROLE?
              </span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
                Let's stay connected
              </h2>
              <p className="text-gray-400 text-xs font-semibold leading-relaxed">
                We're always looking for talented people. Share your interest and we'll reach out when a fit opens up.
              </p>
            </div>

            <div className="w-full lg:max-w-xs shrink-0 flex justify-start lg:justify-end">
              <button 
                onClick={() => {
                  const email = prompt("Enter your email address to submit your interest:");
                  if (email) {
                    alert(`Thank you! Your interest has been registered for: ${email}`);
                  }
                }}
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-7 py-3 rounded-xl font-bold text-xs transition-colors shrink-0 shadow-md shadow-purple-600/10 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Submit Your Interest <span className="text-[13px] leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
