import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare, Briefcase, ChevronDown, Check } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { id: 'itr', label: 'Income Tax Return (ITR)', icon: <User size={14} /> },
    { id: 'gst', label: 'GST Compliance', icon: <Check size={14} /> },
    { id: 'tds', label: 'TDS Return Filing', icon: <Mail size={14} /> },
    { id: 'fssai', label: 'FSSAI Registration', icon: <Check size={14} /> },
    { id: 'company', label: 'Company Registration', icon: <Briefcase size={14} /> },
    { id: 'notice', label: 'Notice Resolution', icon: <MessageSquare size={14} /> },
    { id: 'accounting', label: 'Accounting & Bookkeeping', icon: <X size={14} /> },
  ];

  const handleSelect = (service) => {
    setSelectedService(service.label);
    setIsDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:rotate-90 transition-all duration-300"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-1">Contact Our Experts</h3>
              <p className="text-white/80 text-sm">Tell us about your requirements and we'll get back to you within 2 hour.</p>
            </div>

            {/* Form */}
            <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Custom UI/UX Dropdown */}
              <div className="space-y-1.5 relative">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Service Needed</label>
                <div 
                  className={`relative cursor-pointer w-full pl-10 pr-10 py-3 bg-slate-50 border rounded-xl transition-all flex items-center ${
                    isDropdownOpen ? 'border-primary ring-2 ring-primary/20 bg-white' : 'border-slate-100'
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Briefcase className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${isDropdownOpen ? 'text-primary' : 'text-slate-400'}`} size={18} />
                  <span className={`text-sm ${selectedService ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                    {selectedService || 'Select a service'}
                  </span>
                  <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`} size={18} />
                </div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 5, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute z-[110] left-0 right-0 top-full bg-white border border-slate-100 rounded-2xl shadow-2xl p-2 max-h-60 overflow-y-auto"
                    >
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${
                            selectedService === service.label ? 'bg-primary/5 text-primary' : 'text-slate-600'
                          }`}
                          onClick={() => handleSelect(service)}
                        >
                          <div className={`p-1.5 rounded-lg ${selectedService === service.label ? 'bg-primary/10' : 'bg-slate-100 text-slate-400'}`}>
                            {service.icon}
                          </div>
                          <span className="text-sm font-medium">{service.label}</span>
                          {selectedService === service.label && (
                            <Check className="ml-auto" size={16} />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message / Remark</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                  <textarea
                    rows="2"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2 group mt-2">
                Submit Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
