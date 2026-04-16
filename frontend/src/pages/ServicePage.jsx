import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  Utensils, 
  Briefcase, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  ChevronRight,
  Globe
} from 'lucide-react';

const serviceData = {
  itr: {
    title: 'Income Tax Return (ITR) Filing',
    description: 'We simplify ITR filing for salaried individuals, freelancers, business owners, and investors. Ensure timely tax compliance, maximize refunds, and avoid penalties.',
    icon: <TrendingUp className="w-12 h-12" />,
    color: 'emerald',
    steps: [
      'Create an account on our secure platform',
      'Upload PAN, income details, Form 16, & investment proofs',
      'Review your draft and pay the professional filing fee',
      'Our expert CA reviews your data and files the return officially',
      'Receive your ITR-V acknowledgment copy via email within 24 hours'
    ],
    highlights: ['Maximum Refund Guaranteed', 'Expert CA Review', 'Stay Notice-Free', '24/7 Digital Access']
  },
  gst: {
    title: 'GST Return Filing',
    description: 'Monthly or quarterly GST returns are crucial for business compliance. We handle GSTR-1, GSTR-3B, and reconciliation tasks with precision and speed.',
    icon: <ShieldCheck className="w-12 h-12" />,
    color: 'blue',
    steps: [
      'Login to your dedicated dashboard',
      'Submit your monthly purchase and sales data easily',
      'Our team validates your ITC (Input Tax Credit) eligibility',
      'We prepare and file your GST returns on time to avoid penalties',
      'Get your filing proof and summary report instantly'
    ],
    highlights: ['Timely Filings', 'Avoid Late Fees', 'Accurate ITC Claims', 'Reconciled Reports']
  },
  tds: {
    title: 'TDS Return Filing',
    description: 'Simplify your quarterly TDS/TCS filings. Whether it\'s salary, interest, rent, or contractor payments — we ensure timely TDS filing and Form 16/26Q generation.',
    icon: <FileText className="w-12 h-12" />,
    color: 'indigo',
    steps: [
      'Share your TAN details and deduction records with us',
      'Upload challans and employee/vendor data securely',
      'We prepare and validate the returns (24Q, 26Q, 27Q)',
      'Official submission and generation of Form 16/16A',
      'Acknowledgment and filing summary sent to your inbox'
    ],
    highlights: ['Error-Free Validation', 'On-Time Submission', 'Form 16 Generation', 'Compliance Support']
  },
  fssai: {
    title: 'FSSAI Compliance Filing',
    description: 'Food businesses must stay compliant with FSSAI norms. We manage renewals, license updates, and annual returns efficiently so you can focus on your kitchen.',
    icon: <Utensils className="w-12 h-12" />,
    color: 'rose',
    steps: [
      'Upload your current license and FBO (Food Business Operator) details',
      'Our food safety team checks your compliance status',
      'We initiate the renewal or annual return filing process',
      'Track your application progress on our dashboard in real-time',
      'Receive your final compliance report and renewed license'
    ],
    highlights: ['Easy License Renewal', 'Safety Compliance', 'End-to-End Support', 'Expert Guidance']
  },
  company: {
    title: 'Company Registration',
    description: 'Start your entrepreneurial journey on the right foot. We provide expert assistance in PVT LTD, LLP, and OPC registration with all legal documentation.',
    icon: <Briefcase className="w-12 h-12" />,
    color: 'amber',
    steps: [
      'Consult with experts to choose the right business structure',
      'Submission of Name Approval and DSC (Digital Signature)',
      'Preparation of MOA, AOA, and other incorporation documents',
      'Official filing with ROC (Registrar of Companies)',
      'Receive your Certificate of Incorporation and PAN/TAN'
    ],
    highlights: ['Fast Registration', 'Complete Documentation', 'Expert Consultancy', 'All-in-One Package']
  },
  notice: {
    title: 'Notice Resolution & Audit',
    description: 'Received a tax notice? Don\'t panic. Our experts handle complex audits and notices, representing you before authorities with technical accuracy.',
    icon: <BookOpen className="w-12 h-12" />,
    color: 'violet',
    steps: [
      'Upload the notice received from the IT/GST department',
      'Expert analysis of the notice and research of legal grounds',
      'Preparation of detailed technical responses and supporting docs',
      'Representation before the tax authorities if required',
      'Final resolution and closure of the notice case'
    ],
    highlights: ['Expert Representation', 'Technical Responses', 'Stress-Free Handling', 'Favorable Outcomes']
  },
  'virtual-office': {
    title: 'Virtual Office Facilities',
    description: 'Get a professional business address in prime locations without the cost of a physical office. Perfect for GST registration and brand representation.',
    icon: <Globe className="w-12 h-12" />,
    color: 'emerald',
    steps: [
      'Select your preferred prime business location',
      'Submit identity and business proof for verification',
      'We prepare the rent agreement and NOC documents',
      'Register your business and GST at the new address',
      'Access mail handling and meeting room facilities as needed'
    ],
    highlights: ['Prime Business Address', 'GST Registration Support', 'Mail Handling Services', 'Low Overhead Costs']
  },
  'loan-assistance': {
    title: 'Loan Assistance & Documentation',
    description: 'Need funding for your business or home? We simplify the loan process by handling documentation and connecting you with the right lenders.',
    icon: <TrendingUp className="w-12 h-12" />,
    color: 'blue',
    steps: [
      'Assessment of your financial profile and funding needs',
      'Document collection including ITR, Bank Statements, and Proofs',
      'Matching you with the best loan products from top lenders',
      'Application submission and follow-up with banking institutions',
      'Smooth loan processing and disbursement to your account'
    ],
    highlights: ['MSME & Business Loans', 'Home Loan Support', 'Transparent Process', 'Fast Disbursements']
  },
  'financial-planning': {
    title: 'Financial Planning & Advisory',
    description: 'Secure your future with professional investment advisory and retirement planning. We help you build a diversified portfolio that works for you.',
    icon: <ShieldCheck className="w-12 h-12" />,
    color: 'indigo',
    steps: [
      'Detailed discussion of your financial goals and risk appetite',
      'Analysis of current assets, liabilities, and insurance needs',
      'Drafting a personalized investment and tax-saving plan',
      'Execution of investments across various asset classes',
      'Periodic review and rebalancing of your portfolio'
    ],
    highlights: ['Personalized Advisory', 'Tax-Efficient Planning', 'Wealth Building', 'Retirement Security']
  },
  accounting: {
    title: 'Accounting & Bookkeeping',
    description: 'Maintain accurate financial records with our professional bookkeeping services. We ensure your accounts are always audit-ready and compliant.',
    icon: <FileText className="w-12 h-12" />,
    color: 'violet',
    steps: [
      'Connect your bank feeds and sharing of invoices/receipts',
      'Monthly categorization of income and expenses',
      'Generation of P&L accounts, Balance Sheets, and Cash Flow',
      'Reconciliation of accounts and preparation for audits',
      'Strategic financial advice based on your business data'
    ],
    highlights: ['Audit-Ready Books', 'Monthly Financial Reports', 'SME Focused', 'Cost-Effective']
  }
};

