import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Users, Award, Heart } from 'lucide-react';

const About = ({ onContactClick }) => {
  const values = [
    {
      title: 'Our Mission',
      desc: 'To simplify business legalities for every Indian entrepreneur and business owner through innovative technology.',
      icon: <Target className="w-8 h-8 text-primary" />,
      color: 'bg-emerald-50'
    },
    {
      title: 'Our Vision',
      desc: 'To be the most trusted fintech platform in India by 2030, offering seamless compliance and wealth-building tools.',
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Our Values',
      desc: 'Transparency, integrity, and extreme customer obsession are the pillars that support our journey every day.',
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      color: 'bg-indigo-50'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '25,000+' },
    { label: 'Cities Covered', value: '150+' },
    { label: 'Files Handled', value: '100,000+' },
    { label: 'Expert CAs', value: '60+' }
  ];

  const storyTimeline = [
    { year: '2015', event: 'The first brick was laid in Jaipur with a small team of 3 CAs.' },
    { year: '2018', event: 'Successfully crossed 5,000 clients and launched our first digital portal.' },
    { year: '2021', event: 'Expansion into FSSAI and Company Registrations nationwide.' },
    { year: '2024', event: 'Transformed into TAXsafar, a complete fintech ecosystem for SMEs.' }
  ];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 mb-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
          >
            <Heart size={16} />
            <span>Built by Experts, Trusted by Thousands</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-secondary mb-8 leading-tight max-w-4xl mx-auto"
          >
            Empowering Indian Businesses with <span className="text-primary italic">Precision & Care.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            At TAXsafar, we believe that compliance shouldn't be a hurdle to your growth. We combine legal expertise with cutting-edge tech to keep you moving forward.
          </motion.p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-4 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="px-4 py-24 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 italic">{s.value}</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-8 leading-tight">
                Our Story: From a Small <span className="text-primary italic">Desk to a Digital Revolution.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                What started as a boutique consultancy has evolved into India's premier business legal-tech platform. We've weathered policy changes, digital shifts, and market evolutions — all while keeping our clients' trust at the center.
              </p>
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Join our team of experts</p>
                  <p className="text-xs text-primary font-bold hover:underline cursor-pointer">View open positions →</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 hidden sm:block" />
              <div className="space-y-12 relative z-10">
                {storyTimeline.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-primary text-primary font-bold flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                      {item.year}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-secondary font-bold mb-1 italic">Milestone Reached</p>
                      <p className="text-slate-500 leading-relaxed font-medium">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-secondary p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to be our next <span className="text-primary italic">Success Story?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the future of business compliance today. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onContactClick}
                className="px-12 py-5 bg-primary text-white rounded-2xl font-extrabold shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Let's Get Started
              </button>
              <button 
                onClick={onContactClick}
                className="px-12 py-5 bg-white/10 text-white rounded-2xl font-extrabold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
