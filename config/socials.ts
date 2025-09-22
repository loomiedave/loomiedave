const socialData = {
  GitHub: {
    icon: 'https://skillicons.dev/icons?i=github',
    username: '@loomiedave',
    url: '#',
  },
  LinkedIn: {
    icon: 'https://skillicons.dev/icons?i=linkedin',
    username: 'olumide-david',
    url: '#',
  },
  X: {
    icon: '/X.png',
    username: '@thename_sben',
    url: '#',
  },
  Instagram: {
    icon: 'https://skillicons.dev/icons?i=instagram',
    username: '@jagabanthaprince',
    url: '#',
  },
  DailyDev: { icon: '/dailydev.png', username: '@jagaban', url: '#' },
};

export const SOCIAL_CONFIG = Object.entries(socialData).map(([name, data]) => ({
  name,
  src: data.icon,
  username: data.username,
  url: data.url,
}));
