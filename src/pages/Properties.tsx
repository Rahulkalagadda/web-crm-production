import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { propertiesService, type Property } from '../services/properties.service';

export const Properties: React.FC = () => {
  const navigate = useNavigate();
  const [propertyList, setPropertyList] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState('');

  // Form State
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [sqft, setSqft] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('Single Family');

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const res = await propertiesService.getProperties();
        if (res.success) setPropertyList(res.data);
      } catch (error) {
        console.error('Failed to fetch properties', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filtered = propertyList.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as any }}
      className="p-8 space-y-8"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[30px] font-semibold" style={{ color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
            Property Inventory
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
            {propertyList.length} exclusive listings in the portfolio
          </p>
        </div>
        <div className="flex gap-3">
           <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-outline-variant rounded-xl text-sm font-medium outline-none focus:border-primary transition-all shadow-sm"
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">add_home</span>
            Add Property
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full p-20 text-center font-bold text-outline">Loading Property Portfolio...</div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full p-20 text-center font-bold text-outline">No properties found.</div>
        ) : (
          filtered.map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/properties/${property.id}`)}
              className="card group overflow-hidden cursor-pointer bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={property.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'} 
                  alt={property.name} 
                />
                <div className="absolute top-4 left-4">
                  <span className={`chip ${property.status === 'Sold' ? 'chip-red' : property.status === 'Pending' ? 'chip-amber' : 'chip-emerald'} shadow-lg backdrop-blur-md`}>
                    {property.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-9 h-9 bg-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center hover:bg-white hover:text-red-500 transition-all border border-white/30">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <button className="w-full py-3 bg-white text-on-surface rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl">View Details</button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-black text-on-surface group-hover:text-primary transition-colors">{property.name}</h3>
                  <span className="text-sm font-black text-primary">₹{Number(property.price).toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-outline font-bold flex items-center gap-1.5 mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span> {property.location}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-sm">home_work</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outline">{property.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-sm">square_foot</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outline">{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Add Property Modal */}
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
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 space-y-8">
                <header>
                  <h3 className="text-2xl font-black text-on-surface">List New Property</h3>
                  <p className="text-sm font-medium text-outline mt-1">Configure property details for the luxury market.</p>
                </header>

                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Property Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="e.g. The Glass House" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Listing Price (₹)</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="e.g. 1500000" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Property Type</label>
                    <select value={type} onChange={e => setType(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all">
                      <option>Single Family</option>
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Mansion</option>
                      <option>Apartment</option>
                      <option>Loft</option>
                    </select>
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Square Footage (sqft)</label>
                    <input value={sqft} onChange={e => setSqft(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="e.g. 5000" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-outline">Location Address</label>
                    <input value={address} onChange={e => setAddress(e.target.value)} className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-2xl outline-none font-medium text-sm focus:border-primary transition-all" placeholder="e.g. 123 Luxury Way, Beverly Hills" />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-all">Cancel</button>
                  <button onClick={async () => {
                    if (!title || !price) return;
                    try {
                      const res = await propertiesService.createProperty({
                        name: title,
                        location: address,
                        price: parseFloat(price),
                        sqft: parseInt(sqft),
                        type,
                        status: 'Available',
                      });
                      if (res.success) {
                        setPropertyList([res.data, ...propertyList]);
                        setTitle('');
                        setPrice('');
                        setSqft('');
                        setAddress('');
                        setShowAddModal(false);
                      }
                    } catch (error) {
                      console.error('Failed to create property', error);
                    }
                  }} className="flex-1 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">List Property</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
