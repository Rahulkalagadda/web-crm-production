import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_EMPLOYEES = [
  { id: 1, name: 'Alexander Wright', role: 'Principal Owner', email: 'alex@estateflow.com', status: 'Active', statusCls: 'chip-emerald', type: 'Admin', img: 'https://i.pravatar.cc/100?img=12', deals: 45, performance: '98%' },
  { id: 2, name: 'Sarah Jenkins', role: 'Luxury Specialist', email: 'sarah.j@estateflow.com', status: 'Active', statusCls: 'chip-emerald', type: 'Agent', img: 'https://i.pravatar.cc/100?img=44', deals: 28, performance: '94%' },
  { id: 3, name: 'Marcus Thorne', role: 'Senior Broker', email: 'marcus.t@estateflow.com', status: 'Active', statusCls: 'chip-emerald', type: 'Agent', img: 'https://i.pravatar.cc/100?img=33', deals: 32, performance: '91%' },
  { id: 4, name: 'Elena Ross', role: 'Operations Manager', email: 'elena.r@estateflow.com', status: 'On Leave', statusCls: 'chip-amber', type: 'Manager', img: 'https://i.pravatar.cc/100?img=48', deals: 0, performance: 'N/A' },
  { id: 5, name: 'David Kim', role: 'Junior Associate', email: 'david.k@estateflow.com', status: 'Active', statusCls: 'chip-emerald', type: 'Agent', img: 'https://i.pravatar.cc/100?img=51', deals: 12, performance: '88%' },
];

export const EmployeeManagement: React.FC = () => {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [search, setSearch] = useState('');
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Form State
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Luxury Specialist');
  const [access, setAccess] = useState('Agent');

  const filtered = employees.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || 
    e.role.toLowerCase().includes(search.toLowerCase())
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
            Elite Team Management
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
            Manage permissions, track performance, and grow your high-velocity team.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
            <input
              type="text"
              placeholder="Search team members..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-outline-variant rounded-xl text-sm font-medium outline-none focus:border-primary transition-all shadow-sm"
            />
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Invite Member
          </button>
        </div>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total Members', val: '24', icon: 'groups', delta: '+2 this month' },
          { label: 'Active Agents', val: '18', icon: 'badge', delta: '85% active' },
          { label: 'Pending Invites', val: '3', icon: 'mail', delta: 'Requires action' },
          { label: 'Avg. Performance', val: '92%', icon: 'trending_up', delta: '+4.2% YoY' },
        ].map(stat => (
          <div key={stat.label} className="card p-6 flex items-start justify-between bg-white border border-outline-variant">
            <div>
              <p className="text-[10px] font-black text-outline uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-on-surface mt-1">{stat.val}</p>
              <p className="text-[11px] font-bold text-primary mt-2">{stat.delta}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
              <span className="material-symbols-outlined text-xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Team Table */}
      <div className="card overflow-hidden bg-white border border-outline-variant">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50 border-b border-outline-variant">
              {['Member', 'Role & Permissions', 'Status', 'Performance', 'Activity', ''].map(h => (
                <th key={h} className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-outline">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filtered.map(emp => (
              <tr key={emp.id} className="group hover:bg-primary-container/10 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-2xl object-cover ring-2 ring-white shadow-md" src={emp.img} alt={emp.name} />
                    <div>
                      <p className="text-sm font-black text-on-surface group-hover:text-primary transition-colors">{emp.name}</p>
                      <p className="text-xs text-outline font-medium">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-on-surface-variant">{emp.role}</span>
                    <span className={`text-[9px] w-fit px-1.5 py-0.5 rounded-md font-black uppercase tracking-widest ${
                      emp.type === 'Admin' ? 'bg-primary/10 text-primary' : 'bg-surface-container text-outline'
                    }`}>
                      {emp.type}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`chip ${emp.statusCls}`}>{emp.status}</span>
                </td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-3">
                     <span className="text-sm font-black text-on-surface">{emp.performance}</span>
                     <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: emp.performance === 'N/A' ? '0%' : emp.performance }} className="h-full bg-primary" />
                     </div>
                   </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs font-bold text-on-surface-variant">{emp.deals} Deals</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-outline hover:bg-white hover:text-primary hover:shadow-md transition-all">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invite Modal */}
      <AnimatePresence>
        {showInviteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
              onClick={() => setShowInviteModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 space-y-8">
                <header>
                  <h3 className="text-2xl font-black text-on-surface">Invite Elite Member</h3>
                  <p className="text-sm font-medium text-outline mt-1">Add high-performing talent to your workspace.</p>
                </header>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Email Address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="agent@estateflow.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-outline">Assigned Role</label>
                      <select value={role} onChange={e => setRole(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all appearance-none">
                        <option>Luxury Specialist</option>
                        <option>Senior Broker</option>
                        <option>Operations Manager</option>
                        <option>Junior Associate</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-outline">Access Level</label>
                      <select value={access} onChange={e => setAccess(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all appearance-none">
                        <option>Agent</option>
                        <option>Manager</option>
                        <option>Admin</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setShowInviteModal(false)} className="flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-all">Cancel</button>
                  <button onClick={() => {
                    if (!email) return;
                    const newEmp = {
                      id: employees.length + 1,
                      name: email.split('@')[0].split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                      role: role,
                      email: email,
                      status: 'Invited',
                      statusCls: 'chip-amber',
                      type: access,
                      img: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`,
                      deals: 0,
                      performance: 'N/A'
                    };
                    setEmployees([...employees, newEmp]);
                    setEmail('');
                    setShowInviteModal(false);
                  }} className="flex-1 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Send Invitation</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
