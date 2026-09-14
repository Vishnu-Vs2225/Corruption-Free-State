import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

// M03 & M04 Pages
import { ReportLandingPage } from '../modules/M03-ComplaintReporting/pages/ReportLandingPage';
import { ReportGuidelinesPage } from '../modules/M03-ComplaintReporting/pages/ReportGuidelinesPage';
import { ComplaintFormPage } from '../modules/M03-ComplaintReporting/pages/ComplaintFormPage';
import { ReportReviewPage } from '../modules/M03-ComplaintReporting/pages/ReportReviewPage';
import { DemoSubmissionPage } from '../modules/M03-ComplaintReporting/pages/DemoSubmissionPage';
import { TrackComplaintPage } from '../modules/M04-ComplaintTracking/pages/TrackComplaintPage';
import { WhistleblowerPage as WhistleblowerPageM03 } from '../modules/M03-ComplaintReporting/pages/WhistleblowerPage';

// M05 Transparency & Citizen Rights Pages
import { TransparencyPage } from '../modules/M05-TransparencyRights/pages/TransparencyPage';
import { BudgetPage } from '../modules/M05-TransparencyRights/pages/BudgetPage';
import { TendersPage } from '../modules/M05-TransparencyRights/pages/TendersPage';
import { AssetsPage } from '../modules/M05-TransparencyRights/pages/AssetsPage';
import { ExpenditurePage } from '../modules/M05-TransparencyRights/pages/ExpenditurePage';
import { CitizenRightsPage } from '../modules/M05-TransparencyRights/pages/CitizenRightsPage';
import { RTIPage } from '../modules/M05-TransparencyRights/pages/RTIPage';
import { CitizenCharterPage } from '../modules/M05-TransparencyRights/pages/CitizenCharterPage';
import { DBTPage } from '../modules/M05-TransparencyRights/pages/DBTPage';

// M06 Helpline, Contact & Support Pages
import { ContactPage } from '../modules/M06-ContactSupport/pages/ContactPage';
import { HelplinePage } from '../modules/M06-ContactSupport/pages/HelplinePage';
import { FAQPage } from '../modules/M06-ContactSupport/pages/FAQPage';

// M07 Awareness & Education Pages
import { AwarenessPage } from '../modules/M07-Awareness/pages/AwarenessPage';
import { WhatIsCorruptionPage } from '../modules/M07-Awareness/pages/WhatIsCorruptionPage';
import { CorruptionTypesPage } from '../modules/M07-Awareness/pages/CorruptionTypesPage';
import { DosDontsPage } from '../modules/M07-Awareness/pages/DosDontsPage';
import { LegalGuidePage } from '../modules/M07-Awareness/pages/LegalGuidePage';
import { WhistleblowerPage } from '../modules/M07-Awareness/pages/WhistleblowerPage';
import { SuccessStoriesPage } from '../modules/M07-Awareness/pages/SuccessStoriesPage';
import { CampaignsPage } from '../modules/M07-Awareness/pages/CampaignsPage';
import { ResourcesPage } from '../modules/M07-Awareness/pages/ResourcesPage';

import { News } from '../pages/News';

// M08 Global Foundation & Catch-All Page
import { NotFoundPage } from '../modules/M08-GlobalFoundation/pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* M03 Complaint & Reporting Routes */}
        <Route path="/report-corruption" element={<ReportLandingPage />} />
        <Route path="/report-corruption/guidelines" element={<ReportGuidelinesPage />} />
        <Route path="/report-corruption/form" element={<ComplaintFormPage />} />
        <Route path="/report-corruption/review" element={<ReportReviewPage />} />
        <Route path="/report-corruption/submitted" element={<DemoSubmissionPage />} />

        {/* M04 Complaint Tracking Route */}
        <Route path="/track-complaint" element={<TrackComplaintPage />} />
        <Route path="/whistleblower-protection" element={<WhistleblowerPageM03 />} />

        {/* M05 Transparency & Citizen Rights Routes */}
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/transparency/budget" element={<BudgetPage />} />
        <Route path="/transparency/tenders" element={<TendersPage />} />
        <Route path="/transparency/assets" element={<AssetsPage />} />
        <Route path="/transparency/expenditure" element={<ExpenditurePage />} />

        <Route path="/citizen-rights" element={<CitizenRightsPage />} />
        <Route path="/citizen-rights/rti" element={<RTIPage />} />
        <Route path="/citizen-rights/citizen-charter" element={<CitizenCharterPage />} />
        <Route path="/citizen-rights/dbt" element={<DBTPage />} />

        {/* M06 Helpline, Contact & Support Routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/helpline" element={<HelplinePage />} />
        <Route path="/contact/faq" element={<FAQPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* M07 Awareness & Education Routes */}
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/awareness/what-is-corruption" element={<WhatIsCorruptionPage />} />
        <Route path="/awareness/types" element={<CorruptionTypesPage />} />
        <Route path="/awareness/dos-and-donts" element={<DosDontsPage />} />
        <Route path="/awareness/legal-guide" element={<LegalGuidePage />} />
        <Route path="/awareness/whistleblower" element={<WhistleblowerPage />} />
        <Route path="/awareness/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/awareness/campaigns" element={<CampaignsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />

        {/* Other Pages */}
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};
