import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';

const faqs = [
  {
    q: "Can I import leads from other CRMs?",
    a: "Yes, EstateFlow supports one-click imports from all major CRMs including Salesforce, HubSpot, and Zillow. Our data migration team can also assist with custom data sets."
  },
  {
    q: "Is there a mobile app for agents on the go?",
    a: "Absolutely. Our mobile app for iOS and Android keeps your pipeline at your fingertips with real-time push notifications and GPS tracking for showings."
  },
  {
    q: "How secure is my data?",
    a: "We use bank-level 256-bit AES encryption. Your data is stored on secure, redundant servers with 99.9% uptime guaranteed by our Service Level Agreement."
  },
  {
    q: "Do you offer white-labeling for teams?",
    a: "Yes, our Enterprise plan includes full white-labeling options, allowing you to brand the client portal and reports with your own logo and colors."
  }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Broker @ Vanguard",
    text: "EstateFlow transformed our team's velocity. We've seen a 40% increase in conversion within the first quarter.",
    img: "https://i.pravatar.cc/100?img=32"
  },
  {
    name: "Marcus Thorne",
    role: "Principal @ Skyline",
    text: "The definitive tool for modern real estate. The clinical precision of the analytics is unmatched in the industry.",
    img: "https://i.pravatar.cc/100?img=44"
  },
  {
    name: "Elena Ross",
    role: "Director @ Nexus RE",
    text: "Scaling our global operations was a nightmare until we integrated EstateFlow. It's now the heart of our firm.",
    img: "https://i.pravatar.cc/100?img=47"
  }
];

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as any }
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="grain-overlay" />
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square bg-primary/5 rounded-full blur-[160px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] aspect-square bg-secondary/5 rounded-full blur-[140px]" 
        />
      </div>

      <LandingNavbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-44 overflow-visible">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-white shadow-2xl mb-12"
            >
              <div className="flex -space-x-2">
                {[12, 45, 33].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" alt="Agent" />
                ))}
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">Trusted by 10k+ Elite Teams</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-7xl md:text-[110px] font-black mb-10 tracking-[-0.05em] text-on-surface leading-[0.9] max-w-6xl mx-auto"
            >
              Scale Your <br />
              <span className="text-gradient italic">Legacy Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-on-surface-variant max-w-3xl mx-auto mb-16 text-xl md:text-2xl font-medium leading-relaxed tracking-tight opacity-80"
            >
              The clinical OS for high-performance real estate teams. <br className="hidden md:block" />
              Dominate your market with enterprise-grade precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <button 
                  onClick={() => navigate('/auth')} 
                  className="relative px-12 py-5 bg-primary text-white rounded-[20px] font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-500"
                >
                  Get Started Free
                </button>
              </div>
              <button className="px-12 py-5 bg-white/50 backdrop-blur-md border border-white/80 text-on-surface rounded-[20px] font-black text-xl flex items-center gap-3 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-black/5">
                <span className="material-symbols-outlined text-primary text-[28px]">play_circle</span>
                Watch Demo
              </button>
            </motion.div>

            {/* Product Mockup with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="mt-32 relative max-w-6xl mx-auto px-4"
            >
              {/* Floating Glass Image */}
              <motion.img 
                src="/images/glassy_shape.png" 
                alt="Glass Shape"
                className="absolute top-[-100px] left-[-150px] w-[350px] pointer-events-none -z-10 opacity-60 mix-blend-multiply filter blur-sm"
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img 
                src="/images/glassy_shape.png" 
                alt="Glass Shape"
                className="absolute bottom-[-100px] right-[-150px] w-[400px] pointer-events-none -z-10 opacity-40 mix-blend-multiply scale-x-[-1]"
                animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[40px] blur-3xl opacity-50" />
                <div className="relative bg-white/40 backdrop-blur-3xl border-[12px] border-white/50 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl57M8jFuRP7s7GqmM9R0X2WTEXHKaKGKcHCw87qeDM40S_dsjMk2K1r3Y0ddeJQ3pqiwkAC29n0UZ_-39END7q15NyfrMYd5qyiJt4eEISw2nrDcTYmV-iv509LlS7G14rK73y51ZX6IjkKfzr0E1nSgHvLzkVbpKUSGwMEMUnB198m8vtLbInSsPAmIBj19_ZRMZvzy_SS34zIeQXhjxMTYYSUMWovvJZP9oFyu9es65dyJVtFcLZmEcv2LH8zaUhJl9PcWbkLA"
                    alt="EstateFlow CRM Dashboard"
                  />
                  
                  {/* Floating Metric Card */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 left-12 p-5 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl w-56 hidden lg:block"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                        <span className="material-symbols-outlined text-[20px]">trending_up</span>
                      </div>
                      <span className="text-[11px] font-black text-on-surface tracking-widest uppercase">Lead Velocity</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-on-surface">+128%</span>
                      <span className="text-[10px] font-bold text-emerald-600">vs LW</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 right-12 p-5 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl w-64 hidden lg:block"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Agent" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-on-surface">Alex Wright</span>
                        <span className="text-[9px] font-bold text-outline uppercase tracking-tighter">Principal Broker</span>
                      </div>
                    </div>
                    <p className="text-[11px] font-medium text-on-surface-variant italic leading-snug">
                      "Just closed the ₹100 Cr Penthouse deal. Thanks to the automated pipeline tracking!"
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 border-y border-surface-container/50 bg-white/30 backdrop-blur-md overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-[11px] font-black text-outline uppercase tracking-[0.4em] text-center mb-16 opacity-60">The operating system for elite brokerages</p>
            <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 opacity-20 hover:opacity-50 transition-opacity duration-1000">
              {['VANGUARD', 'SKYLINE', 'NEXUS RE', 'PRISM', 'ESTATE.CO'].map(brand => (
                <span key={brand} className="text-4xl font-black tracking-tighter text-on-surface">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento */}
        <section id="features" className="py-44 px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-28"
            >
              <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 tracking-[-0.04em] text-on-surface leading-none">Built for High Stakes.</motion.h2>
              <motion.p variants={itemVariants} className="text-on-surface-variant max-w-2xl mx-auto text-xl font-medium leading-relaxed opacity-70">
                Stop using general CRMs. EstateFlow is engineered specifically for high-velocity real estate workflows.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-8 group relative rounded-[40px] p-12 bg-white border border-surface-container shadow-2xl shadow-black/5 overflow-hidden transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/30 mb-12 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-4xl">view_kanban</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Clinical Deal Pipelines</h3>
                  <p className="text-on-surface-variant mb-12 max-w-md text-xl leading-relaxed font-medium opacity-70">
                    Proprietary drag-and-drop mechanics with automated triggers. Manage thousands of deals without a single misstep.
                  </p>
                  <div className="rounded-3xl overflow-hidden border border-surface-container-high shadow-2xl group-hover:scale-[1.03] transition-transform duration-700">
                    <img className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDs7Wm5WiS9fbSLol2iogLYuAWJvHlDTgPiWj2G-Jxmx5pJhNADGmTm_-mUJ3f_MQp-j9d_CCzYze1rTWeWWwSds0f0UtPffPTq_fOmXNh-JTt3JBkSGB7U5s-6X9B-AvzY4Ci9QY-J-Irnm8yBs6JQDRXmKF7v_JVcntHQptgtbIy2IgEH_ODjqfd-v2cYux_by3_aIUA_MajC7K5pXEvvSEowfAR8BlsNAltMMMRZ-Ep05oFmKEBFJnJ5eD-gSR5OXXaomXAy2k" alt="Pipeline" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 rounded-[40px] p-12 bg-primary text-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.4)] flex flex-col transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-12 shadow-inner">
                  <span className="material-symbols-outlined text-4xl">groups</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">Team Intelligence</h3>
                <p className="text-indigo-100/80 mb-12 text-xl leading-relaxed font-medium">
                  Global leaderboards, territory management, and automated lead routing for high-performance teams.
                </p>
                <div className="mt-auto pt-10">
                  <div className="flex -space-x-4 mb-8">
                    {[32, 44, 47, 51].map(i => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-primary bg-white/10 overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-10 cursor-pointer">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Agent" />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-primary bg-indigo-900 flex items-center justify-center text-[13px] font-black shadow-2xl">+24</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 rounded-[40px] p-12 bg-surface-container-low border border-surface-container-high shadow-2xl shadow-black/5 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center mb-12 shadow-xl shadow-secondary/20">
                  <span className="material-symbols-outlined text-4xl">analytics</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">Advanced KPI Engine</h3>
                <p className="text-on-surface-variant text-xl leading-relaxed font-medium opacity-70">
                  Deep attribution modeling to track every dollar of ROI from lead source to final commission.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-8 relative rounded-[40px] p-12 bg-on-surface text-white overflow-hidden transition-all duration-500 group"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-12 text-white">
                    <span className="material-symbols-outlined text-4xl">location_on</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Geographic Insights</h3>
                  <p className="text-white/60 max-w-md text-xl leading-relaxed font-medium">
                    Map-based performance hotspots and property value velocity across your entire territory.
                  </p>
                </div>
                {/* Abstract UI Elements */}
                <div className="absolute right-0 bottom-0 w-1/2 group-hover:scale-110 transition-transform duration-1000">
                  <div className="bg-white/5 backdrop-blur-xl rounded-tl-[60px] p-12 border-t border-l border-white/10">
                    <div className="space-y-6">
                      {[80, 60, 95, 70].map((w, i) => (
                        <div key={i} className="h-5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${w}%` }} 
                            transition={{ duration: 1.5, delay: i * 0.1 }} 
                            className="h-full bg-primary/40 rounded-full" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-44 relative bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Voice of Elite</span>
              <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tight">Unfiltered Results.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[40px] shadow-2xl shadow-black/5 flex flex-col"
                >
                  <div className="flex gap-1 mb-10 text-primary">
                    {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="text-xl font-medium text-on-surface-variant leading-relaxed mb-12 italic opacity-80">
                    "{t.text}"
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-8 border-t border-surface-container">
                    <img src={t.img} className="w-14 h-14 rounded-2xl object-cover shadow-lg" alt={t.name} />
                    <div>
                      <p className="text-lg font-black text-on-surface">{t.name}</p>
                      <p className="text-[11px] font-bold text-outline uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-44 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-28">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-[-0.04em] text-on-surface leading-none">Elite Plans.</h2>
              
              <div className="flex justify-center items-center gap-6 mt-16">
                <span className={`text-[13px] font-black uppercase tracking-widest ${!isYearly ? 'text-primary' : 'text-outline'}`}>Monthly</span>
                <button 
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-16 h-9 bg-surface-container rounded-full p-1 transition-colors relative"
                >
                  <motion.div 
                    animate={{ x: isYearly ? 28 : 0 }}
                    className="w-7 h-7 bg-primary rounded-full shadow-lg shadow-primary/30"
                  />
                </button>
                <div className="flex items-center gap-3">
                  <span className={`text-[13px] font-black uppercase tracking-widest ${isYearly ? 'text-primary' : 'text-outline'}`}>Yearly</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black rounded-full uppercase tracking-tighter">Save 20%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: 'Agent', price: isYearly ? '2,999' : '3,999', features: ['500 Active Leads', 'Automated Pipelines', 'Basic Analytics', 'Mobile App Access'], btn: 'Select Plan' },
                { name: 'Brokerage', price: isYearly ? '7,999' : '9,999', features: ['Unlimited Leads', 'AI Lead Scoring', 'Multi-Team Routing', 'Full API Access', 'Custom Branding'], btn: 'Start Free Trial', popular: true },
                { name: 'Enterprise', price: 'Custom', features: ['Dedicated Success Manager', 'Custom 3rd Party Integrations', 'Global SSO & Whitelabel', 'On-site Training'], btn: 'Contact Sales' },
              ].map(plan => (
                <motion.div 
                  key={plan.name} 
                  whileHover={{ y: -10 }}
                  className={`relative p-12 rounded-[48px] bg-white border border-surface-container transition-all duration-500 flex flex-col ${
                    plan.popular ? 'border-primary ring-8 ring-primary/5 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.15)]' : 'shadow-2xl shadow-black/5'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white text-[11px] font-black rounded-full uppercase tracking-widest shadow-xl">
                      Most Selected
                    </div>
                  )}
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter" style={{ color: plan.popular ? 'var(--primary)' : 'var(--on-surface)' }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-12">
                    <span className="text-5xl font-black text-on-surface tracking-tighter">₹{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-outline font-black text-lg">/mo</span>}
                  </div>
                  <ul className="space-y-6 mb-16 flex-grow">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-4 text-sm font-bold text-on-surface-variant opacity-80">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate('/auth')}
                    className={`w-full py-5 rounded-3xl font-black text-[13px] uppercase tracking-[0.2em] transition-all duration-500 ${
                      plan.popular 
                        ? 'bg-primary text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03]' 
                        : 'bg-on-surface text-white hover:bg-primary transition-colors'
                    }`}
                  >
                    {plan.btn}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-44 px-8 max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-primary/5 rounded-full blur-[160px] -z-10" />
          <div className="text-center mb-24">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Deep Dive</span>
            <h2 className="text-5xl font-black text-on-surface tracking-tight">Essential Intel.</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border border-surface-container shadow-2xl shadow-black/5 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left transition-all duration-500 hover:bg-surface-container-low"
                >
                  <span className="text-lg font-black text-on-surface tracking-tight">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center transition-transform duration-500 ${openFaq === idx ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-10 pb-10 text-on-surface-variant leading-relaxed text-lg font-medium opacity-70 border-t border-surface-container pt-8">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-on-surface rounded-[4rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] max-w-7xl mx-auto"
          >
            {/* Animated Orbs for CTA */}
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-[-50%] right-[-30%] w-full aspect-square bg-primary/20 rounded-full blur-[140px]" 
            />
            <div className="relative z-10">
              <h2 className="text-6xl md:text-[100px] font-black text-white mb-12 tracking-[-0.06em] leading-[0.85]">Join the <br /><span className="text-primary italic">Elite Force.</span></h2>
              <p className="text-white/60 font-medium text-xl md:text-2xl mb-20 max-w-3xl mx-auto leading-relaxed">
                The market doesn't wait. Join 10,000+ top-performing agents who have already claimed their territory with EstateFlow.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-14 py-6 bg-primary text-white rounded-[24px] font-black text-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 transition-all duration-500 shadow-xl"
                >
                  Start My Legacy
                </button>
                <button className="px-14 py-6 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-[24px] font-black text-xl hover:bg-white hover:text-on-surface active:scale-95 transition-all duration-500">
                  Book VIP Demo
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};
