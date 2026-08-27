import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import Providers from './pages/Providers';
import JobModal from './components/JobModal';
import BookingModal from './components/BookingModal';


const VALID_PAGES = ['home', 'about', 'careers', 'blog', 'helpcenter', 'providers'];

const getPageFromPath = () => {
  if (window.location.hash.startsWith('#/')) {
    const hashPage = window.location.hash.slice(2).toLowerCase();
    if (VALID_PAGES.includes(hashPage)) {
      return hashPage;
    }
  }

  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return VALID_PAGES.includes(path) ? path : 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const hashPage = window.location.hash.slice(2).toLowerCase();
      const cleanPath = VALID_PAGES.includes(hashPage) && hashPage !== 'home' ? `/${hashPage}` : '/';
      window.history.replaceState({}, '', cleanPath);
    }

    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentPage(page);
  };

  const [selectedJob, setSelectedJob] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onGetStarted={() => setShowBookingModal(true)} />;
      case 'about':
        return <About onGetStarted={() => setShowBookingModal(true)} />;
      case 'careers':
        return <Careers onSelectJob={(job) => setSelectedJob(job)} />;
      case 'providers':
        return <Providers onSelectJob={(job) => setSelectedJob({ ...job, hideApply: true })} />;
      case 'blog':
        return <Blog />;
      case 'helpcenter':
        return <HelpCenter />;
      default:
        return <Home onGetStarted={() => setShowBookingModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative antialiased">

      {/* Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onGetStarted={() => setShowBookingModal(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={navigateTo} />

      {/* Job Details Modal */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {/* Interactive Booking/Sign Up Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />

    </div>
  );
}

export default App;
