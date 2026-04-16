import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <span className="text-3xl font-bold tracking-tight text-white">
              TAX<span className="text-primary font-medium">safar</span>
            </span>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Providing professional business solutions and tax compliance services since 2012. Trusted by 20,000+ happy clients across India.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Pricing', 'Resources', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Income Tax Return', 'GST Registration', 'Company Formation', 'Virtual Office', 'Loan Assistance', 'Accounting'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 text-primary flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <p className="text-sm font-medium">support@taxsafar.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 text-primary flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Call Anytime</p>
                  <p className="text-sm font-medium">+91 97848 18899</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 text-primary flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Visit Office</p>
                  <p className="text-sm font-medium leading-relaxed">SEAT NO-15, GF21 AND GF22, JAIPUR ELECTRIC MARKET, NEAR RIDDHI SIDDHI CIRCLE, SHRI HANS MARG, JAIPUR Rajasthan, India</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} TAXsafar. All rights reserved. Made with ❤️ for businesses.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:-translate-y-2 transition-all duration-300 z-50 group"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
