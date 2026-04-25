import React from 'react';

export const TopAppBar: React.FC = () => {
  return (
    <header
      className="sticky top-0 w-full z-40 flex items-center h-16 px-8 gap-6"
      style={{
        background: 'rgba(252, 248, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--outline-variant)',
      }}
    >
      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <span
          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px]"
          style={{ color: 'var(--outline)' }}
        >
          search
        </span>
        <input
          type="text"
          placeholder="Search leads, properties..."
          className="w-full pl-10 pr-4 py-2 rounded-xl text-sm outline-none transition-all"
          style={{
            background: 'var(--surface-container)',
            border: '1px solid transparent',
            color: 'var(--on-surface)',
            fontFamily: 'Inter',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.boxShadow = '0 0 0 2px rgba(79,70,229,0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'transparent';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      <div className="flex-1" />

      {/* Action Icons */}
      <div className="flex items-center gap-1">
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-all"
          style={{ color: 'var(--on-surface-variant)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-container)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2 border-white"
            style={{ background: 'var(--primary)' }}
          />
        </button>
        <button
          className="w-9 h-9 flex items-center justify-center rounded-xl transition-all"
          style={{ color: 'var(--on-surface-variant)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-container)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>
      </div>

      {/* Divider */}
      <div className="w-px h-6" style={{ background: 'var(--outline-variant)' }} />

      {/* Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--on-surface)' }}>Alexander Wright</p>
          <p className="text-xs" style={{ color: 'var(--outline)' }}>Principal Owner</p>
        </div>
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAjDXpM01BaK49tx0VqA0WbGyf5NtK8nUyKdcVoD7pbTgZsM01Vwt73zeSY0nmLxVB0MAYf4AzDutYa4O3u9K5RHeli28j_BIEweTMjtWWt3VL7dyWiaHr_htmRUZCn8Z84ek2P212tZ41HU56ZknIo4SCAfz9LtxIE-EBkxUYBduuYFOFMb1dOb2pN2Ki1DVZMAg7ztVpESMWFJUwNAZrro5sJbe60oq_JGSRBX4pnlqzAb_XZa--MmXOTuAq1SLPFmjcsBjvfHM"
            alt="Alexander Wright"
            className="w-9 h-9 rounded-full object-cover"
            style={{ border: '2px solid var(--primary-container)' }}
          />
          <span
            className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white"
            style={{ background: '#10b981' }}
          />
        </div>
      </div>
    </header>
  );
};
