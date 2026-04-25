import React from 'react';
import { motion } from 'framer-motion';

const kpis = [
  { label: 'Total Revenue', value: '$4.28M', change: '+12.5%', icon: 'payments', color: '#4F46E5', bg: '#eef2ff' },
  { label: 'Closed Deals', value: '142', change: '+8.2%', icon: 'handshake', color: '#059669', bg: '#ecfdf5' },
  { label: 'New Leads', value: '892', change: '-3.1%', icon: 'group_add', color: '#d97706', bg: '#fffbeb', down: true },
  { label: 'Conversion Rate', value: '15.9%', change: '+21.4%', icon: 'speed', color: '#7c3aed', bg: '#f5f3ff' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' as const },
});

export const ReportsAnalytics: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <motion.div {...fadeUp(0)} className="flex items-end justify-between">
        <div>
          <h1 className="text-[30px] font-semibold leading-tight" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Reports & Analytics
          </h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--on-surface-variant)' }}>
            Comprehensive performance metrics for Q4 2024
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <span className="material-symbols-outlined">calendar_today</span>
            This Quarter
          </button>
          <button className="btn-primary">
            <span className="material-symbols-outlined">download</span>
            Export Report
          </button>
        </div>
      </motion.div>

      {/* KPIs */}
      <motion.div {...fadeUp(0.05)} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="card p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: kpi.bg }}>
                <span className="material-symbols-outlined text-[20px]" style={{ color: kpi.color, fontVariationSettings: "'FILL' 1" }}>
                  {kpi.icon}
                </span>
              </div>
              <span
                className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: kpi.down ? '#ef4444' : '#059669' }}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {kpi.down ? 'trending_down' : 'trending_up'}
                </span>
                {kpi.change}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--outline)' }}>
              {kpi.label}
            </p>
            <p className="text-2xl font-bold" style={{ color: 'var(--on-surface)' }}>{kpi.value}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Revenue Forecast */}
        <motion.div {...fadeUp(0.1)} className="col-span-12 lg:col-span-8 card p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--on-surface)' }}>Revenue Forecast</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--on-surface-variant)' }}>Projected income vs. historical performance</p>
            </div>
            <div className="flex gap-2 p-1 rounded-xl" style={{ background: 'var(--surface-container)' }}>
              {['Weekly', 'Monthly'].map((t, i) => (
                <button
                  key={t}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${i === 1 ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64 relative flex items-end gap-2">
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="border-t border-gray-100 w-full h-0"></div>
              ))}
            </div>
            {[
              { h: '40%', s: true }, { h: '55%', s: true }, { h: '45%', s: true }, 
              { h: '65%', s: true }, { h: '85%', s: true }, { h: '70%', s: true }, 
              { h: '95%', s: true }, { h: '60%', s: false }, { h: '75%', s: false }, 
              { h: '80%', s: false }
            ].map((bar, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: bar.h }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                className={`flex-1 rounded-t-lg relative group transition-all ${
                  bar.s 
                    ? 'bg-primary' 
                    : 'bg-primary-container border-2 border-dashed border-primary/30'
                }`}
                style={{ opacity: bar.s ? 1 : 0.6 }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${(Math.random() * 5 + 1).toFixed(1)}M
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--outline)' }}>
            <span>Oct 2024</span>
            <span>Nov 2024</span>
            <span>Dec 2024 (Forecast)</span>
          </div>
        </motion.div>

        {/* Lead Sources */}
        <motion.div {...fadeUp(0.12)} className="col-span-12 lg:col-span-4 card p-8">
          <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--on-surface)' }}>Lead Sources</h3>
          <p className="text-xs mb-8" style={{ color: 'var(--on-surface-variant)' }}>Performance per channel</p>
          
          <div className="flex justify-center mb-10">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--surface-container-high)" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4F46E5" strokeWidth="3.5" strokeDasharray="45 55" strokeLinecap="round" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="30 70" strokeDashoffset="-45" strokeLinecap="round" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="25 75" strokeDashoffset="-75" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold" style={{ color: 'var(--on-surface)' }}>892</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--outline)' }}>Total</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Digital Ads', pct: '45%', color: '#4F46E5' },
              { label: 'Referrals', pct: '30%', color: '#10b981' },
              { label: 'Organic', pct: '25%', color: '#f59e0b' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>{s.label}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: 'var(--on-surface)' }}>{s.pct}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Conversion Funnel */}
      <motion.div {...fadeUp(0.14)} className="card p-8">
        <div className="mb-10">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--on-surface)' }}>Sales Conversion Funnel</h3>
          <p className="text-xs mt-0.5" style={{ color: 'var(--on-surface-variant)' }}>End-to-end performance tracking from acquisition to close</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            { label: 'Leads', val: '892', yield: '100%', color: '#4F46E5', bg: '#eef2ff' },
            { label: 'Contacted', val: '512', yield: '57%', color: '#6366f1', bg: '#f5f3ff' },
            { label: 'Site Visit', val: '284', yield: '55%', color: '#818cf8', bg: '#fcf8ff' },
            { label: 'Negotiation', val: '198', yield: '70%', color: '#a5b4fc', bg: '#fcf8ff' },
            { label: 'Closed', val: '142', yield: '72%', color: '#10b981', bg: '#ecfdf5' },
          ].map((s, i) => (
            <div key={s.label} className="flex flex-col">
              <div className="flex-1 rounded-2xl p-6 text-center transition-all hover:translate-y-[-2px]" style={{ background: s.bg, border: `1px solid ${s.color}20` }}>
                <p className="text-xl font-bold mb-1" style={{ color: s.color }}>{s.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--outline)' }}>{s.label}</p>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'white' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: s.yield }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                    className="h-full"
                    style={{ background: s.color }}
                  />
                </div>
                <p className="mt-2 text-[10px] font-bold" style={{ color: i === 4 ? '#059669' : 'var(--outline)' }}>{s.yield} Yield</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
