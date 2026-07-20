import React, { useState } from 'react';
import { X, Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    location: '',
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    } else {
      // Simulate booking submission
      setBookingStep(4);
    }
  };

  const handleClose = () => {
    // Reset wizard states and call onClose prop
    setBookingStep(1);
    setBookingData({
      service: '',
      date: '',
      time: '',
      location: '',
      name: '',
      email: '',
      phone: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative bg-brand-light p-6 border-b border-gray-100 flex items-center gap-3">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white text-gray-400 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="bg-brand-primary p-2 rounded-xl text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-extrabold text-brand-dark text-lg">Zuca Booking</h3>
            <p className="text-xs text-gray-400">Step {bookingStep === 4 ? 3 : bookingStep} of 3</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {bookingStep === 1 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <h4 className="font-bold text-brand-dark text-sm">Choose Your Service</h4>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-brand-dark block">Select Category</label>
                <select
                  required
                  value={bookingData.service}
                  onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="Facial Skin Treatment">Facial Treatment ($60)</option>
                  <option value="Hair Styling & Blow Dry">Hair Blow Dry ($45)</option>
                  <option value="Nail Extension & Gel Manicure">Gel Manicure ($35)</option>
                  <option value="Aromatherapy Spa & Massage">Spa Massage ($80)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-brand-dark block">Preference Location</label>
                <select
                  required
                  value={bookingData.location}
                  onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                >
                  <option value="">Select location preference...</option>
                  <option value="Home Service">At-Home Service (Stylist visits you)</option>
                  <option value="Salon Visit">Salon Visit (Visit nearest boutique salon)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-brand-primary/95 shadow-lg shadow-brand-primary/20 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Continue
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          {bookingStep === 2 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <h4 className="font-bold text-brand-dark text-sm">Schedule Appointment</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Select Date</label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Select Time</label>
                  <input
                    type="time"
                    required
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setBookingStep(1)}
                  className="w-1/2 border-2 border-brand-primary/20 text-brand-primary py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer text-center"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-brand-primary text-white py-3.5 rounded-full font-bold text-sm transition-all hover:bg-brand-primary/95 cursor-pointer text-center"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {bookingStep === 3 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <h4 className="font-bold text-brand-dark text-sm">Your Contact Details</h4>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-brand-dark block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-brand-dark block">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary bg-white"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="w-1/2 border-2 border-brand-primary/20 text-brand-primary py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer text-center"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-brand-primary text-white py-3.5 rounded-full font-bold text-sm transition-all hover:bg-brand-primary/95 cursor-pointer text-center"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}

          {bookingStep === 4 && (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-green-50 text-green-500 mb-2">
                <ShieldCheck className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Booking Confirmed!</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                Thank you <strong>{bookingData.name}</strong>. Your appointment for <strong>{bookingData.service}</strong> ({bookingData.location}) on <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong> has been successfully booked.
              </p>
              <div className="bg-brand-light p-3.5 rounded-2xl text-[10px] text-brand-primary font-semibold max-w-xs mx-auto flex items-center justify-center gap-1.5">
                <Heart className="h-4 w-4 fill-brand-primary/10" />
                We've sent a verification link to {bookingData.email}
              </div>
              <button
                onClick={handleClose}
                className="mt-6 w-full bg-brand-primary text-white py-3.5 rounded-full font-bold text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
