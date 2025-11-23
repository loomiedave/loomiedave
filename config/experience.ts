import type { TimelineEntry } from '@/components/ui/timeline-component';

export const WORK_EXPERIENCE: TimelineEntry[] = [
  {
    id: '1',
    title: 'District Prefectorale de Football Lome Golfe ( D.P.F.L.G )',
    logo: '/dpflglogo.svg',
    isCurrent: true,
    children: [
      {
        id: '1-1',
        title: 'Software Engineer ',
        subtitle: 'Full-time',
        period: 'Jul 2025 - Present',
        description: `- Developing the official digital platform for the District Prefectorale de Football Lomé Golfe [DPFLG](https://dpflg.vercel.app), used for federation communication and club information.
- Built a secure player license registration and verification system to digitize and streamline administrative workflows.
- Designed a reliable backend structure for managing player data, club records, and official documentation.
- Implemented a clean, maintainable UI focused on clarity, accessibility, and ease of use for staff and officials.
- Optimized the system for stability, predictable performance, and long-term scalability as federation operations grow.`,
        icon: 'code',
        skills: ['NextJs', 'Clerk Auth', 'Node.js', 'Neon DB'],
        isExpanded: true,
      },
      {
        id: '1-2',
        title: 'Project Manager',
        subtitle: 'Full-time',
        period: 'Jul 2025 - Present',
        description: `Before I was appointed the position of lead engineer , I led the development and management of the official DPFLG digital platform, overseeing project structure, technical planning, and system implementation. Coordinated workflows, built core features, and ensured the platform remained stable, scalable, and easy for federation staff to operate.`,
        icon: 'code',
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  {
    id: 'aws',
    title: 'Absolute Wellness Services',
    logo: '/awslogo.jpg',
    isCurrent: true,
    children: [
      {
        id: '30d3a9fb-021d-452a-9d27-83655369b4b9',
        title: 'Web Developer',
        subtitle: 'Part-time',
        period: '03.2025 — 05.2025',
        icon: 'code',
        description: `- Implemented responsive UI to ensure seamless experience across desktop and mobile devices.  
- Integrated form handling for insurance quote requests, streamlining the user’s application flow.  
- Optimized content and structure for search visibility and SEO best practices.  
- Built backend logic to validate form submissions, persist data, and manage lead entries securely.  
- Improved page performance via code splitting, image optimization, and lazy loading to reduce load times.`,
        skills: [
          'Next.js',
          'Node.js',
          'Form Handling',
          'SEO Optimization',
          'UI / UX Design',
          'Performance Optimization',
        ],
        isExpanded: true,
      },
    ],
  },
];
