import React from 'react';

export const cards = [
  {
    description: 'District Prefectorale Federation Lome Golfe',
    title: 'Senior FullStack Developer',
    ctaText: 'View',
    ctaExpandedText: 'Visit',
    ctaLink: 'https://dpflg.vercel.app',
    content: () => {
      return (
        <div>
          <p>
            I Built the platform for the organizaton : District Prefectorale
            Federation Lome Golfe. The project aimed to enhance usability,
            optimize performance, and extend functionality for local federation
            management.
          </p>
          <br />
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 space-y-1 text-muted-foreground">
            <li>Refactored and optimized frontend components for better UX.</li>
            <li>
              Implemented authentication and role-based access control for Admin
              Interface.
            </li>
            <li>Fixed API integration issues and improved error handling.</li>
            <li>
              Wrote unit and integration tests to ensure code reliability and
              maintainability.
            </li>
          </ul>
        </div>
      );
    },
  },
];
