import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Briefcase, 
  BookOpen, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'itr',
    title: 'Income Tax Return (ITR) Filing',
    desc: 'We simplify ITR filing for salaried individuals, business owners, and non-residents. Stay compliant, avoid tax notices, and maximize refunds.',
    icon: <TrendingUp size={24} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    id: 'gst',
    title: 'GST Return Filing',
    desc: 'Monthly or quarterly GST returns filed accurately. Our experts ensure timely submissions, avoid late fees, and claim accurate Input Tax Credit.',
    icon: <ShieldCheck size={24} />,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 'tds',
    title: 'TDS Return Filing',
    desc: 'Simplify your quarterly TDS/TCS filings. We handle data preparation, validation, and submission, ensuring compliance with Income Tax regulations.',
    icon: <FileText size={24} />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    id: 'fssai',
    title: 'FSSAI Compliance Filing',
    desc: 'Food businesses must comply with FSSAI norms. We manage license renewals, labels, and annual returns efficiently.',
    icon: <ShieldCheck size={24} />, 
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  },
  {
    id: 'company',
    title: 'Company Registration',
    desc: 'Expert assistance in PVT LTD, LLP, and OPC registration with all legal documentation and filings.',
    icon: <Briefcase size={24} />,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    id: 'notice',
    title: 'Notice Resolution & Audit',
    desc: 'Handle complex tax audits and notices with ease. Our experts represent you before authorities and ensure technical accuracy.',
    icon: <BookOpen size={24} />,
    color: 'text-violet-600',
    bg: 'bg-violet-50'
  }
];

const Services = ({ onContactClick }) => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold text-primary tracking-wide uppercase mb-3"
          >
            Expert Consultancy
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight"
          >
            Comprehensive Financial & Compliance Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            We offer a wide range of services designed to help your business stay compliant while optimizing your financial health.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link 
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary group-hover:text-primary transition-colors"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-secondary text-white text-center flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left">
            <h4 className="text-2xl font-bold mb-2">Need a custom solution for your business?</h4>
            <p className="text-slate-400">Our experts are ready to help you navigate complex regulations.</p>
          </div>
          <button 
            onClick={onContactClick}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-black/20 whitespace-nowrap"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
