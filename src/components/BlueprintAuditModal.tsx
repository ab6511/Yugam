import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Crosshair, FileCheck } from 'lucide-react';

interface BlueprintAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRevenue?: string;
}

export const BlueprintAuditModal: React.FC<BlueprintAuditModalProps> = ({ isOpen, onClose, initialRevenue }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: initialRevenue || '$50,000 - $150,000 / mo',
    primaryUnit: 'Unit 01 & 02: Distribution & Video Production Lab'
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
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-paper-sheet border border-charcoal-line/30 rounded-2xl p-8 sm:p-10 shadow-2xl z-10 font-sans"
          >
            {/* Architectural Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-6 right-6 p-2 rounded text-charcoal-light hover:text-charcoal hover:bg-paper-muted transition-colors font-mono"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-14 h-14 rounded-full bg-terracotta-light text-terracotta mx-auto flex items-center justify-center border border-terracotta/30">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  Specification Order Filed
                </h3>
                <p className="text-sm text-charcoal-muted max-w-sm mx-auto leading-relaxed">
                  Blueprint audit docket generated for <strong className="text-charcoal">{formData.company}</strong>. A Senior Growth Operator will review your channels and deliver your diagnostic within 24 hours.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-4 px-6 py-3 rounded bg-charcoal text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-terracotta transition-colors shadow-sm"
                >
                  Return to Blueprint
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-terracotta mb-1 font-semibold uppercase">
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>ORDER SPECIFICATION // ARCH-2026</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal tracking-tight">
                    Commission a Growth Diagnostic
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1 font-mono">
                    Direct operator teardown of your social distribution, video hooks, and contribution margin.
                  </p>
                </div>

                <div className="space-y-4 text-sm font-mono text-xs">
                  <div className="space-y-1.5">
                    <label className="text-charcoal font-semibold uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-paper-muted border border-charcoal-line/20 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-charcoal font-semibold uppercase">BUSINESS EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-paper-muted border border-charcoal-line/20 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-charcoal font-semibold uppercase">COMPANY & URL *</label>
                    <input
                      type="text"
                      required
                      placeholder="company.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-paper-muted border border-charcoal-line/20 text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-charcoal font-semibold uppercase">CURRENT MONTHLY RUN-RATE</label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-paper-muted border border-charcoal-line/20 text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option value="< $25,000 / mo">&lt; $25,000 / mo</option>
                      <option value="$25,000 - $50,000 / mo">$25,000 - $50,000 / mo</option>
                      <option value="$50,000 - $150,000 / mo">$50,000 - $150,000 / mo</option>
                      <option value="$150,000 - $500,000 / mo">$150,000 - $500,000 / mo</option>
                      <option value="$500,000+ / mo">$500,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded bg-terracotta hover:bg-terracotta-hover text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-terracotta active:scale-98"
                >
                  <span>Submit Specification Request</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
