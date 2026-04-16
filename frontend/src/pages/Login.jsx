import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Illustration & Branding */}
      <div className="hidden md:flex md:w-1/2 bg-slate-50 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-4xl font-bold tracking-tight text-primary">
              TAX<span className="text-secondary font-medium">safar</span>
            </span>
          </motion.div>
          
          <h2 className="text-4xl font-extrabold text-secondary leading-tight mb-6">
            Welcome back to the future of compliance.
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Access your dashboard to track filings, manage documents, and speak with your dedicated CA.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-secondary mb-1">20k+</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Active Users</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-secondary mb-1">A+ Rating</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-secondary mb-2">Login to Account</h1>
            <p className="text-slate-500">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email or Mobile</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-700"
                  placeholder="Enter your email or mobile"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-slate-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">Remember me for 30 days</label>
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex items-center justify-center gap-2 group">
              Sign In
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4 text-slate-400">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-xs font-bold uppercase tracking-widest">Or login with</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
              <Chrome size={18} />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700">
              <Github size={18} />
              Github
            </button>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-primary hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
