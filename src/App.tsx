import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';

import { LandingPage } from './pages/LandingPage';
import { Pricing } from './pages/Pricing';
import { Auth } from './pages/Auth';
import { Onboarding } from './pages/Onboarding';
import { WorkspaceOverview } from './pages/WorkspaceOverview';
import { LeadsManagement } from './pages/LeadsManagement';
import { LeadDetails } from './pages/LeadDetails';
import { Pipeline } from './pages/Pipeline';
import { ReportsAnalytics } from './pages/ReportsAnalytics';
import { ChannelPartners } from './pages/ChannelPartners';
import { EmployeeManagement } from './pages/EmployeeManagement';
import { Properties } from './pages/Properties';
import { PropertyDetails } from './pages/PropertyDetails';
import { Settings } from './pages/Settings';
import { HelpCenter } from './pages/HelpCenter';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unauthenticated Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Authenticated Layout Routes */}
        <Route element={<AppLayout />}>
          <Route path="/workspace-overview" element={<WorkspaceOverview />} />
          <Route path="/leads-management" element={<LeadsManagement />} />
          <Route path="/lead-details" element={<LeadDetails />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/reports-analytics" element={<ReportsAnalytics />} />
          <Route path="/channel-partners" element={<ChannelPartners />} />
          <Route path="/employee-management" element={<EmployeeManagement />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
