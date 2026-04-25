import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LeadDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showStageModal, setShowStageModal] = useState(false);
  const [currentStage, setCurrentStage] = useState('Qualified');

  const tabs = ['Overview', 'Activities', 'Tasks', 'Documents'];
  const stages = ['New Lead', 'In Contact', 'Qualified', 'Negotiation', 'Closed'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 max-w-7xl mx-auto w-full"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Lead Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img className="w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white" src="https://i.pravatar.cc/200?img=32" alt="Julianne Smith" />
            <div className="absolute -bottom-2 -right-2 bg-secondary-container text-secondary px-2.5 py-1 rounded-xl text-[10px] font-black border border-secondary/10 uppercase tracking-widest shadow-lg">Verified</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-black text-on-surface tracking-tight">Julianne Smith</h2>
              <span className="bg-primary-container text-primary text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest">Buyer</span>
            </div>
            <div className="flex items-center gap-4 text-outline font-medium text-sm">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-primary">payments</span> Budget: $1.2M</span>
              <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-primary">location_on</span> Los Angeles, CA</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary py-2.5 px-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">history_edu</span> Log Activity
          </button>
          <button className="btn-secondary py-2.5 px-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">person_add</span> Assign
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowStageModal(!showStageModal)}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {currentStage} <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <AnimatePresence>
              {showStageModal && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-outline-variant shadow-2xl z-50 p-2"
                >
                  {stages.map(s => (
                    <button
                      key={s}
                      onClick={() => { setCurrentStage(s); setShowStageModal(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${currentStage === s ? 'bg-primary-container text-primary' : 'hover:bg-surface-container'}`}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Activity/Details Column */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Tabs */}
          <div className="card overflow-hidden">
            <div className="flex border-b border-outline-variant px-6 bg-surface-container-low">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-black text-xs uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-primary' : 'text-outline hover:text-on-surface'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'Overview' && (
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                    {[
                      { label: 'Lead Source', val: 'Zillow Premier Agent', icon: 'language' },
                      { label: 'Interested Property', val: '742 Evergreen Terrace, Beverly Hills', icon: 'home_work', link: true },
                      { label: 'Pre-Approval Status', val: 'Verified $1.5M', icon: 'verified', status: true },
                      { label: 'Expected Close Date', val: 'Oct 12, 2024', icon: 'calendar_today' },
                    ].map(item => (
                      <div key={item.label} className="space-y-2">
                        <p className="text-[10px] font-black text-outline uppercase tracking-widest">{item.label}</p>
                        <p className={`text-sm font-bold flex items-center gap-2 ${item.link ? 'text-primary hover:underline cursor-pointer' : 'text-on-surface'}`}>
                          {item.status ? (
                            <span className="inline-flex items-center gap-1.5 bg-secondary-container text-secondary px-2.5 py-0.5 rounded-lg border border-secondary/10">
                               <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {item.val}
                            </span>
                          ) : (
                            <><span className="material-symbols-outlined text-primary/40 text-lg">{item.icon}</span> {item.val}</>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-outline-variant">
                    <h3 className="text-sm font-black text-on-surface uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">notes</span> Internal Notes
                    </h3>
                    <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant border-dashed">
                      <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic">
                        "Julianne is looking for a home with at least 4 bedrooms and a dedicated home office. She prioritizes neighborhoods with high-rated school districts. She is currently renting in Santa Monica and is ready to move as soon as the right property hits the market."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/100?img=11" alt="Mark Spencer" />
                        <span className="text-xs font-bold text-outline">Mark Spencer • 2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab !== 'Overview' && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-3xl text-outline-variant">upcoming</span>
                  </div>
                  <p className="text-sm font-bold text-on-surface">No {activeTab.toLowerCase()} found</p>
                  <p className="text-xs text-outline mt-1">Start by adding a new {activeTab.slice(0,-1).toLowerCase()} for this lead.</p>
                </div>
              )}
            </div>
          </div>

          {/* Timeline/Activity Preview */}
          <div className="card p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-black text-on-surface uppercase tracking-widest">Recent Activity Feed</h3>
              <button className="text-primary text-xs font-black uppercase tracking-widest hover:opacity-80">Full History</button>
            </div>
            <div className="space-y-10 relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>

              {[
                { title: 'Outbound Call Completed', desc: 'Discussed floor plans for the Beverly Hills property. Lead is very interested.', time: 'Today • 10:45 AM', color: 'bg-primary' },
                { title: 'Email Sent: New Listing Alert', desc: null, time: 'Yesterday • 02:15 PM', color: 'bg-outline-variant' },
                { title: 'Stage Changed: Discovery → Qualified', desc: null, time: '3 days ago • 09:00 AM', color: 'bg-secondary' },
              ].map((act, i) => (
                <div key={i} className="relative flex gap-6 pl-12">
                  <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-white ring-4 ${act.color === 'bg-primary' ? 'ring-primary-container' : 'ring-surface'} ${act.color}`}></div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{act.title}</p>
                    {act.desc && <p className="text-xs text-on-surface-variant font-medium mt-1 leading-relaxed">{act.desc}</p>}
                    <p className="text-[10px] text-outline mt-2 uppercase tracking-widest font-black">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Contact Quick Info */}
          <div className="card p-8">
            <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-6">Contact Channels</h4>
            <div className="space-y-6">
              {[
                { label: 'Email Address', val: 'j.smith@realestatepro.com', icon: 'mail' },
                { label: 'Phone Number', val: '+1 (310) 555-0198', icon: 'call' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-outline group-hover:bg-primary-container group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-outline uppercase tracking-tight">{c.label}</p>
                    <p className="text-sm font-bold text-on-surface mt-0.5 group-hover:text-primary transition-colors">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8 pt-8 border-t border-outline-variant">
              <button className="btn-secondary py-2 font-black text-[10px] uppercase tracking-widest">Copy Profile</button>
              <button className="btn-secondary py-2 font-black text-[10px] uppercase tracking-widest">Share Lead</button>
            </div>
          </div>

          {/* Lead Score Bento */}
          <div className="bg-primary rounded-3xl p-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Lead Engagement</h4>
                <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-md">
                   <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black">94</span>
                <span className="text-indigo-200 text-sm font-bold">/ 100</span>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed font-medium">
                Extremely active. Engaged with 12 listings and opened 80% of communication in the last 7 days.
              </p>
              <div className="mt-6 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-secondary-fixed shadow-[0_0_15px_rgba(111,251,190,0.5)]"></motion.div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Upcoming Tasks */}
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-black text-outline uppercase tracking-widest">Scheduled Tasks</h4>
              <button className="w-8 h-8 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-primary transition-all">
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange-600 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">event_repeat</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Follow up on pre-approval</p>
                  <p className="text-[11px] font-bold text-orange-600 mt-1 uppercase tracking-tight">Due: Tomorrow, 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant opacity-60 grayscale">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-outline shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">check</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface line-through">Send property brochure</p>
                  <p className="text-[11px] font-bold text-outline mt-1 uppercase tracking-tight">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
