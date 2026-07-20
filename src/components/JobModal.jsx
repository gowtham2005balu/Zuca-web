import React, { useState } from 'react';
import { X, Briefcase, MapPin, Clock, Upload, CheckCircle } from 'lucide-react';

export default function JobModal({ job, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="relative bg-brand-light p-6 md:p-8 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white text-gray-400 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary mb-3">
            {job.dept}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark pr-8">
            {job.title}
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-brand-primary/60" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-brand-primary/60" />
              {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-brand-primary/60" />
              {job.experience || 'Entry to Mid Level'}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-green-50 text-green-500 mb-2">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Application Submitted!</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Thank you for applying to Zuca, <strong>{formData.name}</strong>. We have received your application for the <strong>{job.title}</strong> role and will get back to you soon.
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/95 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Job Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-dark">About the Role</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We are looking for a highly skilled and motivated <strong>{job.title}</strong> to join our growing team. You'll work closely with product, engineering, and design to help shape the beauty booking experience of tomorrow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1">
                      <li>Collaborate with cross-functional teams to outline deliverables.</li>
                      <li>Build, deploy and iterate rapidly on core features.</li>
                      <li>Help maintain design consistency and absolute performance.</li>
                      <li>Support high standard software development patterns.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm mb-2">Requirements:</h4>
                    <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1">
                      <li>Proven experience in the respective domain.</li>
                      <li>Strong communication and collaborative skills.</li>
                      <li>Self-motivated with a passion for product quality.</li>
                      <li>Excited to work in a fast-paced startup ecosystem.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-brand-dark">Apply for this Position</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-brand-dark block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-brand-dark block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Resume / CV *</label>
                  <div className="border-2 border-dashed border-gray-200 hover:border-brand-primary rounded-xl p-6 transition-colors flex flex-col items-center justify-center bg-gray-50/50 cursor-pointer relative">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="h-6 w-6 text-gray-400 mb-2" />
                    <span className="text-sm font-semibold text-brand-dark">
                      {formData.resume ? formData.resume.name : 'Upload a file'}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      PDF, DOCX up to 10MB
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Cover Letter (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us why you're a great fit for this role..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-white py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-brand-primary/95 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg shadow-brand-primary/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
