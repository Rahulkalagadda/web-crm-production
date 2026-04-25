import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const PropertyDetails: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  const property = {
    id: 1,
    name: 'Sky Tower Penthouse',
    location: '742 Evergreen Terrace, Downtown Los Angeles, CA 90012',
    price: '$4,250,000',
    status: 'Available',
    statusCls: 'chip-emerald',
    type: 'Penthouse',
    sqft: '4,500 sqft',
    beds: 4,
    baths: 5,
    yearBuilt: 2022,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['High Ceilings', 'Floor-to-Ceiling Windows', 'Private Elevator', 'Wine Cellar', 'Smart Home Integration', 'Concierge Service'],
    description: 'Experience unparalleled luxury in this breathtaking Sky Tower Penthouse. Perched on the 64th floor, this architectural masterpiece offers panoramic views of the Los Angeles skyline and the Pacific Ocean. Featuring bespoke finishes, a chef-grade kitchen, and a private infinity pool on the terrace, this residence is the pinnacle of elite urban living.',
    assignedAgent: {
      name: 'Sarah Jenkins',
      role: 'Luxury Specialist',
      img: 'https://i.pravatar.cc/100?img=44'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="p-8 max-w-7xl mx-auto w-full"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/properties')}
            className="w-12 h-12 rounded-2xl bg-white border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-black text-on-surface tracking-tight">{property.name}</h2>
              <span className={`chip ${property.statusCls}`}>{property.status}</span>
            </div>
            <p className="text-outline font-medium text-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">location_on</span> {property.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary py-2.5 px-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">edit</span> Edit Property
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">share</span> Share Listing
          </button>
        </div>
      </section>

      {/* Hero Image Gallery */}
      <section className="grid grid-cols-12 gap-4 mb-8 h-[500px]">
        <div className="col-span-8 rounded-3xl overflow-hidden shadow-2xl relative group">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={property.images[0]} alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={property.images[1]} alt="Gallery 1" />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg group relative">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={property.images[2]} alt="Gallery 2" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-white font-black text-sm uppercase tracking-widest">+12 More Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Key Stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Price', val: property.price, icon: 'payments' },
              { label: 'Square Feet', val: property.sqft, icon: 'square_foot' },
              { label: 'Bedrooms', val: property.beds, icon: 'bed' },
              { label: 'Bathrooms', val: property.baths, icon: 'bathtub' },
            ].map(stat => (
              <div key={stat.label} className="card p-5 text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-2xl">{stat.icon}</span>
                <p className="text-[10px] font-black text-outline uppercase tracking-widest">{stat.label}</p>
                <p className="text-lg font-black text-on-surface mt-1">{stat.val}</p>
              </div>
            ))}
          </div>

          {/* Details & Description */}
          <div className="card overflow-hidden">
             <div className="flex border-b border-outline-variant px-6 bg-surface-container-low">
              {['Overview', 'Amenities', 'Floor Plans', 'History'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-black text-xs uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-primary' : 'text-outline hover:text-on-surface'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="propTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
            <div className="p-8">
              {activeTab === 'Overview' && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-on-surface">About the Residence</h3>
                    <p className="text-on-surface-variant font-medium leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-outline-variant grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-on-surface uppercase tracking-widest">Property Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-outline">Type</span>
                          <span className="text-on-surface">{property.type}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-outline">Year Built</span>
                          <span className="text-on-surface">{property.yearBuilt}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-outline">Status</span>
                          <span className="text-on-surface">{property.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-on-surface uppercase tracking-widest">Elite Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {property.features.map(f => (
                          <span key={f} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-outline">
                            {f}
                          </span>
                        ))}
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
                  <p className="text-sm font-bold text-on-surface">{activeTab} Details Coming Soon</p>
                  <p className="text-xs text-outline mt-1">Our team is preparing high-resolution assets for this property.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Assigned Agent */}
          <div className="card p-8 text-center">
            <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-6">Listing Agent</h4>
            <div className="flex flex-col items-center gap-4">
              <img className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl" src={property.assignedAgent.img} alt={property.assignedAgent.name} />
              <div>
                <h5 className="text-lg font-black text-on-surface">{property.assignedAgent.name}</h5>
                <p className="text-sm font-bold text-primary">{property.assignedAgent.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <button className="btn-secondary py-3 text-[10px] font-black uppercase tracking-widest">Call Agent</button>
              <button className="bg-primary text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/10">Inquiry</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-8">
            <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-6">Elite Management</h4>
            <div className="space-y-4">
              {[
                { label: 'Schedule Showing', icon: 'event' },
                { label: 'Market Valuation', icon: 'trending_up' },
                { label: 'Document Vault', icon: 'folder_open' },
                { label: 'Compliance Review', icon: 'verified_user' },
              ].map(action => (
                <button key={action.label} className="w-full flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant hover:border-primary group transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-outline group-hover:text-primary shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-on-surface">{action.label}</span>
                  <span className="material-symbols-outlined ml-auto text-sm text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
              ))}
            </div>
          </div>

          {/* Map Preview */}
          <div className="card h-64 overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" alt="Map" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-on-surface">Open Interactive Map</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