const ServicePage = ({ onContactClick }) => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Service Not Found</h2>
          <Link to="/" className="text-primary font-bold hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
  };

  const dotColors = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    violet: 'bg-violet-500',
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl mb-6 border ${colorClasses[service.color]}`}>
                {service.icon}
                <span className="font-bold text-lg">{service.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight mb-6">
                Professional <span className="text-primary">Compliance</span> Solutions.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onContactClick}
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center gap-2"
                >
                  Start Filing Now
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={onContactClick}
                  className="px-8 py-4 bg-white text-secondary border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                >
                  Talk to Expert
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-secondary mb-8">Why Choose TAXsafar?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.highlights.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="font-bold text-secondary text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-primary text-white rounded-3xl relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-widest">Active Clients</p>
                  <p className="text-3xl font-extrabold mb-4">20,000+</p>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    Join the community <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works / Steps */}
      <section className="px-4 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 italic tracking-tight">How it Works?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Experience a streamlined, tech-enabled process that makes compliance easy. Just simple steps to peace of mind.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-10 left-10 bottom-10 w-0.5 bg-slate-200 hidden lg:block" />
            
            <div className="space-y-12">
              {service.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-8 items-start relative z-10"
                >
                  <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${dotColors[service.color]} text-white text-3xl font-extrabold flex items-center justify-center shadow-xl`}>
                    0{index + 1}
                  </div>
                  <div className="flex-1 pt-4">
                    <h4 className="text-2xl font-bold text-secondary mb-3">{step.split('.')[0]}</h4>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                  <div className="hidden lg:flex w-24 h-24 rounded-full bg-white border border-slate-100 items-center justify-center text-slate-200">
                    <Clock size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 uppercase tracking-widest">
            Expert Assistance
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-8">
            Still have questions about <span className="text-primary">{service.title}?</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12">
            Our certified chartered accountants are ready to help you navigate through complex tax laws and regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onContactClick}
              className="px-12 py-5 bg-secondary text-white rounded-2xl font-extrabold shadow-2xl hover:bg-slate-900 transition-all scale-105 active:scale-95"
            >
              Get Professional Help
            </button>
            <button 
              onClick={onContactClick}
              className="px-12 py-5 bg-white text-primary border-2 border-primary/20 rounded-2xl font-extrabold hover:bg-primary/5 transition-all"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
