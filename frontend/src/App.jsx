import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import ContactModal from './components/modals/ContactModal';
import Login from './pages/Login';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import { Users, Award, Briefcase, Globe } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Happy Clients', value: '20k+', icon: <Users size={24} /> },
    { label: 'Expert CAs', value: '50+', icon: <Briefcase size={24} /> },
    { label: 'Years Experience', value: '12+', icon: <Award size={24} /> },
    { label: 'Cities Covered', value: '100+', icon: <Globe size={24} /> },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold text-secondary mb-1 uppercase tracking-tight">
                <Counter value={stat.value} />
              </p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onContactClick }) => (
  <section className="py-24 bg-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
        Ready to simplify your business taxation?
      </h2>
      <p className="text-emerald-50 text-lg mb-12 max-w-2xl mx-auto">
        Join over 10,000 satisfied business owners who trust TAXsafar for their compliance and growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={onContactClick}
          className="px-10 py-5 bg-secondary text-white rounded-2xl font-bold shadow-2xl hover:bg-slate-900 transition-all"
        >
          Get Started Now
        </button>
        <button 
          onClick={onContactClick}
          className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:bg-slate-50 transition-all"
        >
          Contact Our Experts
        </button>
      </div>
    </div>
  </section>
);

const HomePage = ({ onContactClick }) => (
  <main>
    <Hero onContactClick={onContactClick} />
    <Stats />
    <Services onContactClick={onContactClick} />
    <HowItWorks onContactClick={onContactClick} />
    <CTASection onContactClick={onContactClick} />
  </main>
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-primarySelection selection:text-white">
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage onContactClick={() => setIsContactModalOpen(true)} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServicePage onContactClick={() => setIsContactModalOpen(true)} />} />
        </Routes>

        <Footer />

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
