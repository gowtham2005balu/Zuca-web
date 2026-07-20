import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import JobModal from './components/JobModal';
import BookingModal from './components/BookingModal';


function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(2);
    return ['home', 'about', 'careers', 'blog', 'helpcenter'].includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2);
      const targetPage = ['home', 'about', 'careers', 'blog', 'helpcenter'].includes(hash) ? hash : 'home';
      setCurrentPage(targetPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = `#/${page}`;
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
