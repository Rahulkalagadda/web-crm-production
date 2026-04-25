import React from 'react';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">apartment</span>
              </div>
              <span className="text-xl font-bold tracking-tight">EstateFlow</span>
            </div>
            <p className="text-on-surface-variant max-w-xs mb-8">
              The modern CRM engine for high-velocity real estate firms. Scale your portfolio with precision.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-all">
                <span className="material-symbols-outlined text-xl">group</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-all">
                <span className="material-symbols-outlined text-xl">language</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Product</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Company</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Legal</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 EstateFlow Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-gray-600 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-600 transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-gray-600 transition-colors">Cookie Settings</span>
            <span className="cursor-pointer hover:text-gray-600 transition-colors">Device Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
