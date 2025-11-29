const socialData = {
  GitHub: {
    icon: 'https://skillicons.dev/icons?i=github',
    username: '@loomiedave',
    url: 'https://github.com/loomiedave',
  },
  LinkedIn: {
    icon: 'https://skillicons.dev/icons?i=linkedin',
    username: 'olumide-david',
    url: '#',
  },
  X: {
    icon: '/X.png',
    username: '@viednonym',
    url: 'https://x.com/viednonym',
  },
  DailyDev: { icon: '/dailydev.png', username: '@jagaban', url: 'https://app.daily.dev/jagaban' },
};

export const SOCIAL_CONFIG = Object.entries(socialData).map(([name, data]) => ({
  name,
  src: data.icon,
  username: data.username,
  url: data.url,
}));
