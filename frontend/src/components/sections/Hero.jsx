import React from 'react';
import { motion } from 'framer-motion';
import { Search, PhoneCall, ArrowRight, ShieldCheck, TrendingUp, PieChart } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  const tags = [
    { name: 'Income Tax', icon: <TrendingUp size={16} />, color: 'bg-emerald-100 text-emerald-700' },
    { name: 'GST Filing', icon: <ShieldCheck size={16} />, color: 'bg-blue-100 text-blue-700' },
    { name: 'Accounting', icon: <PieChart size={16} />, color: 'bg-amber-100 text-amber-700' },
    { name: 'Notice Resolution', icon: <ShieldCheck size={16} />, color: 'bg-rose-100 text-rose-700' },
    { name: 'Company Registration', icon: <TrendingUp size={16} />, color: 'bg-indigo-100 text-indigo-700' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Simplifying Business Compliance
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold text-secondary leading-tight mb-6"
            >
              We Provide Your <span className="text-primary italic">Business Solutions.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
            >
              Experience tech-driven consultancy that helps your business run smarter and faster. From tax filing to notice resolution, we handle the complexity so you can focus on growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button 
                onClick={onContactClick}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                Register Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onContactClick}
                className="px-8 py-4 bg-white text-secondary border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} className="text-primary" />
                Talk to Expert
              </button>
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative max-w-lg mb-8 group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-32 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-700"
                placeholder="Search services (e.g., GST, Income Tax)..."
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-hover transition-all">
                Search
              </button>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-slate-400 mr-2 py-1">Popular:</span>
              {tags.map((tag, i) => (
                <motion.span
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-transform hover:-translate-y-0.5 ${tag.color}`}
                >
                  {tag.icon}
                  {tag.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Image Right / Visual Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white p-2 bg-gradient-to-br from-slate-100 to-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1573161158521-114328c7cbf1?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Solutions" 
                className="w-full h-auto rounded-[2.5rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              onClick={onContactClick}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Expert Advice</p>
                <p className="text-secondary font-bold">Call Now for Free</p>
              </div>
            </motion.div>

            {/* Rating Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <TrendingUp key={i} size={14} className="fill-current" />
                ))}
              </div>
              <p className="text-sm font-bold text-secondary">A+ Rating <span className="text-xs font-medium text-slate-400 ml-1">Trustpilot</span></p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
