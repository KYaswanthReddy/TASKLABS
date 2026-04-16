import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ClipboardCheck, Calculator, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Register & Consult',
    desc: 'Create an account and tell us about your business/individual needs. Get paired with an expert.',
    icon: <UserPlus size={32} />,
    color: 'bg-emerald-500'
  },
  {
    title: 'Document Submission',
    desc: 'Upload necessary documents through our secure portal. Everything is encrypted and private.',
    icon: <ClipboardCheck size={32} />,
    color: 'bg-emerald-600'
  },
  {
    title: 'Expert Processing',
    desc: 'Our certified CAs and experts process your application or filing with meticulous detail.',
    icon: <Calculator size={32} />,
    color: 'bg-emerald-700'
  },
  {
    title: 'Final Submission',
    desc: 'We submit your filing to the authorities and provide you with the confirmation & reports.',
    icon: <CheckCircle2 size={32} />,
    color: 'bg-emerald-800'
  }
];

const HowItWorks = ({ onContactClick }) => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6">How It Works</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Experience a streamlined, tech-enabled process that makes compliance easy. Just four simple steps to peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className={`w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-8 shadow-xl relative`}>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-secondary text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </span>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-4">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-secondary">Why thousands of businesses trust TAXsafar</h3>
            <div className="space-y-6">
              {[
                { title: 'Tech-Driven Approach', text: 'Real-time tracking of your filings and applications.' },
                { title: 'Expert CA Support', text: 'Direct access to certified professionals for all your queries.' },
                { title: 'Data Security', text: 'Bank-grade encryption for all your sensitive documents.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <UserPlus size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Join 10k+ Members</p>
                  <p className="text-xl font-extrabold text-secondary">Start Your Journey</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-slate-50 rounded-xl" />
                <div className="h-12 bg-slate-50 rounded-xl" />
                <button 
                  onClick={onContactClick}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20"
                >
                  Register for Free
                </button>
              </div>
            </div>
            {/* Abstract Shape Overlay */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
