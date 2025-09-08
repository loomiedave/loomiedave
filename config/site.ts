import {
  Phone,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Globe,
} from 'lucide-react';

export const TEXTS_CONFIG = [
  'John Doe',
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker',
];

export const SITE_CONFIG = {
  personal: {
    name: 'Benjamin David',
    user_name: '@loomiedave',
    title: 'Full Stack Developer',
    tagline:
      'Crafting digital experiences through clean code and thoughtful design',
    initials: 'JD',
    status: 'Online',
    bio: 'Building the future, one line of code at a time ✨',
  },
  contact: {
    email: 'hello@johndoe.dev',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
  },
  sections: ['hero', 'about', 'projects', 'experience', 'contact'] as const,
};

export const ABOUT_CONFIG = {
  description: [
    "I'm a passionate developer who believes in the power of clean, efficient code and user-centered design. With expertise across the full stack, I create digital solutions that are both beautiful and functional.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or perfecting my coffee brewing technique.",
  ],
  skills: [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'DevOps', level: 70 },
  ],
};

export const STACK_CONFIG = {
  techStack: [
    {
      name: 'Next-Js',
      icon: 'https://skillicons.dev/icons?i=nextjs',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://skillicons.dev/icons?i=tailwind',
    },
    {
      name: 'Typescript',
      icon: 'https://skillicons.dev/icons?i=ts',
    },
    {
      name: 'Javascript',
      icon: 'https://skillicons.dev/icons?i=js',
    },
    {
      name: 'Nodejs',
      icon: 'https://skillicons.dev/icons?i=nodejs',
    },
    {
      name: 'Mongo DB',
      icon: 'https://skillicons.dev/icons?i=mongodb',
    },
    {
      name: 'Netlify',
      icon: 'https://skillicons.dev/icons?i=netlify',
    },
    {
      name: 'HTML',
      icon: 'https://skillicons.dev/icons?i=html',
    },
    {
      name: 'CSS',
      icon: 'https://skillicons.dev/icons?i=css',
    },
    {
      name: 'WordPress',
      icon: 'https://skillicons.dev/icons?i=wordpress',
    },
    {
      name: 'Supabase',
      icon: 'https://skillicons.dev/icons?i=supabase',
    },
    {
      name: 'Firebase',
      icon: 'https://skillicons.dev/icons?i=firebase',
    },
    {
      name: 'Prisma',
      icon: 'https://skillicons.dev/icons?i=prisma',
    },
    {
      name: 'Stack Overflow',
      icon: 'https://skillicons.dev/icons?i=stackoverflow',
    },
    {
      name: 'NPM',
      icon: 'https://skillicons.dev/icons?i=npm',
    },
    {
      name: 'PNPM',
      icon: 'https://skillicons.dev/icons?i=pnpm',
    },
    {
      name: 'React/React-Native',
      icon: 'https://skillicons.dev/icons?i=react',
    },
    {
      name: 'Postgress',
      icon: 'https://skillicons.dev/icons?i=postgresql',
    },
    {
      name: 'Vercel',
      icon: 'https://skillicons.dev/icons?i=vercel',
    },
  ],
};

export const PROJECTS_CONFIG = [
  {
    title: 'E-commerce Platform',
    year: '2024',
    tech: 'Next.js, Stripe, PostgreSQL',
    description: 'Full-stack e-commerce solution with payment integration',
    category: 'Web Development',
  },
  {
    title: 'Task Management App',
    year: '2023',
    tech: 'React, Node.js, MongoDB',
    description: 'Collaborative task management with real-time updates',
    category: 'SaaS',
  },
  {
    title: 'Portfolio Website',
    year: '2023',
    tech: 'Next.js, Tailwind CSS',
    description: 'Minimalist portfolio with smooth animations',
    category: 'Design',
  },
];

export const EXPERIENCE_CONFIG = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Startup Inc.',
    period: '2023 - Present',
    description: 'Leading frontend development for a growing SaaS platform',
    technologies: ['React', 'Next.js', 'TypeScript'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2021 - 2023',
    description: 'Developed custom web applications for various clients',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Junior Developer',
    company: 'Software Solutions Ltd.',
    period: '2020 - 2021',
    description: 'Started career building responsive web applications',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

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
    icon: 'https://skillicons.dev/icons?i=twitter',
    username: '@thename_sben',
    url: '#',
  },
  Instagram: {
    icon: 'https://skillicons.dev/icons?i=instagram',
    username: '@jagabanthaprince',
    url: '#',
  },
  Gmail: {
    icon: 'https://skillicons.dev/icons?i=gmail',
    username: 'loomiedave@gmail.com',
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


export const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'john.doe@example.com',
    href: 'mailto:john.doe@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New York, NY',
    href: null,
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '5+ Years',
    href: null,
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'Computer Science',
    href: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'johndoe.dev',
    href: 'https://johndoe.dev',
  },
];