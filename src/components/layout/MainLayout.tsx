import React from 'react';
import { AccessibilitySkipLink } from '../../modules/M08-GlobalFoundation/components/AccessibilitySkipLink';
import { PageSeo } from '../../modules/M08-GlobalFoundation/components/PageSeo';
import { GlobalHeader } from '../../modules/M08-GlobalFoundation/components/GlobalHeader';
import { GlobalFooter } from '../../modules/M08-GlobalFoundation/components/GlobalFooter';
import { ToastContainer } from '../../modules/M08-GlobalFoundation/components/ToastContainer';
import { StaticChatbot } from '../common/StaticChatbot';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] flex flex-col font-sans selection:bg-[#1E3A8A] selection:text-white">
      {/* Dynamic SEO Title & Meta Management */}
      <PageSeo />

      {/* WCAG 2.2 AA Keyboard Accessibility Skip Link */}
      <AccessibilitySkipLink />

      {/* Global Application Header */}
      <GlobalHeader />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-6 focus:outline-none">
        {children}
      </main>

      {/* Global Application Footer */}
      <GlobalFooter />

      {/* Static Chatbot Widget */}
      <StaticChatbot />

      {/* Global Toast Notification Overlay */}
      <ToastContainer />
    </div>
  );
};

