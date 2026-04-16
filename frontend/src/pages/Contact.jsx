import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email Us',
      value: 'support@taxsafar.com',
      sub: 'Response within 2 hours',
      icon: <Mail className="w-6 h-6 text-primary" />,
      color: 'bg-emerald-50'
    },
    {
      title: 'Call Us',
      value: '+91 97848 18899',
      sub: 'Mon-Sat, 9AM-8PM',
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Our Office',
      value: 'Jaipur, Rajasthan',
      sub: 'Service Center Hub',
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      color: 'bg-indigo-50'
    }
  ];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Globe size={14} />
            Connect With Tax Experts
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-secondary mb-8"
          >
            How can we <span className="text-primary italic text-shadow-sm">Help you today?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Whether you're starting a business or solving a tax notice, we're just a message away. Our team of certified professionals is ready to assist.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-100 border border-slate-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-secondary mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Full Name</label>
                      <input 
                         type="text" 
                         className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-medium"
                         placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Email Address</label>
                      <input 
                         type="email" 
                         className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-medium"
                         placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Phone Number</label>
                      <input 
                         type="tel" 
                         className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-medium"
                         placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">Subject</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-medium appearance-none">
                        <option>General Inquiry</option>
                        <option>Tax Filing Issue</option>
                        <option>New Registration</option>
                        <option>Corporate Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">Message</label>
                    <textarea 
                       rows="4"
                       className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-medium resize-none"
                       placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-2xl font-extrabold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Submit Request
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Side Info */}
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-100/50 flex items-start gap-6 group hover:border-primary/20 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{info.title}</h4>
                    <p className="text-xl font-extrabold text-secondary mb-1">{info.value}</p>
                    <p className="text-sm font-medium text-slate-400">{info.sub}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-secondary rounded-[2.5rem] text-white relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock size={20} />
                    Support Hours
                  </h4>
                  <div className="space-y-3 opacity-80 text-sm font-medium">
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span>9:30 AM - 7:30 PM</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-3">
                      <span>Saturday</span>
                      <span>10:30 AM - 5:30 PM</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-3">
                      <span>Sunday</span>
                      <span className="text-primary font-bold">Emergency Support Only</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="h-[500px] w-full bg-slate-50 border border-slate-100 rounded-[4rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-12">
              <div>
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <MapPin size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-secondary mb-4 italic">Locate Us in the Pink City</h3>
                <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                  Our central hub is located in Jaipur, Rajasthan, but our digital doorstep is open for everyone across India.
                </p>
                <div className="mt-8">
                  <a 
                    href="https://www.google.com/maps/place/Jaipur,+Rajasthan,+India/@26.885211,75.790558,9z/data=!4m6!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?hl=en-US&entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white border-2 border-slate-100 text-secondary rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 mx-auto decoration-none inline-flex"
                  >
                    View on Google Maps <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default Contact;
