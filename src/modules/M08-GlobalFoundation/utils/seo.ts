export interface RouteMetadata {
  title: string;
  description: string;
  canonical: string;
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'भ्रष्टाचार मुक्त राज्य | Corruption Free State (Reg No: 1597/210/2026)',
    description: 'Transparency, accountability and citizen justice portal. Helpline: 9973076434.',
    canonical: '/',
  },
  '/about': {
    title: 'About Us | Corruption Free State',
    description: 'Learn about our vision, mission, core objectives, and statutory registration info.',
    canonical: '/about',
  },
  '/report-corruption': {
    title: 'Report Corruption | Corruption Free State',
    description: 'File confidential or evidence-backed complaints regarding administrative malpractices or bribery.',
    canonical: '/report-corruption',
  },
  '/report-corruption/guidelines': {
    title: 'Reporting Guidelines | Corruption Free State',
    description: 'Important guidelines for submitting evidence and confidential reports.',
    canonical: '/report-corruption/guidelines',
  },
  '/track-complaint': {
    title: 'Track Complaint Status | Corruption Free State',
    description: 'Enter your complaint reference code to view progress timelines and status badges.',
    canonical: '/track-complaint',
  },
  '/transparency': {
    title: 'Public Transparency Portal | Corruption Free State',
    description: 'Explore public budget allocations, open tenders register, expenditure audits, and official assets.',
    canonical: '/transparency',
  },
  '/citizen-rights': {
    title: 'Citizen Rights Framework | Corruption Free State',
    description: 'Understand statutory RTI Act rights, Citizen Charter service standards, and DBT protections.',
    canonical: '/citizen-rights',
  },
  '/contact': {
    title: 'Contact & Citizen Support | Corruption Free State',
    description: 'Official Helpline 9973076434, office address, registration 1597/210/2026, and enquiry options.',
    canonical: '/contact',
  },
  '/helpline': {
    title: 'Anti-Corruption Helpline 9973076434 | Corruption Free State',
    description: '24x7 official phone hotline for citizen assistance, corruption reporting advice, and inquiry support.',
    canonical: '/helpline',
  },
  '/awareness': {
    title: 'Awareness & Anti-Corruption Education | Corruption Free State',
    description: 'Educate yourself on corruption forms, Do’s and Don’ts if asked for a bribe, legal guides, and whistleblower rights.',
    canonical: '/awareness',
  },
  '/resources': {
    title: 'Educational Resources & Guides | Corruption Free State',
    description: 'RTI application toolkits, posters, legal reference guides, and awareness materials.',
    canonical: '/resources',
  },
};
