import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Deal {
  id: string;
  client: string;
  property: string;
  value: number;
  agent: string;
  agentImg: string;
  tag?: string;
  tagCls?: string;
  stage: string;
}

const AGENT_IMGS: Record<string, string> = {
  'Sarah K.': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfoVCnPQ1c-8gTa6pZpUn0dmOYqSuyJnla42EJKQZ80m9AZtW9tLMWdgbRcOlPbzGH1Yrq7jyVX7Unn1LR2CypB4PUlEfwrNEQ1Ss4DdAfFMOk_4U2MJLw6Dv0HeSja8H68LUuBDRANlpYTCfmAQq8NNTrq_HMPXGVMgD-oODSbadXQPxDXTjwwvJSTAzq5k9C6f5GHaVhQy4TnFC-3vAYCH8lRkbFF4BWHijCajQwh7EiLHDTlR5zYQBfbCkDVp7VmQQHUy77VgQ',
  'Marcus V.': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhjsQABfwkGKYajeQipZHHGOj8m5cKdwrllaof9RBkVtiCOwclhOdiOgmxZo_hDg8AhER3fvUBDHUAfT5dkVEFKtO0LAZo3V4Ci1CpkT76IU3sA_dPejRs7kBPYrFkcoRvNBLLZsSU-A11Q5nvWCfExZ5_SH94gdEMm9D9I07lzzCRNz8eEiZXC49QYQmaDYTg9z3KaNSDkm6W_xiPnxERXVhOxDaMRiYgSltNwVCwZ9CAmPkzWBBcxXhWv9rGwqTo86-qBsztwbA',
  'Alex S.': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNBCE1hjsYaRuzjpyX7FmTjgD0bazQvxyCDSx_1rMDOxHk3fndpuohZSlahSSJUm_muIS3j1TTvrHrAfaqoPOnkvU3XjjEzaQjJfnRmNhaNbrTGqIL2D4b11y0CQXwkiknN5-HMqwdku5OJ4FgxswVhVnfYOoqSOv41X6uFYxKgo4sR-FqEuMihHyfRCcrxPVsk26YysqrChQQHbld1LOsfgHo3S86aAdgLf-B03_bGNBg7ioIgN5Q1S86WSM3btULhhe3TkgimDA',
};

const INITIAL_DEALS: Deal[] = [
  { id: 'd1', client: 'Jonathan Meyers', property: 'Penthouse at Sky Tower', value: 450000, agent: 'Sarah K.', agentImg: AGENT_IMGS['Sarah K.'], stage: 'New' },
  { id: 'd2', client: 'Elena Rodriguez', property: 'Modern Villa Estate', value: 750000, agent: 'Marcus V.', agentImg: AGENT_IMGS['Marcus V.'], stage: 'New' },
  { id: 'd3', client: 'Arthur Winston', property: 'Waterfront Mansion', value: 2800000, agent: 'Alex S.', agentImg: AGENT_IMGS['Alex S.'], tag: 'Follow up', tagCls: 'chip-amber', stage: 'Contacted' },
  { id: 'd4', client: 'Global Tech Inc.', property: 'Silicon Park HQ', value: 4250000, agent: 'Sarah K.', agentImg: AGENT_IMGS['Sarah K.'], tag: 'Scheduled', tagCls: 'chip-emerald', stage: 'Site Visit' },
  { id: 'd5', client: 'The Sterling Group', property: 'Retail Portfolio A', value: 8400000, agent: 'Alex S.', agentImg: AGENT_IMGS['Alex S.'], tag: 'Critical', tagCls: 'chip-red', stage: 'Negotiation' },
  { id: 'd6', client: 'Linda Chen', property: 'Luxury Loft 402', value: 890000, agent: 'Marcus V.', agentImg: AGENT_IMGS['Marcus V.'], stage: 'Closed' },
];

const COLUMNS = [
  { id: 'New', dot: '#4F46E5', countCls: 'chip-indigo' },
  { id: 'Contacted', dot: '#f59e0b', countCls: 'chip-amber' },
  { id: 'Site Visit', dot: '#10b981', countCls: 'chip-emerald' },
  { id: 'Negotiation', dot: '#ef4444', countCls: 'chip-red' },
  { id: 'Closed', dot: '#9ca3af', countCls: '' },
];

const fmt = (v: number) => v >= 1000000 ? `$${(v / 1000000).toFixed(2)}M` : `$${(v / 1000).toFixed(0)}K`;

