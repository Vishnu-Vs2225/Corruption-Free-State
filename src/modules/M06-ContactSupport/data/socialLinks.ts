import type { SocialLink } from '../types/contact';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'soc-fb',
    platform: 'facebook',
    label: 'Facebook Official Page',
    href: 'https://facebook.com',
    verified: true,
  },
  {
    id: 'soc-tw',
    platform: 'twitter',
    label: 'X (Twitter) Official Handle',
    href: 'https://x.com',
    verified: true,
  },
  {
    id: 'soc-yt',
    platform: 'youtube',
    label: 'YouTube Transparency Channel',
    href: 'https://youtube.com',
    verified: true,
  },
  {
    id: 'soc-wa',
    platform: 'whatsapp',
    label: 'WhatsApp Citizen Channel',
    href: 'https://whatsapp.com',
    verified: true,
  },
];
