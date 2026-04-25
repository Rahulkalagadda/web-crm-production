import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const INITIAL_LEADS = [
  { id: 1, name: 'Julianne Smith', email: 'julianne.s@company.com', status: 'New Lead', statusCls: 'chip-indigo', agent: 'Sarah J.', agentImg: 'https://i.pravatar.cc/100?img=1', source: 'Zillow Premier', last: '2 min ago', interests: ['Penthouse', 'Modern'] },
  { id: 2, name: 'Robert Miller', email: 'robert.m@invest.com', status: 'In Contact', statusCls: 'chip-blue', agent: 'Marcus M.', agentImg: 'https://i.pravatar.cc/100?img=2', source: 'Direct Referral', last: '1 hr ago', interests: ['Waterfront'] },
  { id: 3, name: 'Emily Thompson', email: 'emily.t@web.me', status: 'Site Visit', statusCls: 'chip-emerald', agent: 'Elena R.', agentImg: 'https://i.pravatar.cc/100?img=3', source: 'Website', last: '5 min ago', interests: ['Loft', 'Industrial'] },
  { id: 4, name: 'Michael Chen', email: 'm.chen@startup.io', status: 'Negotiating', statusCls: 'chip-amber', agent: 'David K.', agentImg: 'https://i.pravatar.cc/100?img=4', source: 'Facebook Ads', last: '45 min ago', interests: ['Mountain View'] },
  { id: 5, name: 'Diana Voss', email: 'd.voss@capital.com', status: 'New Lead', statusCls: 'chip-indigo', agent: 'Sarah J.', agentImg: 'https://i.pravatar.cc/100?img=5', source: 'Instagram', last: '20 min ago', interests: ['Penthouse'] },
  { id: 6, name: 'Arthur Winston', email: 'a.winston@global.net', status: 'In Contact', statusCls: 'chip-blue', agent: 'Marcus M.', agentImg: 'https://i.pravatar.cc/100?img=6', source: 'Referral', last: '3 hrs ago', interests: ['Waterfront', 'Mansion'] },
];

const STATUSES = ['All', 'New Lead', 'In Contact', 'Site Visit', 'Negotiating'];

export const LeadsManagement: React.FC = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [selected, setSelected] = useState<number[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBudget, setNewBudget] = useState('$500K - $1M');
  const [newInterest, setNewInterest] = useState('Residential');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('add') === 'true') {
      setShowAddModal(true);
      // Clean up URL
      navigate('/leads-management', { replace: true });
    }
  }, [navigate]);

  const filtered = leads.filter(l =>
    (status === 'All' || l.status === status) &&
    (l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id: number) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const allSelected = filtered.length > 0 && filtered.every(l => selected.includes(l.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="p-8 space-y-6"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[30px] font-semibold" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Leads Management
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
            {leads.length} active leads · Updated just now
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all btn-secondary"
          >
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filters
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Add New Lead
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="card overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-6 p-6 border-b border-outline-variant bg-surface-container-low">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
            <input
              type="text"
              placeholder="Search by name, email, or interests..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-2xl text-sm font-medium outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* Status filters */}
          <div className="flex gap-1 p-1 bg-surface-container-highest rounded-2xl">
            {STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  status === s ? 'bg-white text-primary shadow-sm' : 'text-outline hover:text-on-surface'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            {selected.length > 0 && (
              <span className="text-[10px] font-black px-3 py-1.5 rounded-lg bg-primary-container text-primary uppercase tracking-widest">
                {selected.length} selected
              </span>
            )}
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-outline-variant text-outline hover:text-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="pl-6 pr-4 py-4 w-12 text-left">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={() => allSelected ? setSelected([]) : setSelected(filtered.map(l => l.id))}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                  />
                </th>
                {['Lead', 'Status', 'Assigned Agent', 'Source', 'Last Contact', 'Interests', ''].map(h => (
                  <th key={h} className="px-4 py-4 text-left text-[10px] font-black uppercase tracking-widest text-outline">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map(lead => (
                <tr
                  key={lead.id}
                  onClick={() => navigate('/lead-details')}
                  className="group hover:bg-primary-container/20 transition-colors cursor-pointer"
                >
                  <td className="pl-6 pr-4 py-4" onClick={e => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selected.includes(lead.id)}
                      onChange={() => toggleSelect(lead.id)}
                      className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{lead.name}</span>
                      <span className="text-xs text-outline font-medium">{lead.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`chip ${lead.statusCls}`}>{lead.status}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm" src={lead.agentImg} alt={lead.agent} />
                      <span className="text-xs font-bold text-on-surface-variant">{lead.agent}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-bold text-on-surface-variant">{lead.source}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-medium text-outline">{lead.last}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {lead.interests.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-lg font-black uppercase tracking-tighter bg-surface-container text-outline">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-outline hover:bg-white hover:text-primary hover:shadow-md transition-all">
                      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-8 py-6 bg-surface-container-low/30 border-t border-outline-variant">
          <p className="text-xs font-bold text-outline uppercase tracking-widest">
            Showing <span className="text-on-surface">{filtered.length}</span> of <span className="text-on-surface">{leads.length}</span> Elite Leads
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-outline hover:text-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-10 h-10 flex items-center justify-center rounded-xl text-xs font-black transition-all ${
                p === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-outline-variant text-outline hover:text-primary hover:border-primary shadow-sm'
              }`}>
                {p}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-outline hover:text-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add Lead Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
              onClick={() => setShowAddModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 space-y-8">
                <header>
                  <h3 className="text-2xl font-black text-on-surface">Add New Elite Lead</h3>
                  <p className="text-sm font-medium text-outline mt-1">Populate lead information to begin the conversion process.</p>
                </header>

                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Full Name</label>
                    <input value={newName} onChange={e => setNewName(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="e.g. Julianne Smith" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Email Address</label>
                    <input value={newEmail} onChange={e => setNewEmail(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="name@company.com" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Budget Range</label>
                    <select value={newBudget} onChange={e => setNewBudget(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all appearance-none">
                      <option>$500K - $1M</option>
                      <option>$1M - $5M</option>
                      <option>$5M - $20M</option>
                      <option>$20M+</option>
                    </select>
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Interest Type</label>
                    <select value={newInterest} onChange={e => setNewInterest(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all appearance-none">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Investment</option>
                      <option>Land</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-all">Cancel</button>
                  <button onClick={() => {
                    if (!newName || !newEmail) return;
                    const newLead = {
                      id: leads.length + 1,
                      name: newName,
                      email: newEmail,
                      status: 'New Lead',
                      statusCls: 'chip-indigo',
                      agent: 'Sarah J.',
                      agentImg: 'https://i.pravatar.cc/100?img=1',
                      source: 'Manual Entry',
                      last: 'Just now',
                      interests: [newInterest]
                    };
                    setLeads([newLead, ...leads]);
                    setNewName('');
                    setNewEmail('');
                    setNewBudget('$500K - $1M');
                    setNewInterest('Residential');
                    setShowAddModal(false);
                  }} className="flex-1 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Create Lead</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
