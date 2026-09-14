import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_METADATA } from '../utils/seo';

export interface PageSeoProps {
  title?: string;
  description?: string;
}

export const PageSeo: React.FC<PageSeoProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    const routeMeta = ROUTE_METADATA[location.pathname] || {
      title: 'भ्रष्टाचार मुक्त राज्य | Corruption Free State (Reg No: 1597/210/2026)',
      description: 'Public transparency and citizen anti-corruption platform.',
      canonical: location.pathname,
    };

    const finalTitle = title || routeMeta.title;
    const finalDescription = description || routeMeta.description;

    document.title = finalTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', finalDescription);
    }
  }, [location.pathname, title, description]);

  return null;
};
