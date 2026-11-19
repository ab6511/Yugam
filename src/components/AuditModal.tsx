import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRevenue?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, initialRevenue }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: initialRevenue || '$50,000 - $150,000 / mo',
    goals: 'Social Media Organic Distribution & High-Velocity Video'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container with spring scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg border rounded-3xl p-8 sm:p-10 shadow-2xl z-10"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-hover)',
              boxShadow: '0 25px 60px -15px var(--accent-glow)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--accent)'
                  }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Audit Request Received
                </h3>
                <p className="text-sm max-w-sm mx-auto leading-relaxed opacity-75">
                  We have received your details for <strong className="text-white">{formData.company}</strong>. A Senior Growth Partner will review your channels and reply within 24 hours.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-4 px-6 py-3 rounded-full text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span
                    className="text-xs font-mono uppercase tracking-widest block mb-2 font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    Start a conversation
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Request a Growth Diagnostic
                  </h3>
                  <p className="text-xs mt-1 opacity-70">
                    Direct operator teardown of your social media, content, and unit economics.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-zinc-500 focus:outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-zinc-500 focus:outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Company & Website</label>
                    <input
                      type="text"
                      required
                      placeholder="company.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-white placeholder-zinc-500 focus:outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Current Monthly Revenue</label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-white focus:outline-none transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)'
                      }}
                    >
                      <option value="< $25,000 / mo">&lt; $25,000 / mo</option>
                      <option value="$25,000 - $50,000 / mo">$25,000 - $50,000 / mo</option>
                      <option value="$50,000 - $150,000 / mo">$50,000 - $150,000 / mo</option>
                      <option value="$150,000 - $500,000 / mo">$150,000 - $500,000 / mo</option>
                      <option value="$500,000+ / mo">$500,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full text-black font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <span>Submit Audit Request</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </motion.button>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
