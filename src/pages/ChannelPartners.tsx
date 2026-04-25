import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PARTNERS = [
  { id: 1, name: 'Vanguard Realty Group', type: 'Brokerage', status: 'Active', statusCls: 'chip-emerald', volume: '$120M', commission: '2.5%', agents: 45, logo: 'https://logo.clearbit.com/vanguard.com', contact: 'Robert Vance' },
  { id: 2, name: 'Skyline Capital', type: 'Investment Firm', status: 'Active', statusCls: 'chip-emerald', volume: '$85M', commission: '3.0%', agents: 12, logo: 'https://logo.clearbit.com/skyline.com', contact: 'Sarah Miller' },
  { id: 3, name: 'Prism Residential', type: 'Development', status: 'Pending', statusCls: 'chip-amber', volume: '$0M', commission: '2.8%', agents: 0, logo: 'https://logo.clearbit.com/prism.com', contact: 'Alex Reed' },
  { id: 4, name: 'Nexus Estates', type: 'Agency', status: 'Inactive', statusCls: 'chip-red', volume: '$45M', commission: '2.5%', agents: 28, logo: 'https://logo.clearbit.com/nexus.com', contact: 'Elena Ross' },
  { id: 5, name: 'Global Properties', type: 'Brokerage', status: 'Active', statusCls: 'chip-emerald', volume: '$210M', commission: '2.2%', agents: 85, logo: 'https://logo.clearbit.com/global.com', contact: 'Marcus Thorne' },
];

export const ChannelPartners: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<typeof PARTNERS[0] | null>(null);

  const filtered = PARTNERS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="p-8 space-y-8"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[30px] font-semibold" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Channel Partners
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
            Manage your global network of high-performance partner agencies.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-72">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
            <input
              type="text"
              placeholder="Search partners or types..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-outline-variant rounded-xl text-sm font-medium outline-none focus:border-primary transition-all shadow-sm"
            />
          </div>
          <button
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">handshake</span>
            New Partnership
          </button>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(partner => (
          <motion.div
            key={partner.id}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
            onClick={() => setSelectedPartner(partner)}
            className="card p-6 cursor-pointer group bg-white border border-outline-variant hover:border-primary transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-surface-container overflow-hidden border border-outline-variant shadow-sm flex items-center justify-center p-2">
                 {/* Fallback for logo */}
                 <span className="material-symbols-outlined text-outline text-3xl">corporate_fare</span>
              </div>
              <span className={`chip ${partner.statusCls}`}>{partner.status}</span>
            </div>
            <h3 className="text-lg font-black text-on-surface mb-1 group-hover:text-primary transition-colors">{partner.name}</h3>
            <p className="text-xs font-bold text-outline uppercase tracking-widest mb-6">{partner.type}</p>
            
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant border-dashed">
              <div>
                <p className="text-[10px] font-black text-outline uppercase tracking-tight">Trade Volume</p>
                <p className="text-sm font-black text-on-surface">{partner.volume}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-outline uppercase tracking-tight">Commission</p>
                <p className="text-sm font-black text-primary">{partner.commission}</p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">groups</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">{partner.agents} Agents</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Partner Detail Drawer (Modal) */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
              onClick={() => setSelectedPartner(null)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl h-full bg-white shadow-2xl flex flex-col"
            >
              <div className="p-10 flex-1 overflow-y-auto">
                <header className="flex items-start justify-between mb-12">
                   <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-3xl bg-surface-container flex items-center justify-center border border-outline-variant shadow-lg">
                        <span className="material-symbols-outlined text-4xl text-outline">corporate_fare</span>
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-on-surface tracking-tight">{selectedPartner.name}</h2>
                        <div className="flex items-center gap-3 mt-2">
                          <span className={`chip ${selectedPartner.statusCls}`}>{selectedPartner.status}</span>
                          <span className="text-xs font-bold text-outline uppercase tracking-widest">{selectedPartner.type}</span>
                        </div>
                      </div>
                   </div>
                   <button onClick={() => setSelectedPartner(null)} className="w-10 h-10 rounded-xl hover:bg-surface-container flex items-center justify-center transition-colors">
                     <span className="material-symbols-outlined">close</span>
                   </button>
                </header>

                <div className="grid grid-cols-2 gap-8 mb-12">
                   {[
                     { label: 'Primary Contact', val: selectedPartner.contact, icon: 'person' },
                     { label: 'Commission Rate', val: selectedPartner.commission, icon: 'percent' },
                     { label: 'Active Agents', val: selectedPartner.agents, icon: 'badge' },
                     { label: 'Total Sales Vol.', val: selectedPartner.volume, icon: 'trending_up' },
                   ].map(item => (
                     <div key={item.label} className="p-6 bg-surface-container-low rounded-3xl border border-outline-variant">
                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm mb-4">
                         <span className="material-symbols-outlined text-lg">{item.icon}</span>
                       </div>
                       <p className="text-[10px] font-black text-outline uppercase tracking-widest">{item.label}</p>
                       <p className="text-lg font-black text-on-surface mt-1">{item.val}</p>
                     </div>
                   ))}
                </div>

                <section className="space-y-6">
                  <h3 className="text-sm font-black text-on-surface uppercase tracking-widest">Recent Performance</h3>
                  <div className="card p-6 bg-primary text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                         <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Target Achievement</p>
                         <span className="text-xs font-bold">84%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                        <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 1 }} className="h-full bg-secondary-fixed shadow-[0_0_12px_rgba(111,251,190,0.5)]" />
                      </div>
                      <p className="text-xs font-medium text-indigo-100">Partner is currently $12M ahead of Q4 targets.</p>
                    </div>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>

                  <div className="space-y-4 pt-6">
                     <h4 className="text-[10px] font-black text-outline uppercase tracking-widest">Upcoming Reviews</h4>
                     <div className="p-4 bg-white border border-outline-variant rounded-2xl flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
                         <span className="material-symbols-outlined text-sm">calendar_month</span>
                       </div>
                       <div>
                         <p className="text-sm font-bold text-on-surface">Annual Performance Review</p>
                         <p className="text-xs text-outline font-medium">Dec 15, 2024 • 10:00 AM</p>
                       </div>
                       <button className="ml-auto text-primary text-xs font-black uppercase tracking-widest">Reschedule</button>
                     </div>
                  </div>
                </section>
              </div>

              <div className="p-8 border-t border-outline-variant bg-surface-container-low flex gap-4">
                <button className="flex-1 py-4 border border-outline-variant rounded-2xl font-black text-xs uppercase tracking-widest text-on-surface hover:bg-white transition-all">Send Message</button>
                <button className="flex-1 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Export Report</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
