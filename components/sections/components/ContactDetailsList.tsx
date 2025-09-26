import React from 'react';

import { CONTACT_DETAILS } from '@/config/contact';
import { Card, CardContent } from '@/components/ui/card';

interface ContactDetailsListProps {
  isVisible: boolean;
}

const ContactDetailsList: React.FC<ContactDetailsListProps> = ({
  isVisible,
}) => {
  return (
    <Card className="bg-transparent">
      <CardContent className="p-2">
        <div className="space-y-1">
          {CONTACT_DETAILS.map(detail => {
            const Icon = detail.icon;
            const content = (
              <div className="flex items-start p-1 transition-colors duration-200 group">
                <Icon className="w-4 h-4 text-primary" />
                <div className="mr-2">
                  <p className="text-sm text-foreground truncate hover:underline">
                    {detail.value}
                  </p>
                </div>
                {detail.href && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );

            if (detail.href) {
              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block"
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    detail.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {content}
                </a>
              );
            }

            return <div key={detail.label}>{content}</div>;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactDetailsList;
