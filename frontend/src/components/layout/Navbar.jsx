import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck, FileText, Briefcase, TrendingUp, Utensils, BookOpen, Search } from 'lucide-react';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  const serviceCategories = [
    {
      title: 'Filing Services',
      services: [
        { name: 'ITR Filing', id: 'itr', icon: <TrendingUp size={16} />, desc: 'Income Tax Return' },
        { name: 'GST Returns', id: 'gst', icon: <ShieldCheck size={16} />, desc: 'GST Compliance' },
        { name: 'TDS Filing', id: 'tds', icon: <FileText size={16} />, desc: 'Quarterly Filings' },
        { name: 'FSSAI Filing', id: 'fssai', icon: <Utensils size={16} />, desc: 'Food Compliance' },
      ]
    },
    {
      title: 'Registrations',
      services: [
        { name: 'Company Registration', id: 'company', icon: <Briefcase size={16} />, desc: 'Pvt Ltd, LLP, OPC' },
        { name: 'Virtual Office', id: 'virtual-office', icon: <Search size={16} />, desc: 'Business Address' },
        { name: 'MSME Registration', id: 'company', icon: <FileText size={16} />, desc: 'Udyam Registration' },
      ]
    },
    {
      title: 'Expert Support',
      services: [
        { name: 'Loan Assistance', id: 'loan-assistance', icon: <TrendingUp size={16} />, desc: 'Business & Home' },
        { name: 'Financial Planning', id: 'financial-planning', icon: <ShieldCheck size={16} />, desc: 'Wealth Advisory' },
        { name: 'Notice Resolution', id: 'notice', icon: <BookOpen size={16} />, desc: 'Tax Audit Help' },
      ]
    }
  ];

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-primary">
              TAX<span className="text-secondary font-medium">safar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200">Home</Link>
            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors duration-200">
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showServicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute top-full -left-4 w-[600px] bg-white border border-slate-100 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-8"
                  >
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{category.title}</h4>
                        <div className="space-y-3">
                          {category.services.map((service) => (
                            <Link 
                              key={service.name} 
                              to={`/services/${service.id}`}
                              className="group/item flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-slate-50 transition-all"
                            >
                              <div className="mt-1 w-8 h-8 rounded-lg bg-slate-100 text-slate-500 group-hover/item:bg-primary/10 group-hover/item:text-primary flex items-center justify-center transition-colors">
                                {service.icon}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-secondary group-hover/item:text-primary transition-colors">{service.name}</p>
                                <p className="text-[10px] text-slate-400 font-medium">{service.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            ))}

            <div className="flex items-center space-x-4">
              <Link 
                to="/login"
                className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors hover:cursor-pointer"
              >
                Login
              </Link>
              <button 
                onClick={onContactClick}
                className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                Register Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all">Home</Link>
              <div className="px-3 py-4 space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Services</p>
                <div className="grid grid-cols-2 gap-4">
                  {serviceCategories.flatMap(c => c.services).slice(0, 4).map(service => (
                    <Link key={service.name} to={`/services/${service.id}`} className="text-sm font-medium text-slate-600">{service.name}</Link>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link 
                  to="/login"
                  className="w-full py-4 text-center font-semibold text-slate-700 border border-slate-200 rounded-xl"
                >
                  Login
                </Link>
                <button 
                  onClick={() => { setIsOpen(false); onContactClick(); }}
                  className="w-full py-4 text-center font-semibold bg-primary text-white rounded-xl shadow-lg shadow-primary/20"
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
