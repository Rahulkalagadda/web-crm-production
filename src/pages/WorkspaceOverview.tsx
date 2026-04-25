import React from 'react';
import { motion } from 'framer-motion';

const kpis = [
  {
    label: 'Total Leads',
    value: '2,842',
    change: '+12.5%',
    up: true,
    icon: 'group',
    color: '#4F46E5',
    bg: '#eef2ff',
  },
  {
    label: 'Active Pipeline Value',
    value: '$14.2M',
    sub: 'Across 42 pending contracts',
    change: '+8.2%',
    up: true,
    icon: 'payments',
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    label: 'Conversion Rate',
    value: '3.82%',
    change: '-0.4%',
    up: false,
    icon: 'speed',
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    label: 'Total Revenue (YTD)',
    value: '$2.48M',
    sub: 'Target: $3.0M',
    change: '+21.4%',
    up: true,
    icon: 'trending_up',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
];

const pipelineData = [
  { label: 'New', count: 2, value: '$1.2M', pct: 8, color: '#4F46E5' },
  { label: 'Contacted', count: 1, value: '$2.8M', pct: 18, color: '#f59e0b' },
  { label: 'Site Visit', count: 3, value: '$5.1M', pct: 33, color: '#10b981' },
  { label: 'Negotiation', count: 2, value: '$8.4M', pct: 54, color: '#ef4444' },
  { label: 'Closed', count: 12, value: '$24.5M', pct: 100, color: '#6b7280' },
];

const activities = [
  {
    icon: 'task_alt',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    title: 'Sarah Jenkins signed the contract for The Heights Penthouse',
    time: '2 minutes ago',
    sub: 'Automated Process',
  },
  {
    icon: 'person_add',
    iconBg: '#eef2ff',
    iconColor: '#4F46E5',
    title: 'New Lead: Michael Chen added via Zillow integration',
    time: '14 minutes ago',
    sub: 'System',
  },
  {
    icon: 'home_work',
    iconBg: '#fffbeb',
    iconColor: '#d97706',
    title: 'Property Tour scheduled for 1422 Oak Street',
    time: '1 hour ago',
    sub: 'Agent: David K.',
  },
  {
    icon: 'comment',
    iconBg: '#f5f3ff',
    iconColor: '#7c3aed',
    title: 'Team Mention: @Alexander please review the buyer\'s offer',
    time: '3 hours ago',
    sub: 'Agent: Elena R.',
  },
];

const teamMembers = [
  { name: 'Sarah Jenkins', role: 'Senior Agent', deals: 18, revenue: '$3.2M', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3WYun0K8eTIuSqprZA6C1ipIPe6Ul4bEgp-pcy1_ly8UlZFwUWS7LQOnH_W9ofu9KGOOjvUj_cpvsu2vQjUpT87TlNROc6tJn_foiEIgBIDCTuMSjLUc-6clLlh23GhjRbdPM-ojwoXYWqZmxiQCTNjka3aQw6PTM51feINJi_vnCR317J2TUPqkmzmsqlWM2hRq5HtuexZ8K_M1PmAxyliFOGOuShc0zEBxgP0vqwxD1Wv4G1sPvC2NmEE5qkJssaxdmUvvIjdc', pct: 92 },
  { name: 'Marcus Mitchell', role: 'Lead Agent', deals: 14, revenue: '$2.1M', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVAiLaKzXG9ZvRoKyegEagwh_2BIgoAC08fkFSBPWILc2r85CNH_2Y0mTgUO1syLgz9yCkz21OQGU4tI4GkMz04lK4phGHi_HgI6PETgtXqQpfNcgJ2IAfEF_c7ihFTX52IwFtZsUIBWOm5u9mkATm5HjiDUIN9iksOY_BuWBcz87IpAhrQC0hSsRohbxfm_Dj1C1nTX-bj7XHiMuLlT5OleV7eX-eLf1KLglxpojr2sZpBNV_2y2yd43LsJsTvGDHGTgeW7zyD4Q', pct: 74 },
  { name: 'Elena Rodriguez', role: 'Associate', deals: 9, revenue: '$1.4M', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqusbO2OL8Px-N44Gza44L-tF29hnnm8k8L9oAB2lp2jE0eD6ofRHcgYQAxBs9BYgFla8K4vdEl1bIhgy6pmYgX8dywpvgqu-ZGRanRM1a2TZxDJCvWJWeoujv7UAyXiHV2L5IknC_3tW5lSo5_WAxqLqpBCFAE3joMGL4tmLUE-qi7HS9pHyxL1xE6iWIe1IdvtJpDAigGPJqVb7BVhZWAPzrIMI_5S7PgfqGvggeNBNl-Q4zG4r7SSBOR5Yu9goBvVyifAhJ7hA', pct: 58 },
  { name: 'David Kim', role: 'Associate', deals: 6, revenue: '$890K', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDghJrq3sXv5aSfeIHPhNhY49SsYTHnFfv8GggAhQw-Z0FgxiNJBBhTbq6ixi86GMRlORDNAS7tmC8OgLq1A89ijmYp90V5SXvXXzF2ZOqfE-P1sjuKCId3q9Y7I5w7d6ngb04v-W9wjDikvCEQ5DZAw-fWRGsQ392mDgj-WMK33lSo3wPm1hug9MtEM-aUTOKVRus8D6XeO6WC2h5f8qgsyuGCPPeKH69i1LojYMM1YQDtN3hd8F-s7pzkZhLtjPTRLSxIDfDqwOk', pct: 41 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' as const },
});

export const WorkspaceOverview: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page Header */}
      <motion.div {...fadeUp(0)}>
        <h1 className="text-[30px] font-semibold leading-tight" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
          Workspace Overview
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--on-surface-variant)' }}>
          Real-time performance metrics for Q4 2024
        </p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div {...fadeUp(0.05)} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map((kpi) => (
          <motion.div
            key={kpi.label}
            whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
            className="rounded-2xl p-6 cursor-default"
            style={{ background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: kpi.bg }}>
                <span className="material-symbols-outlined text-[20px]" style={{ color: kpi.color, fontVariationSettings: "'FILL' 1" }}>
                  {kpi.icon}
                </span>
              </div>
              <span
                className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: kpi.up ? '#059669' : '#ef4444' }}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {kpi.up ? 'trending_up' : 'trending_down'}
                </span>
                {kpi.change}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--outline)' }}>
              {kpi.label}
            </p>
            <p className="text-2xl font-bold" style={{ color: 'var(--on-surface)' }}>{kpi.value}</p>
            {kpi.sub && <p className="text-xs mt-1" style={{ color: 'var(--on-surface-variant)' }}>{kpi.sub}</p>}
          </motion.div>
        ))}
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Pipeline Distribution */}
        <motion.div {...fadeUp(0.1)} className="col-span-12 lg:col-span-5 rounded-2xl p-6"
          style={{ background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--on-surface)' }}>Pipeline Distribution</h3>
          <p className="text-xs mb-6" style={{ color: 'var(--on-surface-variant)' }}>Deal stages and values</p>
          <div className="space-y-4">
            {pipelineData.map((stage) => (
              <div key={stage.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>{stage.label}</span>
                    <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md" style={{ background: 'var(--surface-container)', color: 'var(--outline)' }}>
                      {stage.count}
                    </span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: 'var(--on-surface)' }}>{stage.value}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-container-high)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: stage.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lead Sources */}
        <motion.div {...fadeUp(0.12)} className="col-span-12 lg:col-span-3 rounded-2xl p-6"
          style={{ background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--on-surface)' }}>Leads by Source</h3>
          <p className="text-xs mb-6" style={{ color: 'var(--on-surface-variant)' }}>Channel performance</p>

          <div className="flex justify-center mb-6">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--surface-container-high)" strokeWidth="3.8" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4F46E5" strokeWidth="3.8" strokeDasharray="45 55" strokeLinecap="round" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3.8" strokeDasharray="30 70" strokeDashoffset="-45" strokeLinecap="round" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.8" strokeDasharray="25 75" strokeDashoffset="-75" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xl font-bold" style={{ color: 'var(--on-surface)' }}>892</p>
                <p className="text-xs" style={{ color: 'var(--outline)' }}>Total</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Digital Ads', pct: '45%', color: '#4F46E5' },
              { label: 'Referrals', pct: '30%', color: '#10b981' },
              { label: 'Organic', pct: '25%', color: '#f59e0b' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-sm" style={{ color: 'var(--on-surface)' }}>{s.label}</span>
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--on-surface)' }}>{s.pct}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div {...fadeUp(0.14)} className="col-span-12 lg:col-span-4 rounded-2xl p-6"
          style={{ background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-semibold" style={{ color: 'var(--on-surface)' }}>Recent Activities</h3>
            <button className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>View all</button>
          </div>
          <p className="text-xs mb-6" style={{ color: 'var(--on-surface-variant)' }}>Live event feed</p>

          <div className="space-y-5">
            {activities.map((act, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: act.iconBg }}>
                  <span className="material-symbols-outlined text-[16px]" style={{ color: act.iconColor, fontVariationSettings: "'FILL' 1" }}>
                    {act.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium leading-snug" style={{ color: 'var(--on-surface)' }}>{act.title}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--outline)' }}>
                    {act.time} · {act.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Performance */}
      <motion.div {...fadeUp(0.18)} className="rounded-2xl p-6"
        style={{ background: 'white', border: '1px solid var(--outline-variant)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--on-surface)' }}>Team Performance</h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--on-surface-variant)' }}>Q4 2024 rankings</p>
          </div>
          <button
            className="text-sm font-semibold px-4 py-2 rounded-xl transition-all"
            style={{ background: 'var(--surface-container)', color: 'var(--on-surface-variant)' }}
          >
            View Report
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -2 }}
              className="rounded-xl p-4 cursor-default transition-all"
              style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white text-[9px] font-bold flex items-center justify-center"
                    style={{ color: 'var(--primary)', border: '1.5px solid var(--primary-container)' }}>
                    #{i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--on-surface)' }}>{member.name}</p>
                  <p className="text-xs" style={{ color: 'var(--outline)' }}>{member.role}</p>
                </div>
              </div>
              <div className="flex justify-between text-xs mb-3">
                <span style={{ color: 'var(--on-surface-variant)' }}>{member.deals} deals</span>
                <span className="font-semibold" style={{ color: 'var(--primary)' }}>{member.revenue}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface-container-high)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: 'var(--primary)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