export const Pipeline: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ client: '', property: '', value: '', agent: 'Sarah K.' });

  const getDeals = (col: string) => deals.filter(d => d.stage === col);
  const getTotal = (col: string) => deals.filter(d => d.stage === col).reduce((s, d) => s + d.value, 0);
  const totalActive = deals.filter(d => d.stage !== 'Closed').reduce((s, d) => s + d.value, 0);

  const handleDrop = (col: string) => {
    if (draggingId) setDeals(p => p.map(d => d.id === draggingId ? { ...d, stage: col } : d));
    setDraggingId(null);
    setDragOverCol(null);
  };

  const addDeal = () => {
    if (!form.client || !form.property || !form.value) return;
    setDeals(p => [...p, {
      id: `d${Date.now()}`,
      client: form.client,
      property: form.property,
      value: parseFloat(form.value),
      agent: form.agent,
      agentImg: AGENT_IMGS[form.agent] || AGENT_IMGS['Sarah K.'],
      stage: 'New',
    }]);
    setForm({ client: '', property: '', value: '', agent: 'Sarah K.' });
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="p-8 flex flex-col"
      style={{ fontFamily: 'Inter, sans-serif', height: 'calc(100vh - 4rem)' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-8 shrink-0">
        <div>
          <h1 className="text-[30px] font-semibold" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Sales Pipeline
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
            Active pipeline: {fmt(totalActive)} · {deals.filter(d => d.stage !== 'Closed').length} live deals
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ background: 'white', border: '1px solid var(--outline-variant)', color: 'var(--on-surface-variant)' }}
          >
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filters
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ background: 'white', border: '1px solid var(--outline-variant)', color: 'var(--on-surface-variant)' }}
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Q4 2024
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--primary)', boxShadow: '0 4px 14px rgba(79,70,229,0.25)' }}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Deal
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-5 flex-1 overflow-x-auto overflow-y-hidden pb-4">
        {COLUMNS.map(col => {
          const colDeals = getDeals(col.id);
          const colTotal = getTotal(col.id);
          const isOver = dragOverCol === col.id;

          return (
            <div
              key={col.id}
              className="w-[280px] shrink-0 flex flex-col gap-3"
              onDragOver={e => { e.preventDefault(); setDragOverCol(col.id); }}
              onDrop={() => handleDrop(col.id)}
              onDragLeave={() => setDragOverCol(null)}
            >
              {/* Column header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: col.dot }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--on-surface)' }}>{col.id}</span>
                  <span className={`chip ${col.countCls}`} style={{ fontSize: '10px', padding: '1px 6px' }}>{colDeals.length}</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: 'var(--outline)' }}>{fmt(colTotal)}</span>
              </div>

              {/* Cards drop zone */}
              <div
                className="flex flex-col gap-3 flex-1 min-h-[80px] rounded-xl p-2 transition-all"
                style={{
                  background: isOver ? 'var(--primary-container)' : 'transparent',
                  border: isOver ? '2px dashed var(--primary)' : '2px dashed transparent',
                }}
              >
                <AnimatePresence>
                  {colDeals.map(deal => (
                    <motion.div
                      key={deal.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      draggable
                      onDragStart={() => setDraggingId(deal.id)}
                      onDragEnd={() => { setDraggingId(null); setDragOverCol(null); }}
                      className="rounded-xl p-4 cursor-grab active:cursor-grabbing group transition-all"
                      style={{
                        background: draggingId === deal.id ? 'var(--surface-container)' : 'white',
                        border: '1px solid var(--outline-variant)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                        opacity: draggingId === deal.id ? 0.5 : 1,
                      }}
                      whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-semibold" style={{ color: 'var(--on-surface)' }}>{deal.client}</h4>
                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity cursor-move" style={{ color: 'var(--outline)' }}>drag_indicator</span>
                      </div>
                      <p className="text-xs mb-1" style={{ color: 'var(--on-surface-variant)' }}>{deal.property}</p>
                      <p className="text-sm font-bold mb-3" style={{ color: 'var(--primary)' }}>{fmt(deal.value)}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <img className="w-5 h-5 rounded-full object-cover" src={deal.agentImg} alt={deal.agent} />
                          <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--outline)' }}>{deal.agent}</span>
                        </div>
                        {deal.tag && <span className={`chip ${deal.tagCls}`} style={{ fontSize: '10px', padding: '1px 6px' }}>{deal.tag}</span>}
                      </div>

                      <div className="flex gap-1 mt-3 pt-3" style={{ borderTop: '1px solid var(--outline-variant)' }}>
                        {[{ icon: 'call', label: 'Call' }, { icon: 'mail', label: 'Email' }].map(a => (
                          <button key={a.icon} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
                            style={{ color: 'var(--on-surface-variant)' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-container)'; (e.currentTarget as HTMLElement).style.color = 'var(--primary)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--on-surface-variant)'; }}
                          >
                            <span className="material-symbols-outlined text-[14px]">{a.icon}</span>
                            {a.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Empty drop zone */}
                {colDeals.length === 0 && !isOver && (
                  <div className="flex-1 flex items-center justify-center py-8 rounded-xl text-center"
                    style={{ border: '2px dashed var(--outline-variant)', color: 'var(--outline)' }}>
                    <div>
                      <span className="material-symbols-outlined text-2xl block mb-1">add</span>
                      <span className="text-xs font-medium">Add Card</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAB */}
      <motion.button
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white z-40"
        style={{ background: 'var(--primary)', boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}
      >
        <span className="material-symbols-outlined text-[24px]">person_add</span>
      </motion.button>

      {/* Add Deal Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md"
              style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--on-surface)' }}>Add New Deal</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--on-surface-variant)' }}>Creates in the New Inquiry stage.</p>

              <div className="space-y-4">
                {[
                  { label: 'Client Name', key: 'client', placeholder: 'e.g. Jonathan Meyers' },
                  { label: 'Property', key: 'property', placeholder: 'e.g. Penthouse at Sky Tower' },
                  { label: 'Deal Value ($)', key: 'value', placeholder: 'e.g. 4500000' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--outline)' }}>{f.label}</label>
                    <input
                      placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{ background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', fontFamily: 'Inter' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 2px rgba(79,70,229,0.15)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--outline-variant)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--outline)' }}>Agent</label>
                  <select
                    value={form.agent}
                    onChange={e => setForm(p => ({ ...p, agent: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', fontFamily: 'Inter' }}
                  >
                    {Object.keys(AGENT_IMGS).map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ border: '1px solid var(--outline-variant)', color: 'var(--on-surface-variant)' }}>
                  Cancel
                </button>
                <button onClick={addDeal}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'var(--primary)', boxShadow: '0 4px 14px rgba(79,70,229,0.25)' }}>
                  Create Deal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
